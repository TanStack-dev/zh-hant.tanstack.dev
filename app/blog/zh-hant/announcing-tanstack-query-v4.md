---
title: 發布 TanStack Query v4
published: 2022-07-14
authors:
  - Dominik Dorfmeister
---

我們很高興地宣布 [TanStack Query](/query/v4) 的下一個版本，以前稱為 `react-query` 🎉。
重新品牌命名和重組為單一代碼庫現在終於使我們能夠將 `react-query` 的樂趣帶給其他框架，如 `vue`、`svelte` 或 `solid`。

TanStack Query 建立在一個無關框架的核心之上，頂部有特定框架的適配器。這使我們能夠在框架之間共享使 TanStack Query 變得很棒的核心邏輯，如 QueryClient 或 Query Subscriptions，同時還可以在適配器內部擁有特定框架的代碼，如鉤子（useQuery 和 useMutation）。

## 如何安裝

```
npm i @tanstack/react-query
# 或
yarn add @tanstack/react-query
```

## 新功能

### 完善的離線支持

v4 已經將 TanStack Query 從一個數據獲取庫演變為真正的異步狀態管理器。以前對於必須有活躍網絡連接的所有假設現在都消失了，所以 TanStack Query _確實_ 可以與任何 Promise 一起工作，無論您如何產生它。
為了實現這一點，我們引入了全新的 [Network Mode](/query/v4/docs/guides/network-mode)，幫助 TanStack Query 決定查詢何時應該考慮在線狀態。

### 穩定的持久器

自 v3 以來，持久器存在於實驗功能中。它們允許您將查詢緩存同步到外部位置（例如 localStorage）以供日後使用。在得到大量反饋後，我們重新設計並改進了 API，現在我們提供兩個主要的持久器：

- SyncStoragePersister
- AsyncStoragePersister

這些持久器對於大多數用例都能很好地工作，但沒有什麼能阻止你編寫自己的持久器 - 只要它符合所需的接口即可。

### 支持 React 18

React 18 在今年早些時候發布，v4 現在完全支持它及其帶來的新並發功能。為了實現這一點，內部訂閱被重寫以利用新的 `useSyncExternalStore` 鉤子。

### 默認啟用追蹤查詢

追蹤查詢是一種性能優化，在 v3.6.0 中作為可選功能添加。這種優化現在是 v4 中的默認行為，這應該為您提供良好的渲染性能提升。

### 精簡的 API

隨著時間的推移，我們的一些 API 變得相當複雜，以至於它們相互矛盾。一些例子包括：

- QueryKeys 有時暴露時被轉換為數組，有時不是。
- Query Filters 不直觀且相互排斥。
- 不同方法上參數的默認值默認為相反的值

我們清理了許多這些不一致之處，以使開發者體驗更好。v4 還帶有一個代碼轉換工具，幫助您完成遷移路徑。

## 接下來是什麼？

首先是清理文檔。你可能已經注意到，它們仍然相當特定於 react，並且不時地引用 `react-query`。請耐心等待，因為我們旨在重新構建文檔，PRs 永遠受歡迎。

同時，還有更多適配器。目前，只有 React 適配器存在，但我們渴望很快添加更多框架。
