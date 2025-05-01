---
title: TanStack Router 中的 TypeScript 性能里程碑
published: 09/17/2024
authors:
  - Christopher Horobin
---

TanStack Router 不斷推動類型安全路由的邊界。

路由器的組件如 `<Link>` 及其鉤子如 `useSearch`、`useParams`、`useRouteContext` 和 `useLoaderData`，從路由定義中進行推斷，提供出色的類型安全。使用 TanStack Router 的應用程序通常會在它們的路由定義中將擁有複雜類型的外部依賴用於 `validateSearch`、`context`、`beforeLoad` 和 `loader`。

雖然開發體驗很棒，但當路由定義積累成一棵路由樹並變得龐大時，編輯器體驗可能會開始變慢。我們對 TanStack Router 進行了許多 TypeScript 性能改進，使得問題只有在推斷複雜度變得非常大時才開始出現。我們密切關注諸如實例化等診斷，並嘗試減少 TypeScript 對每個單獨的路由定義進行類型檢查所需的時間。

盡管所有這些過去的努力（確實有所幫助），我們必須解決最大的問題。在 TanStack Router 中獲得良好編輯器體驗的根本問題並不一定與整體 typescript 檢查時間有關。我們一直在努力解決的問題是 TypeScript 語言服務在對累積的路由樹進行類型檢查時的瓶頸。對於那些熟悉追蹤 TypeScript 的人來說，大型 TanStack Router 應用程序的追蹤看起來可能與下圖類似：

![顯示路由樹正在被推斷的追蹤圖](/blog-assets/tsr-perf-milestone/tracing-slow.png)

對於那些不知道的人，你可以通過以下方式從 TypeScript 生成追蹤：

```
tsc --generatetrace trace
```

這個例子有 400 個路由定義，所有這些定義都使用 `zod` 進行 `validateSearch` 和通過路由的 `context` 和 `loader` 集成 TanStack Query - 這是一個極端的例子。追蹤開始處的大塊區域是 TypeScript 在首次遇到 `<Link>` 組件實例時進行類型檢查的內容。

語言服務器的工作是從頭開始對文件（或文件的一個區域）進行類型檢查，但僅針對該文件/區域。因此，這意味著每當您與 `<Link>` 組件的實例交互時，語言服務都必須執行這項工作。結果證明，這就是我們在從累積的路由樹中推斷所有必要類型時遇到的瓶頸。如前所述，路由定義本身可以包含來自外部驗證庫的複雜類型，這些類型也需要推斷。

很早就很明顯，這顯然會減慢編輯器體驗。

## 為語言服務分解工作

理想情況下，語言服務應該只需要根據 `<Link>` 導航到的 `to` 位置來推斷路由定義，而不必遍歷整個路由樹。這樣，語言服務就不需要忙於推斷非導航目標的路由定義類型。

不幸的是，基於代碼的路由樹依賴推斷來構建路由樹，這會觸發上面追蹤中顯示的大塊區域。然而，TanStack Router 的基於文件的路由，會在創建或修改路由時自動生成路由樹。這意味著我們可以在這裡進行一些探索，看看是否能提高性能。

以前即使是基於文件的路由，路由樹的創建方式如下：

```tsx
export const routeTree = rootRoute.addChildren({
  IndexRoute,
  LayoutRoute: LayoutRoute.addChildren({
    LayoutLayout2Route: LayoutLayout2Route.addChildren({
      LayoutLayout2LayoutARoute,
      LayoutLayout2LayoutBRoute,
    }),
  }),
  PostsRoute: PostsRoute.addChildren({ PostsPostIdRoute, PostsIndexRoute }),
})
```

生成路由樹是減少路由樹繁瑣配置的結果，同時保持推斷關鍵部分。這就是引入第一個重要變化以提高編輯器性能的地方。與其推斷路由樹，不如利用這個生成步驟來*聲明路由樹*。

```tsx
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LayoutRoute: typeof LayoutRouteWithChildren
  PostsRoute: typeof PostsRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LayoutRoute: LayoutRouteWithChildren,
  PostsRoute: PostsRouteWithChildren,
}

export const routeTree = rootRoute._addFileChildren(rootRouteChildren)
```

