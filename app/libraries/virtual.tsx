import { VscPreview } from 'react-icons/vsc'
import { Library } from '.'
import { FaGithub, FaBolt, FaCogs } from 'react-icons/fa'
import { BiBookAlt } from 'react-icons/bi'
import { IoIosBody } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'

const repo = 'tanstack-dev/virtual'

const textStyles = 'text-violet-700 dark:text-violet-400'

export const virtualProject = {
  id: 'virtual',
  name: 'TanStack Virtual',
  cardStyles: `shadow-xl shadow-purple-700/20 dark:shadow-lg dark:shadow-purple-500/30 text-purple-500 border-2 border-transparent hover:border-current`,
  docsRoot: 'docs/zh-hant',
  to: '/virtual',
  tagline: `用於虛擬化大型元素列表的無界面 UI`,
  description: `在 TS/JS、React、Vue、Solid、Svelte、Lit 和 Angular 中以 60FPS 的速度僅虛擬化大型可滾動 DOM 節點的可見內容，同時保持對標記和樣式的 100% 控制。`,
  ogImage: 'https://github.com/tanstack/query/raw/main/media/header.png',
  badge: undefined,
  bgStyle: 'bg-purple-500',
  textStyle: 'text-purple-500',
  repo,
  latestBranch: 'main',
  latestVersion: 'v3',
  availableVersions: ['v3'],
  colorFrom: 'from-purple-500',
  colorTo: 'to-violet-600',
  textColor: 'text-purple-600',
  frameworks: ['react', 'solid', 'vue', 'svelte', 'lit', 'angular'],
  defaultDocs: 'introduction',
  scarfId: '32372eb1-91e0-48e7-8df1-4808a7be6b94',
  menu: [
    {
      icon: <VscPreview />,
      label: '範例',
      to: '/virtual/latest/docs/framework/react/examples/dynamic',
    },
    {
      icon: <BiBookAlt />,
      label: '文檔',
      to: '/virtual/latest/docs/introduction',
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
          <IoIosBody className="text-purple-400" />
        </div>
      ),
      description: (
        <div>
          無界面虛擬化意味著您始終可以控制您的{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            標記、樣式和組件
          </span>
          。去設計並實現您能夠想像的最美麗的 UI，讓我們來處理困難的部分。
        </div>
      ),
    },
    {
      title: '強大功能，體積小',
      icon: <FaBolt className="text-purple-500" />,
      description: (
        <div>
          不要被小小的包大小所迷惑。TanStack Virtual
          利用每一個字節來提供強大的性能。畢竟，{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            60FPS 是基本要求
          </span>{' '}
          現在，我們拒絕為了那種🧈般流暢的用戶體驗犧牲任何東西。
        </div>
      ),
    },
    {
      title: '最大可組合性',
      icon: <FaCogs className="text-purple-600" />,
      description: (
        <div>
          只需一個函數/鉤子，您將獲得{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            垂直、水平和網格式
          </span>
          布局的無限虛擬化。API 非常小（字面上就是 1
          個函數），但其可組合性卻不小。
        </div>
      ),
    },
  ],
} satisfies Library
