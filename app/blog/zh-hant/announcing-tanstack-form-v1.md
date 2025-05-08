---
title: 發布 TanStack Form v1
published: 2025-03-03
authors:
  - Corbin Crutchley
---

![TanStack Form v1](/blog-assets/announcing-tanstack-form-v1/form_header.png)

我們很高興地宣布 [TanStack Form](/form/v1) 的第一個穩定版本現已發布並準備用於生產環境！🥳

我們在發布時支持五個框架：React、Vue、Angular、Solid 和 Lit，以及針對每個特定框架的眾多功能。

# 如何安裝

```shell
$ npm i @tanstack/react-form
# 或
$ npm i @tanstack/vue-form
# 或
$ npm i @tanstack/angular-form
# 或
$ npm i @tanstack/solid-form
# 或
$ npm i @tanstack/lit-form
```

# 一段歷史

差不多兩年前，[我看到 Tanner 在 BlueSky（當時是僅邀請平台）上發佈了一則消息，宣布他正在開發一個新項目：TanStack Form](https://bsky.app/profile/tannerlinsley.com/post/3ju5z473w5525)。

![我和 Tanner 在 Bluesky 上關於 TanStack Form 的對話](/blog-assets/announcing-tanstack-form-v1/tanstack_form_bluesky_announce.png)

當時，我剛剛為 React 推出了一個名為 "[HouseForm](https://web.archive.org/web/20240101000000*/houseform.dev)" 的替代表單庫，我立即被 Tanner 的庫帶來的一些想法所吸引。

我很幸運能夠參加 Tanner 不久後也會參加的黑客松，我們能夠抽出一些時間將 HouseForm 中的一些 API 集成到這個項目中。

從那時起，Tanner 將 Form 的許多控制權交給了我和一群優秀的其他維護者。

那麼，在這段時間裡我們構建了什麼呢？

# 功能

長時間醞釀的優勢之一是 TanStack Form 一上線就帶來了一系列您可以在第一天就利用的功能。

讓我們以 React 適配器為例，來看看*僅僅一部分*功能：

## 極致類型安全

像所有 TanStack 項目一樣，Form 徹底改變了"類型安全"表單庫的含義。

```tsx
const form = useForm({
	defaultValues: {
        name: "",
        age: 0
    }
});

// TypeScript 將正確地告訴您 `firstName` 不是有效字段
<form.Field name="firstName"/>

// TypeScript 將正確地告訴您 `name` 的類型是 `string`，而不是 `number`
<form.Field name="name" children={field => <NumberInput value={field.state.value}/>}/>
```

我們甚至支持對 `<form.Field>` 中返回的錯誤進行類型檢查：

```tsx
<form.Field
  name="age"
  validators={{
    onChange: ({ value }) => (value < 12 ? { tooYoung: true } : undefined),
  }}
  children={(field) => (
    <>
      <NumberInput value={field.state.value} />
      // TypeScript 將正確地告訴您 `errorMap.onChange` // 是一個對象，而不是字符串
      <p>{field.state.meta.errorMap.onChange}</p>
    </>
  )}
/>
```

> 哦，對了，我們同時支持基於字段的驗證和基於表單的驗證。可以混合搭配它們！

最好的部分是什麼？[您不需要傳遞任何 typescript 泛型來獲得這種級別的類型安全](/form/latest/docs/philosophy#generics-are-grim)。一切都從您的運行時使用中推斷出來。

## 模式驗證

感謝 [Zod](http://zod.dev/)、[Valibot](https://valibot.dev) 和 [ArkType](https://arktype.io/) 的創建者的出色工作，我們開箱即支持 [Standard Schema](https://github.com/standard-schema/standard-schema)；無需其他包。

```tsx
const userSchema = z.object({
  age: z.number().gte(13, '您必須年滿 13 歲才能創建帳戶'),
})

function App() {
  const form = useForm({
    defaultValues: {
      age: 0,
    },
    validators: {
      onChange: userSchema,
    },
  })
  return (
    <div>
      <form.Field
        name="age"
        children={(field) => {
          return <>{/* ... */}</>
        }}
      />
    </div>
  )
}
```

## 異步驗證

不僅如此！我們還支持異步函數來驗證您的代碼；包括內置的防抖動和基於 [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) 的取消：

```tsx
<form.Field
  name="age"
  asyncDebounceMs={500}
  validators={{
    onBlurAsync: async ({ value, signal }) => {
      const currentAge = await fetchCurrentAgeOnProfile({ signal })
      return value < currentAge ? '您只能增加年齡' : undefined
    },
  }}
/>
```

## 平台支持

我們不僅支持多個框架，就像我們一開始提到的那樣；我們還支持多個運行時環境。無論您使用的是 React Native、NativeScript，還是像 Next.js 或 [TanStack Start](/start) 這樣的 SSR 解決方案，我們都能為您提供支持。

事實上，如果您使用 SSR 解決方案，我們甚至使服務器端表單驗證變得輕而易舉：

```typescript
// app/routes/index.tsx，但也可以提取到任何其他路徑
import { createServerValidate, getFormData } from '@tanstack/react-form/start'
import { yourSchemaHere } from '~/constants/forms'

const serverValidate = createServerValidate({
  ...formOpts,
  onServerValidate: yourSchemaHere,
})

export const getFormDataFromServer = createServerFn({ method: 'GET' }).handler(
  async () => {
    return getFormData()
  }
)
```

> 此代碼示例省略了一些相關代碼以保持概覽性。[有關我們的 SSR 集成的更多詳情，請查看我們的文檔。](/form/latest/docs/framework/react/guides/ssr)

瞧，完全相同的驗證邏輯同時運行在您的前端和後端。即使用戶的瀏覽器禁用了 JavaScript，您的表單也會顯示錯誤！

# 展望未來

然而，我們並不滿足現狀 - 我們計劃在 v1 穩定版發布後添加新功能。這些功能包括：

- [持久化 API](https://github.com/TanStack/form/pull/561)
- [Svelte 5 適配器](https://github.com/TanStack/form/issues/516)
- [更好的提交值轉換 DX](https://github.com/TanStack/form/issues/418)
- [表單組](https://github.com/TanStack/form/issues/419)

以及更多功能。

# 感謝**您**

有太多人我想感謝，如果我開始列舉，可能永遠不會結束。相反，我將針對我想感謝的每一群人：

- 感謝我們的貢獻者：許多人一起努力才使這一切成為可能。從其他 TanStack 項目的維護者提供指導，到臨時的 PR；這一切都幫助我們越過了終點線。

- 感謝我們的早期採用者：那些冒險嘗試我們的工具並提供寶貴反饋的人，幫助我們完善 API 和功能。
- 感謝介紹我們工具的內容創作者：您將更多的目光帶到我們的項目上 - 通過教育和反饋使其變得更好。
- 感謝更廣泛的社區：您對使用我們工具的熱情極大地推動了團隊。

最後，感謝**您**花時間閱讀並探索我們最新的工具。❤️