注意使用 `interface` 來聲明組成路由樹的子項。在生成路由樹時，對所有路由及其子項重複此過程。有了這個變化，運行追蹤讓我們更好地了解語言服務內部發生的事情。

![顯示路由樹被聲明的追蹤圖](/blog-assets/tsr-perf-milestone/tracing-declare-route-tree.png)

這仍然很慢，我們還沒有完全解決問題，但有所改變 - _追蹤不同了_。整個路由樹的類型推斷仍在發生，但現在是在*其他地方*進行。經過對我們的類型進行梳理，發現它發生在一個名為 `ParseRoute` 的類型中。

```tsx
export type ParseRoute<TRouteTree, TAcc = TRouteTree> = TRouteTree extends {
  types: { children: infer TChildren }
}
  ? unknown extends TChildren
    ? TAcc
    : TChildren extends ReadonlyArray<any>
    ? ParseRoute<TChildren[number], TAcc | TChildren[number]>
    : ParseRoute<TChildren[keyof TChildren], TAcc | TChildren[keyof TChildren]>
  : TAcc
```

這個類型沿著路由樹向下走，創建所有路由的聯合類型。這個聯合類型反過來用於創建從 `id` -> `Route`、`from` -> `Route` 以及 `to` -> `Route` 的類型映射。這種映射的一個例子存在於映射類型中。

```tsx
export type RoutesByPath<TRouteTree extends AnyRoute> = {
  [K in ParseRoute<TRouteTree> as K['fullPath']]: K
}
```

這裡的重要發現是，在使用基於文件的路由時，我們可以通過在生成路由樹時自己輸出該映射類型來完全跳過 `ParseRoute` 類型。相反，我們可以生成以下內容：

```tsx
export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/posts': typeof PostsRouteWithChildren
  '/posts/$postId': typeof PostsPostIdRoute
  '/posts/': typeof PostsIndexRoute
  '/layout-a': typeof LayoutLayout2LayoutARoute
  '/layout-b': typeof LayoutLayout2LayoutBRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/posts/$postId': typeof PostsPostIdRoute
  '/posts': typeof PostsIndexRoute
  '/layout-a': typeof LayoutLayout2LayoutARoute
  '/layout-b': typeof LayoutLayout2LayoutBRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/posts': typeof PostsRouteWithChildren
  '/_layout/_layout-2': typeof LayoutLayout2RouteWithChildren
  '/posts/$postId': typeof PostsPostIdRoute
  '/posts/': typeof PostsIndexRoute
  '/_layout/_layout-2/layout-a': typeof LayoutLayout2LayoutARoute
  '/_layout/_layout-2/layout-b': typeof LayoutLayout2LayoutBRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/posts'
    | '/posts/$postId'
    | '/posts/'
    | '/layout-a'
    | '/layout-b'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/posts/$postId' | '/posts' | '/layout-a' | '/layout-b'
  id:
    | '__root__'
    | '/'
    | '/_layout'
    | '/posts'
    | '/_layout/_layout-2'
    | '/posts/$postId'
    | '/posts/'
    | '/_layout/_layout-2/layout-a'
    | '/_layout/_layout-2/layout-b'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LayoutRoute: typeof LayoutRouteWithChildren
  PostsRoute: typeof PostsRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LayoutRoute: LayoutRouteWithChildren,
  PostsRoute: PostsRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
```

除了聲明子項外，我們還聲明了將路徑映射到路由的接口。

這一變化以及其他類型級別的變更，使得僅在這些類型未註冊時才有條件地使用 `ParseRoute`，從而產生了我們一直期望的追蹤結果 🥳

![路由樹聲明被更快推斷的追蹤圖](/blog-assets/tsr-perf-milestone/tracing-faster.png)

引用 `<Link>` 的第一個文件不再觸發對整個路由樹的推斷，這大大提高了語言服務的感知速度。

通過這樣做，當 `<Link>` 引用特定路由時，TypeScript 將推斷該路由所需的類型。當所有路由都被連接時，這可能不會轉化為總體更好的 TypeScript 類型檢查時間，但對於文件/區域內的語言服務來說，這是顯著的速度提升。

兩者之間的差異非常明顯，如下面這些有複雜推斷的大型路由樹所示（此示例中有 400 個）：

