import { VscPreview, VscWand } from 'react-icons/vsc'
import { Library } from '.'
import { FaGithub, FaBolt, FaCogs } from 'react-icons/fa'
import { BiBookAlt } from 'react-icons/bi'
import { twMerge } from 'tailwind-merge'

const repo = 'tanstack-dev/store'

const textStyles = 'text-twine-600 dark:text-twine-500'

export const storeProject = {
  id: 'store',
  name: 'TanStack Store',
  cardStyles: `shadow-xl shadow-twine-700/20 dark:shadow-lg dark:shadow-twine-500/20 text-twine-500 dark:text-twine-400 border-2 border-transparent hover:border-current`,
  docsRoot: 'docs/zh-hant',
  to: '/store',
  tagline: `具有響應式框架適配器的框架無關數據存儲`,
  description: `為 TanStack 庫及其框架適配器的核心提供動力的不可變響應式數據存儲。`,
  ogImage: 'https://github.com/tanstack/store/raw/main/media/repo-header.png',
  badge: 'alpha',
  bgStyle: 'bg-twine-700',
  textStyle: 'text-twine-500',
  repo,
  latestBranch: 'main',
  latestVersion: 'v0',
  availableVersions: ['v0'],
  colorFrom: 'from-twine-500',
  colorTo: 'to-twine-700',
  textColor: 'text-twine-700',
  frameworks: ['react', 'solid', 'svelte', 'vue', 'angular'],
  scarfId: '302d0fef-cb3f-43c6-b45c-f055b9745edb',
  defaultDocs: 'overview',
  menu: [
    {
      icon: <VscPreview />,
      label: '範例',
      to: '/store/latest/docs/framework/react/examples/simple',
    },
    {
      icon: <BiBookAlt />,
      label: '文檔',
      to: '/store/latest/docs',
    },
    {
      icon: <FaGithub />,
      label: 'Github',
      to: `https://github.com/${repo}`,
    },
  ],
  featureHighlights: [
    {
      title: '直覺式配置',
      icon: <VscWand className={twMerge(textStyles)} />,
      description: (
        <div>
          TanStack Store
          提供了一個無縫且直覺式的配置管理系統，簡化了構建和發布高質量
          JavaScript 套件的過程。TanStack Store{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            簡化了配置過程，使開發者能夠專注於編寫代碼
          </span>{' '}
          而不必為複雜的設置程序而煩惱。
        </div>
      ),
    },
    {
      title: 'Vite 驅動的構建',
      icon: <FaBolt className={twMerge(textStyles)} />,
      description: (
        <div>
          TanStack Store 的構建配置利用了 Vite
          生態系統。輕鬆自定義和擴展您的構建工作流程，使其滿足您專案的獨特需求。{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            無論您需要高級優化、預處理器還是其他專業工具，
          </span>{' '}
          TanStack Store 為打造適合您特定需求的構建流程提供了堅實的基礎。
        </div>
      ),
    },
    {
      title: '輕鬆發布',
      icon: <FaCogs className={twMerge(textStyles)} />,
      description: (
        <div>
          告別代碼發布的複雜性。此套件提供了設計用於自動化項目發布的工具。開發者可以輕鬆地發布更新、管理版本以及在
          npm 和 GitHub 上發布。{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            TanStack Store 處理了套件發布中那些繁瑣的方面，
          </span>{' '}
          使開發者能夠高效地與社區分享他們的工作。
        </div>
      ),
    },
  ],
} satisfies Library
