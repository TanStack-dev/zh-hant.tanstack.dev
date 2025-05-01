import { handleRedirects } from '~/utils/handleRedirects.server'
import { Library } from '.'
import { VscPreview } from 'react-icons/vsc'
import { FaGithub, FaBolt, FaCogs } from 'react-icons/fa'
import { BiBookAlt } from 'react-icons/bi'
import { IoIosBody } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'

const repo = 'tanstack-dev/table'

const textStyles = 'text-blue-500 dark:text-blue-400'

export const tableProject = {
  id: 'table',
  name: 'TanStack Table',
  cardStyles: `shadow-xl shadow-blue-700/20 dark:shadow-lg dark:shadow-blue-500/30 text-blue-500 border-2 border-transparent hover:border-current`,
  docsRoot: 'docs/zh-hant',
  to: '/table',
  tagline: `用於構建強大表格與資料網格的無界面 UI`,
  description: `為 TS/JS、React、Vue、Solid、Svelte、Qwik、Angular 和 Lit 超級強化您的表格或從頭開始構建資料網格，同時保持對標記和樣式的 100% 控制。`,
  ogImage: 'https://github.com/tanstack/table/raw/main/media/repo-header.png',
  badge: undefined,
  bgStyle: 'bg-blue-500',
  textStyle: 'text-blue-500',
  repo,
  latestBranch: 'main',
  latestVersion: 'v8',
  availableVersions: ['v8'],
  colorFrom: 'from-cyan-500',
  colorTo: 'to-blue-600',
  textColor: 'text-blue-600',
  frameworks: [
    'angular',
    'lit',
    'qwik',
    'react',
    'solid',
    'svelte',
    'vue',
    'vanilla',
  ],
  scarfId: 'dc8b39e1-3fe9-4f3a-8e56-d4e2cf420a9e',
  defaultDocs: 'introduction',
  handleRedirects: (href) => {
    handleRedirects(
      reactTableV7List,
      href,
      '/table/v7',
      '/table/v8',
      'from=reactTableV7'
    )
  },
  menu: [
    {
      icon: <VscPreview className="text-lg" />,
      label: '範例',
      to: '/table/latest/docs/framework/react/examples/basic',
    },
    {
      icon: <BiBookAlt />,
      label: '文檔',
      to: '/table/latest/docs/introduction',
    },
    {
      icon: <FaGithub />,
      label: 'Github',
      to: `https://github.com/${repo}`,
    },
  ],
  featureHighlights: [
    {
      title: '為零設計而設計',
      icon: (
        <div className="text-center overflow-hidden">
          <IoIosBody className={twMerge(textStyles)} />
        </div>
      ),
      description: (
        <div>
          如果您剛剛聘請的那位超潮設計師無法在表格上施展他們的 UI
          魔法，那麼這個強大的表格有什麼用呢？{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            TanStack Table 從設計上就是無界面的
          </span>
          ，這意味著對每個最小的 HTML 標籤、組件、類和樣式都有 100%
          的控制。像素完美？沒問題！
        </div>
      ),
    },
    {
      title: '強大功能，體積小',
      icon: <FaBolt className={twMerge(textStyles)} />,
      description: (
        <div>
          不要被小小的包大小所迷惑。TanStack Table
          是一匹工作馬。它被設計用於實現化、過濾、排序、分組、聚合、分頁和顯示大型資料集，而且只使用非常小的
          API 表面。連接您的新表格或現有表格，並且{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            看著您的用戶立即變得更有效率
          </span>
          。
        </div>
      ),
    },
    {
      title: '可擴展',
      icon: <FaCogs className={twMerge(textStyles)} />,
      description: (
        <div>
          TanStack Table
          提供了優秀的默認設置，讓您能夠盡快上手，但沒有什麼能阻止您{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            自定義和覆蓋幾乎所有內容以滿足您的需求
          </span>
          。感覺足夠有決心來構建自己的類似 Sheets/Excel/AirTable
          的克隆版？請隨意 😉
        </div>
      ),
    },
  ],
} satisfies Library

// prettier-ignore
export const reactTableV7List = [
    {from: 'docs/api/overview',to: 'docs/overview',},
    {from: 'docs/api/useColumnOrder',to: 'docs/api/features/column-ordering',},
    {from: 'docs/api/useExpanded',to: 'docs/api/features/expanding',},
    {from: 'docs/api/useFilters',to: 'docs/api/features/filters',},
    {from: 'docs/api/useGlobalFilter',to: 'docs/api/features/filters',},
    {from: 'docs/api/useGroupBy',to: 'docs/api/features/grouping',},
    {from: 'docs/api/usePagination',to: 'docs/api/features/pagination',},
    {from: 'docs/api/useResizeColumns',to: 'docs/api/features/column-sizing',},
    {from: 'docs/api/useRowSelect',to: 'docs/api/features/row-selection',},
    {from: 'docs/api/useSortBy',to: 'docs/api/features/sorting',},
    {from: 'docs/api/useTable',to: 'docs/guide/tables',},
    {from: 'docs/examples/basic',to: 'docs/framework/react/examples/basic',},
    {from: 'docs/examples/filtering',to: 'docs/framework/react/examples/filters',},
    {from: 'docs/examples/footers',to: 'docs/framework/react/examples/basic',},
    {from: 'docs/examples/grouping',to: 'docs/framework/react/examples/grouping',},
    {from: 'docs/examples/pagination-controlled',to: 'docs/framework/react/examples/pagination-controlled',},
    {from: 'docs/examples/pagination',to: 'docs/framework/react/examples/pagination',},
    {from: 'docs/examples/sorting',to: 'docs/framework/react/examples/sorting',},
    {from: 'docs/examples/row-selection',to: 'docs/framework/react/examples/row-selection',},
    {from: 'docs/examples/row-selection-with-pagination',to: 'docs/framework/react/examples/row-selection',},
    {from: 'docs/examples/expanding',to: 'docs/framework/react/examples/expanding',},
    {from: 'docs/examples/editable-data',to: 'docs/framework/react/examples/editable-data',},
    {from: 'docs/examples/column-ordering',to: 'docs/framework/react/examples/column-ordering',},
    {from: 'docs/examples/column-hiding',to: 'docs/framework/react/examples/column-visibility',},
    {from: 'docs/examples/column-resizing',to: 'docs/framework/react/examples/column-sizing',},
    {from: 'docs/installation',to: 'docs/installation',},
    {from: 'docs/overview',to: 'docs/introduction',},
    {from: 'docs/quick-start',to: 'docs/overview',},
]