<div style="display: flex;">
  <video src="/blog-assets/tsr-perf-milestone/language-service-slow.mp4" width="50%" height="480" autoplay muted loop></video>
  <video src="/blog-assets/tsr-perf-milestone/language-service-fast.mp4" width="50%" height="480" autoplay muted loop></video>
</div>

你可能認為這是*作弊*，因為我們在路由樹生成階段做了很多繁重的工作。我們對此的回應是，這個生成步驟對於基於文件的路由（現在也包括虛擬基於文件的路由）一直存在，並且每當您修改或創建新路由時都是必要的步驟。

因此，一旦創建了路由並生成了路由樹，推斷在路由定義中的所有內容中保持不變。這意味著您可以對 `validateSearch`、`beforeLoad`、`loader` 等進行更改，推斷的類型總是立即反映出來。

DX 沒有改變，但編輯器中的性能感覺非常棒（特別是當您處理大型路由樹時）。

## 基本規則

這一變化涉及對 TanStack Router 的許多導出進行改進，使消費這些生成的類型更加高效，同時在使用基於代碼的路由時仍能回退到整個路由樹推斷。我們的代碼庫中仍然有一些區域依賴於完整的路由樹推斷。這些區域是我們版本的寬鬆/非嚴格模式。

```tsx
<Link to="." search={{ page: 0 }} />
<Link to=".." search={{page: 0}} />
<Link to="/dashboard" search={prev => ({..prev, page: 0 })} />
```

以上三種 `<Link>` 的用法都需要推斷整個路由樹，因此在與它們交互時會導致較差的編輯器體驗。

在前兩個實例中，TanStack Router 不知道您想要導航到哪個路由，因此它盡最大努力猜測從路由樹中所有路由推斷出的非常寬鬆的類型。上面的第三個 `<Link>` 實例在 `search` 更新器函數中使用了 `prev` 參數，但在這種情況下，TanStack Router 不知道您是從哪個 `Route` 導航 `from`，因此它需要再次通過掃描整個路由樹來猜測 `prev` 的寬鬆類型。

在您的編輯器中最高效的 `<Link>` 用法如下：

```tsx
<Link from="/dashboard" search={{ page: 0 }} />
<Link from="/dashboard" to=".." search={{page: 0}} />
<Link from="/users" to="/dashboard" search={prev => ({...prev, page: 0 })} />
```

在這些情況下，TanStack Router 可以將類型縮小到特定的路由。這意味著隨著應用程序的擴展，您可以獲得更好的類型安全和更好的編輯器性能。因此，我們鼓勵在這些情況下使用 `from` 和/或 `to`。需要明確的是，在第三個例子中，只有在使用 `prev` 參數時才需要使用 `from`，否則，TanStack Router 不需要推斷整個路由樹。

這些更寬鬆的類型也出現在 `strict: false` 模式中。

```tsx
const search = useSearch({ strict: false })
const params = useParams({ strict: false })
const context = useRouteContext({ strict: false })
const loaderData = useLoaderData({ strict: false })
const match = useMatch({ strict: false })
```

在這種情況下，通過使用推薦的 `from` 屬性可以實現更好的編輯器性能和類型安全。

```tsx
const search = useSearch({ from: '/dashboard' })
const params = useParams({ from: '/dashboard' })
const context = useRouteContext({ from: '/dashboard' })
const loaderData = useLoaderData({ from: '/dashboard' })
const match = useMatch({ from: '/dashboard' })
```

## 展望未來

展望未來，我們相信 TanStack Router 在類型安全和 TypeScript 性能之間取得了最佳平衡，無需犧牲基於文件（和虛擬基於文件）路由中的路由定義使用的類型推斷質量。您的路由定義中的所有內容都保持被推斷，生成的路由樹中的變化只是通過在重要的地方聲明必要的類型來幫助語言服務，這是您永遠不會想自己編寫的東西。

這種方法對於語言服務來說也似乎是可擴展的。我們能夠創建數千個路由定義，只要您堅持使用 TanStack Router 的 `strict` 部分，語言服務就能保持穩定。

我們將繼續改進 TanStack Router 的 TypeScript 性能，以減少總體檢查時間並進一步提高語言服務性能，但仍然認為這是一個重要的里程碑，值得分享，我們希望 TanStack Router 的用戶會欣賞。
