import { VscPreview, VscWand } from 'react-icons/vsc'
import { Library } from '.'
import { FaGithub, FaBolt, FaCogs } from 'react-icons/fa'
import { BiBookAlt } from 'react-icons/bi'
import { twMerge } from 'tailwind-merge'

const repo = 'tanstack-dev/optimistic'

const textStyles = `text-orange-600 dark:text-orange-500`

export const optimisticProject = {
  id: 'optimistic',
  name: 'TanStack Optimistic',
  cardStyles: `shadow-xl shadow-orange-700/20 dark:shadow-lg dark:shadow-orange-500/20 text-orange-500 dark:text-orange-400 border-2 border-transparent hover:border-current`,
  docsRoot: 'docs/zh-hant',
  to: '/optimistic',
  tagline: `框架無關的去抖動、節流和佇列工具`,
  description: `設置應用程式中交互的節奏。限制函數觸發的頻率，或通過併發控制智能地排隊處理長時間運行的任務。`,
  ogImage:
    'https://github.com/tanstack/optimistic/raw/main/media/repo-header.png',
  badge: 'soon',
  bgStyle: `bg-orange-700`,
  textStyle: `text-orange-500`,
  repo,
  latestBranch: 'main',
  latestVersion: 'v0',
  availableVersions: ['v0'],
  colorFrom: `from-orange-500`,
  colorTo: `to-orange-700`,
  textColor: `text-orange-700`,
  frameworks: ['react', 'solid'],
  scarfId: '302d0fef-cb3f-43c6-b45c-f055b9745edb',
  defaultDocs: 'overview',
  menu: [
    {
      icon: <VscPreview />,
      label: '範例',
      to: '/optimistic/latest/docs/framework/react/examples/simple',
    },
    {
      icon: <BiBookAlt />,
      label: '文檔',
      to: '/optimistic/latest/docs',
    },
    {
      icon: <FaGithub />,
      label: 'Github',
      to: `https://github.com/${repo}`,
    },
  ],
  featureHighlights: [
    {
      title: '框架無關且類型安全',
      icon: <VscWand className={twMerge(textStyles)} />,
      description: (
        <div>
          TanStack Optimistic 提供了一個直觀且靈活的 API，可在任何 JavaScript
          框架中運作。{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            每個工具都完全類型安全，並具有響應式框架適配器
          </span>{' '}
          可無縫連接到您選擇的狀態管理系統。從多層抽象中選擇，自信地控制應用程式中的時間安排。
        </div>
      ),
    },
    {
      title: '靈活的速率限制控制',
      icon: <FaBolt className={twMerge(textStyles)} />,
      description: (
        <div>
          使用強大的工具控制應用程式的時間安排，包括{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            速率限制、節流和去抖動
          </span>
          。利用內建的清理和取消功能，可以精確地管理執行時間，同時防止記憶體洩漏。靈活的配置選項讓您可以根據需求微調行為。
        </div>
      ),
    },
    {
      title: '非同步/同步佇列管理',
      icon: <FaCogs className={twMerge(textStyles)} />,
      description: (
        <div>
          使用智能佇列和併發控制處理複雜的非同步工作流程。{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            使用 FIFO/LIFO 排序、優先級佇列和並行執行來管理長時間運行的任務
          </span>
          。內建的暫停、恢復和取消功能讓您完全控制佇列的生命週期。非常適合管理
          API 呼叫、動畫和其他順序操作。
        </div>
      ),
    },
  ],
} satisfies Library
