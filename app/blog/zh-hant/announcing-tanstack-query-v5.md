---
title: 發布 TanStack Query v5
published: 10/17/2023
authors:
  - Dominik Dorfmeister
---

大約一年前，我們公布了 [TanStack Query v5 路線圖](https://github.com/TanStack/query/discussions/4252)，整個團隊一直在努力開發該版本。所以我們非常高興地宣布，今天就是這一天：經過 91 個 alpha 版本、35 個 beta 版本和 16 個候選版本，TanStack Query [v5.0.0](https://github.com/TanStack/query/releases/tag/v5.0.0) 終於來了！🎉

v5 延續了 v4 的旅程，努力使 TanStack Query 更小（v5 比 v4 小約 20%）、更好、更直觀易用。此次發布的主要重點之一是精簡和簡化我們提供的 API：

## 突破性變化

作為一個重大的突破性變化，我們從代碼庫中移除了大部分重載，統一了使用 `useQuery` 和其他鉤子的方式。這是我們在 v4 中想做的事情，但由於 [TypeScript 的限制](https://github.com/microsoft/TypeScript/issues/43371)而無法實現。TypeScript 在 TS 4.7 中解決了這個問題，因此我們能夠移除所有用於調用 `useQuery` 時的不同參數數量的重載。這是一個巨大的開發體驗提升，因為帶有重載的方法通常會有相當差的 TypeScript 錯誤信息。

這是 v5 中最大的突破性變化，但我們認為這是值得的。API 現在更加一致 - 你總是只需傳遞*一個*對象。為了減輕手動更改所有出現的痛苦，我們在過去幾個月一直努力為這一即將到來的變化做準備。文檔已經更改為使用新的 API，我們在我們的 eslint 包中發布了一個可自動修復的 [eslint 規則](/query/v4/docs/eslint/prefer-query-object-syntax)。此外，v5 還帶有 [一個代碼轉換工具](/query/v5/docs/react/guides/migrating-to-v5#codemod) 來幫助過渡。

除此之外，我們還將 `cacheTime` 重命名為 `gcTime` 以更好地反映它的功能，將 `keepPreviousData` 與 `placeholderData` 合併，將 `loading` 狀態重命名為 `pending`，並 [移除了回調](https://github.com/TanStack/query/discussions/5279) 從 `useQuery`。所有這些變化使 v5 成為新手入門的最一致和最佳版本。

要了解更多關於突破性變化的信息，請查看我們的[遷移指南](/query/v5/docs/react/guides/migrating-to-v5)。

## 新功能

當然，v5 也帶來了許多令人驚嘆的新功能 🚀：

### 簡化的樂觀更新

通過利用 `useMutation` 返回的 `variables`，享受全新的、簡化的執行樂觀更新的方式，無需手動編寫更新緩存的代碼。有關更多詳情，請查看[樂觀更新文檔](/query/v5/docs/react/guides/optimistic-updates)

### 可共享的變異狀態

一個經常被請求的功能，如這個 [兩年前的問題](https://github.com/TanStack/query/issues/2304) 所見，終於在 v5 中實現：現在你可以通過新的 [useMutationState](/query/v5/docs/react/reference/useMutationState) 鉤子訪問所有變異的狀態，在組件之間共享。

### 一流的 `suspense` 支持

沒錯 - 用於數據獲取的 `suspense` 不再是實驗性的，而是完全支持的。React Query 提供新的 `useSuspenseQuery`、`useSuspenseInfiniteQuery` 和 `useSuspenseQueries` 鉤子。查看 [suspense 文檔](/query/v5/docs/react/guides/suspense) 了解與非 suspense 版本的區別。

#### 使用 React Server Components 進行流式傳輸

v5 還提供了一個針對 nextJs 中服務器上 suspense 的實驗性集成，將兩個世界的優點結合起來：[react-query-next-experimental](/query/v5/docs/react/guides/advanced-ssr#experimental-streaming-without-prefetching-in-nextjs) 適配器允許我們編寫單一的 `useSuspenseQuery`，它將盡早開始數據獲取：在服務器上，在 SSR 期間。然後它將結果流式傳輸到客戶端，在那裡它會自動放入緩存中，為我們提供所有 React Query 的交互性和數據同步能力。

### 改進的無限查詢

無限查詢現在可以 [預取多個頁面](/query/v5/docs/react/guides/prefetching)，而且你還可以選擇指定存儲在緩存中的 [頁面最大數量](/query/v5/docs/react/guides/infinite-queries#what-if-i-want-to-limit-the-number-of-pages)。

### 新的開發工具

Query 開發工具已經從頭開始以框架無關的方式重新編寫，使其適用於所有適配器。它們還進行了 UI 改造並增加了一些新功能，如緩存內聯編輯和亮色模式。

### 精細持久化

另一個長期存在的 [2021 年的討論](https://github.com/TanStack/query/discussions/2649) 強調了具有即時恢復功能的精細持久化的重要性（特別是對於移動開發），這是 `PersistQueryClient` 插件所不具備的。在 v5 中，我們現在有一個新的 [experimental_createPersister](/query/v5/docs/react/plugins/createPersister) 插件，允許你單獨持久化查詢。

### `queryOptions` API

現在我們有了一種統一的調用 `useQuery` 的方式（只用一個對象作為參數），我們也可以在此基礎上構建更好的抽象。新的 [queryOptions](/query/v5/docs/react/typescript#typing-query-options) 函數為我們提供了一種類型安全的方式來在 `useQuery` 和命令式方法（如 `queryClient.prefetchQuery`）之間共享查詢定義。此外，它還可以使 `queryClient.getQueryData` 類型安全。

---

## 謝謝您

我們希望你使用 v5 的體驗與我們構建它的體驗一樣愉快。我們想說的是感謝每一位讓這個版本成為可能的人。無論你是核心貢獻者，實現了路線圖中的問題，修正了文檔中的錯別字，還是對 alpha 版本提供了反饋：每一項貢獻都很重要！是人使這個庫變得偉大，我們很幸運能擁有如此驚人的社區。❤️
