---
title: 為什麼 TanStack Start 放棄適配器
published: 11/22/2024
authors:
  - Tanner Linsley
---

![Nitro Header](/blog-assets/why-tanstack-start-is-ditching-adapters/nitro.jpg)

## 要不要使用「適配器」？

正如我在構建 TanStack Start（我的新型 TanStack 驅動的全棧框架）過程中所學到的，構建一個新的前端 Javascript 框架是一項艱巨的任務。這裡有許多活動部件：

- 路由
- 服務器端渲染
- RPC 和 API
- 開發工具
- **部署與託管**

最後一項，**部署與託管**尤其棘手，因為現在似乎每個雲環境都有自己獨特的方式來使事情「正常運行」。當面對這個 TanStack Start 的決定時，我顯然知道我想首先支持哪些主機，而 Vercel 位列榜首。

我的第一反應是開始構建一個可以為每個主機提供「適配器」的系統，然後先專注於編寫 Vercel 適配器。

然而，這個計劃從一開始就有缺陷。很快就意識到，我個人將負責（至少在開始時）編寫大部分甚至全部代碼，使 TanStack Start 不僅能在 Vercel 上運行，還能在許多其他目標和平台上運行。經過一些快速研究，僅僅這項任務就足以讓我質疑自己構建服務器相關 JS 框架的動機。

從技術上講，僅僅通過遵守一些輸出文件/目錄命名約定，部署到 Vercel 的工作已經非常簡單。然而，面對需要支持的環境/主機數量之多，讓我感到無從下手。有很多！看看 [Remix 不斷增長的服務器適配器列表](https://remix.run/docs/en/main/other-api/adapter)！Remix 並不是唯一擁有此類列表的框架。大多數服務器相關的 JS 框架都有類似的東西。我基本上要在框架的前幾個月內寫至少 10 個適配器，而我幾乎還沒有進入框架本身的激動人心的功能（更不用說維護和更新這些適配器的工作）。

這裡的殘酷現實是，**沒有辦法繞過這個問題。如果您的框架在框架中提供任何面向服務器的代碼，您需要確保它可以在您可以部署它的任何地方完美運行。**

因此，當我即將屈服於編寫上百個適配器並在餘生中處理上游破壞性變更的無限悲傷時，我與我的朋友 [Ryan Carniato](https://twitter.com/ryancarniato) 談論了 Solid JS 如何在我們的表親框架 [Solid Start](https://start.solidjs.com/) 中解決這個問題，他自信地說："直接使用 Vite 和 Nitro。"

## TanStack Start = Nitro + Vite + TanStack Router

[Nitro](https://nitro.unjs.io/) 是一個「用於構建具有自己觀點的服務器端框架的 JavaScript 工具包」，由 [Vite](https://vite.dev/) 提供支持。那麼，是什麼讓它如此特別呢？

Nitro 有很多令人驚嘆的功能，使其對於構建框架非常有用，但其中一個最酷的部分是它由 H3 和 Vite 提供支持。Nitro 的標語直接說明了這一點：「創建具有所需一切的 Web 服務器，並**將它們部署到您喜歡的任何地方**」（重點是我的）。

簡單來說，Nitro 有效地使 TanStack Start「無適配器」。它使用 H3，一個 HTTP 框架，它代表您維護自己的低級適配器，因此您可以編寫一次服務器代碼並在任何地方使用它（聽起來很像 React！）。

通過使用 Nitro，TanStack Start 的所有適配器問題都消失了。我甚至不需要考慮它們！

事實上，部署到 Vercel 甚至比我最初計劃的還要容易：只需將 `vercel` 目標傳遞給我們的 `defineConfig` 的 `server.preset` 選項，它會傳遞給 Nitro：

```jsx
import { defineConfig } from '@tanstack/start/config'

export default defineConfig({
  server: {
    preset: 'vercel',
  },
})
```

## 它支持什麼？

Nitro、H3 和 Vite **令人印象深刻，至少可以這麼說。** 我們很高興看到在第一次嘗試時，大量 Vercel 功能完美地開箱即用，包括 GitHub 集成、服務器函數、邊緣函數/中間件、不可變部署、環境變量、服務器端渲染，甚至流式傳輸。

這是一個龐大的列表，我們通過使用 Nitro 和 Vite 基本上是免費獲得的。

## TanStack Start 即將到來！

隨著構建和部署問題的解決，並且將我的 GitHub 存儲庫直接集成到我個人喜愛的託管提供商的內置支持，我終於可以專注於我認為使 TanStack Start 與眾不同的內容：

- 一流的完全類型安全路由器
- 用於構建服務器相關 RPC 的靈活原語
- 可選的服務器功能（SSR、API、RSC 等）
- 與其他 TanStack 原語（如 TanStack Query）的深度集成
- 以及更多即將推出的功能！

## 更進一步

能夠將這麼多工作卸載給 Nitro 和 Vite 並獲得如此多的出色功能真是太棒了，但這絕對不是使用託管平台（尤其是 Vercel）*每個*功能的 100% 完整解決方案，在 Vercel 中我們可以訪問的不僅僅是部署。我們還在考慮更多功能，例如[邊緣網絡緩存](https://vercel.com/docs/edge-network/caching)以及我個人最喜歡的[\*偏移保護](https://vercel.com/docs/deployments/skew-protection)\*。

例如，偏移保護（確保客戶端和服務器對各自的部署保持同步）需要的不僅僅是構建步驟。它還涉及能夠在運行時將平台原語深度集成到框架中，或者在特定情況下，能夠將特定的 cookie 或標頭注入到針對 Vercel 的傳出 API/服務器請求中。

我很高興地報告，TanStack Start 將附帶令人驚嘆的強大中間件原語（適用於 API 路由和服務器函數 RPC），這將使其成為一行程序，甚至可能是自動的（希望如此）。

這種級別的開發者體驗和集成正是讓我對未來感到興奮的原因，我相信這也是開源的真正意義所在：將生態系統中強大的工具組合在一起，為開發者和用戶提供驚人的體驗。

我想不出比 TanStack Start、Nitro、Vite 和 Vercel 更好的組合，為您提供一流的網絡應用體驗。

## 60 秒內嘗試

TanStack Start 目前處於 Beta 階段！點擊下面的["部署"](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftanstack%2Frouter%2Ftree%2Fmain%2Fexamples%2Freact%2Fbasic-file-based&project-name=my-tanstack-project&repository-name=my-tanstack-project)按鈕，可以在大約 1 分鐘內在 Vercel 上創建和部署 TanStack Start "Basic" 模板的新副本。

[![使用 Vercel 部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftanstack%2Frouter%2Ftree%2Fmain%2Fexamples%2Freact%2Fbasic-file-based&project-name=my-tanstack-project&repository-name=my-tanstack-project)

我們希望您喜歡我們正在構建的產品，並期待您的反饋！
