import { handleRedirects } from '~/utils/handleRedirects.server'
import { Library } from '.'
import { FaGithub, FaBolt, FaCogs } from 'react-icons/fa'
import { VscPreview, VscWand } from 'react-icons/vsc'
import { BiBookAlt } from 'react-icons/bi'
import { twMerge } from 'tailwind-merge'

const repo = 'tanstack-dev/query'

const textStyles = 'text-red-500 dark:text-red-400'

export const queryProject = {
  id: 'query',
  name: 'TanStack Query',
  cardStyles: `shadow-xl shadow-red-700/20 dark:shadow-lg dark:shadow-red-500/30 text-red-500 border-2 border-transparent hover:border-current`,
  docsRoot: 'docs/zh-hant',
  to: '/query',
  tagline: `強大的非同步狀態管理、伺服器狀態工具和資料獲取`,
  description:
    '強大的非同步狀態管理、伺服器狀態工具和資料獲取。獲取、緩存、更新和處理您的 TS/JS、React、Vue、Solid、Svelte 和 Angular 應用程式中所有形式的非同步資料，無需接觸任何「全局狀態」',
  ogImage: 'https://github.com/tanstack/query/raw/main/media/repo-header.png',
  badge: undefined,
  bgStyle: 'bg-red-500',
  textStyle: 'text-red-500',
  repo,
  latestBranch: 'main',
  latestVersion: 'v5',
  availableVersions: ['v5', 'v4', 'v3'],
  colorFrom: 'from-red-500',
  colorTo: 'to-amber-500',
  textColor: 'text-amber-500',
  frameworks: ['react', 'solid', 'vue', 'svelte', 'angular'],
  scarfId: '53afb586-3934-4624-a37a-e680c1528e17',
  defaultDocs: 'framework/react/overview',
  handleRedirects: (href: string) => {
    handleRedirects(
      reactQueryV3List,
      href,
      '/query/v3',
      '/query/latest',
      'from=reactQueryV3'
    )

    handleRedirects(
      reactQueryV3RemovedInV5List,
      href,
      '/query/v3',
      '/query/v5',
      'from=reactQueryV3'
    )
  },
  menu: [
    {
      icon: <VscPreview />,
      label: '範例',
      to: '/query/latest/docs/framework/react/examples/basic',
    },
    {
      icon: <BiBookAlt />,
      label: '文檔',
      to: '/query/latest/docs/framework/react/overview',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      to: `https://github.com/${repo}`,
    },
  ],
  featureHighlights: [
    {
      title: '聲明式和自動化',
      icon: (
        <VscWand
          className={twMerge('motion-safe:animate-pulse', textStyles)}
          style={{
            animationDuration: '5s',
            animationTimingFunction: 'ease-in-out',
          }}
        />
      ),
      description: (
        <div>
          手動編寫資料獲取邏輯的時代已經過去。告訴 TanStack Query
          在哪裡獲取資料以及需要多新鮮的資料，其餘的都是自動化的。它可以{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            開箱即用地處理緩存、背景更新和過時資料，而無需任何配置
          </span>
          。
        </div>
      ),
    },
    {
      title: '簡單和熟悉',
      icon: (
        <FaBolt
          className={twMerge('motion-safe:animate-bounce', textStyles)}
          style={{
            animationDuration: '2s',
            animationTimingFunction: 'ease-in-out',
          }}
        />
      ),
      description: (
        <div>
          如果您知道如何使用 Promise 或 async/await，那麼您已經知道如何使用
          TanStack Query。{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            沒有全局狀態需要管理，沒有
            reducer，沒有標準化系統或繁重的配置需要理解
          </span>
          。只需傳遞一個解析資料（或拋出錯誤）的函數，其餘的就是歷史了。
        </div>
      ),
    },
    {
      title: '可擴展',
      icon: (
        <FaCogs
          className={twMerge('motion-safe:animate-spin', textStyles)}
          style={{
            animationDuration: '10s',
            animationTimingFunction: 'ease-in-out',
          }}
        />
      ),
      description: (
        <div>
          TanStack Query
          可以通過旋鈕和選項配置到每個查詢的觀察者實例，以適應每種用例。它配備了{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            專用的開發工具、無限加載 API 以及使資料更新變得輕鬆的一流突變工具
          </span>
          。不過別擔心，一切都預先配置好了以確保成功！
        </div>
      ),
    },
  ],
} satisfies Library

// Redirect old query v3 docs
// prettier-ignore
const reactQueryV3List = [
    {from: "overview", to: "docs/framework/react/overview"},
    {from: "installation", to: "docs/framework/react/installation"},
    {from: "quick-start", to: "docs/framework/react/quick-start"},
    {from: "devtools", to: "docs/framework/react/devtools"},
    {from: "videos", to: "docs/framework/react/videos"},
    {from: "comparison", to: "docs/framework/react/comparison"},
    {from: "typescript", to: "docs/framework/react/typescript"},
    {from: "graphql", to: "docs/framework/react/graphql"},
    {from: "react-native", to: "docs/framework/react/react-native"},
    {from: "guides/important-defaults", to: "docs/framework/react/guides/important-defaults"},
    {from: "guides/queries", to: "docs/framework/react/guides/queries"},
    {from: "guides/query-keys", to: "docs/framework/react/guides/query-keys"},
    {from: "guides/query-functions", to: "docs/framework/react/guides/query-functions"},
    {from: "guides/network-mode", to: "docs/framework/react/guides/network-mode"},
    {from: "guides/parallel-queries", to: "docs/framework/react/guides/parallel-queries"},
    {from: "guides/dependent-queries", to: "docs/framework/react/guides/dependent-queries"},
    {from: "guides/background-fetching-indicators", to: "docs/framework/react/guides/background-fetching-indicators"},
    {from: "guides/window-focus-refetching", to: "docs/framework/react/guides/window-focus-refetching"},
    {from: "guides/disabling-queries", to: "docs/framework/react/guides/disabling-queries"},
    {from: "guides/query-retries", to: "docs/framework/react/guides/query-retries"},
    {from: "guides/paginated-queries", to: "docs/framework/react/guides/paginated-queries"},
    {from: "guides/infinite-queries", to: "docs/framework/react/guides/infinite-queries"},
    {from: "guides/placeholder-query-data", to: "docs/framework/react/guides/placeholder-query-data"},
    {from: "guides/initial-query-data", to: "docs/framework/react/guides/initial-query-data"},
    {from: "guides/prefetching", to: "docs/framework/react/guides/prefetching"},
    {from: "guides/mutations", to: "docs/framework/react/guides/mutations"},
    {from: "guides/query-invalidation", to: "docs/framework/react/guides/query-invalidation"},
    {from: "guides/invalidations-from-mutations", to: "docs/framework/react/guides/invalidations-from-mutations"},
    {from: "guides/updates-from-mutation-responses", to: "docs/framework/react/guides/updates-from-mutation-responses"},
    {from: "guides/optimistic-updates", to: "docs/framework/react/guides/optimistic-updates"},
    {from: "guides/query-cancellation", to: "docs/framework/react/guides/query-cancellation"},
    {from: "guides/scroll-restoration", to: "docs/framework/react/guides/scroll-restoration"},
    {from: "guides/filters", to: "docs/framework/react/guides/filters"},
    {from: "guides/ssr", to: "docs/framework/react/guides/ssr"},
    {from: "guides/caching", to: "docs/framework/react/guides/caching"},
    {from: "guides/default-query-function", to: "docs/framework/react/guides/default-query-function"},
    {from: "guides/suspense", to: "docs/framework/react/guides/suspense"},
    {from: "guides/testing", to: "docs/framework/react/guides/testing"},
    {from: "guides/does-this-replace-client-state", to: "docs/framework/react/guides/does-this-replace-client-state"},
    {from: "guides/migrating-to-react-query-3", to: "docs/framework/react/guides/migrating-to-react-query-3"},
    {from: "guides/migrating-to-react-query-4", to: "docs/framework/react/guides/migrating-to-react-query-4"},
    {from: "community/tkdodos-blog", to: "docs/framework/react/community/tkdodos-blog"},
    {from: "examples/simple", to: "docs/framework/react/examples/simple"},
    {from: "examples/basic-graphql-request", to: "docs/framework/react/examples/basic-graphql-request"},
    {from: "examples/custom-hooks", to: "docs/framework/react/examples/custom-hooks"},
    {from: "examples/auto-refetching", to: "docs/framework/react/examples/auto-refetching"},
    {from: "examples/focus-refetching", to: "docs/framework/react/examples/focus-refetching"},
    {from: "examples/optimistic-updates", to: "docs/framework/react/examples/optimistic-updates-typescript"},
    {from: "examples/optimistic-updates-typescript", to: "docs/framework/react/examples/optimistic-updates-typescript"},
    {from: "examples/pagination", to: "docs/framework/react/examples/pagination"},
    {from: "examples/load-more-infinite-scroll", to: "docs/framework/react/examples/load-more-infinite-scroll"},
    {from: "examples/suspense", to: "docs/framework/react/examples/suspense"},
    {from: "examples/default-query-function", to: "docs/framework/react/examples/default-query-function"},
    {from: "examples/playground", to: "docs/framework/react/examples/playground"},
    {from: "examples/prefetching", to: "docs/framework/react/examples/prefetching"},
    {from: "examples/star-wars", to: "docs/framework/react/examples/star-wars"},
    {from: "examples/rick-morty", to: "docs/framework/react/examples/rick-morty"},
    {from: "examples/nextjs", to: "docs/framework/react/examples/nextjs"},
    {from: "examples/react-native", to: "docs/framework/react/examples/react-native"},
    {from: "examples/offline", to: "docs/framework/react/examples/offline"},
    {from: "plugins/persistQueryClient", to: "docs/framework/react/plugins/persistQueryClient"},
    {from: "plugins/broadcastQueryClient", to: "docs/framework/react/plugins/broadcastQueryClient"},
    {from: "reference/useQueries", to: "docs/framework/react/reference/useQueries"},
    {from: "reference/useInfiniteQuery", to: "docs/framework/react/reference/useInfiniteQuery"},
    {from: "reference/useMutation", to: "docs/framework/react/reference/useMutation"},
    {from: "reference/useIsFetching", to: "docs/framework/react/reference/useIsFetching"},
    {from: "reference/useIsMutating", to: "docs/framework/react/reference/useIsMutating"},
    {from: "reference/QueryClientProvider", to: "docs/framework/react/reference/QueryClientProvider"},
    {from: "reference/useQueryClient", to: "docs/framework/react/reference/useQueryClient"},
    {from: "reference/QueryCache", to: "docs/reference/QueryCache"},
    {from: "reference/MutationCache", to: "docs/reference/MutationCache"},
    {from: "reference/QueryObserver", to: "docs/reference/QueryObserver"},
    {from: "reference/InfiniteQueryObserver", to: "docs/reference/InfiniteQueryObserver"},
    {from: "reference/QueriesObserver", to: "docs/reference/QueriesObserver"},
    {from: "reference/QueryErrorResetBoundary", to: "docs/framework/react/reference/QueryErrorResetBoundary"},
    {from: "reference/useQueryErrorResetBoundary", to: "docs/framework/react/reference/useQueryErrorResetBoundary"},
    {from: "reference/focusManager", to: "docs/reference/focusManager"},
    {from: "reference/onlineManager", to: "docs/reference/onlineManager"},
    {from: "reference/hydration", to: "docs/framework/react/reference/hydration"},
    {from: "reference/useQuery", to: "docs/framework/react/reference/useQuery"},
    {from: "reference/QueryClient", to: "docs/reference/QueryClient"},
    {from: "examples/basic", to: "docs/framework/react/examples/basic"},
    // {from: '',to: ''},
  ]

/**
  Features that have been removed in v5
*/
// prettier-ignore
const reactQueryV3RemovedInV5List = [
    {from: "guides/custom-logger", to: "docs/framework/react/guides/migrating-to-v5#the-deprecated-custom-logger-has-been-removed"},
    {from: "plugins/createWebStoragePersister", to: "docs/framework/react/guides/migrating-to-react-query-4#persistqueryclient-and-the-corresponding-persister-plugins-are-no-longer-experimental-and-have-been-renamed"},
    {from: "plugins/createAsyncStoragePersister", to: "docs/framework/react/guides/migrating-to-react-query-4#persistqueryclient-and-the-corresponding-persister-plugins-are-no-longer-experimental-and-have-been-renamed"},
]
