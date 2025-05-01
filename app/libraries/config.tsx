import { FaGithub, FaBolt, FaCogs } from 'react-icons/fa'
import { Library } from '.'
import { BiBookAlt } from 'react-icons/bi'
import { VscWand } from 'react-icons/vsc'
import { twMerge } from 'tailwind-merge'

const repo = 'tanstack-dev/config'

const textStyles = 'text-gray-700 dark:text-gray-500'

export const configProject = {
  id: 'config',
  name: 'TanStack Config',
  cardStyles: `shadow-xl shadow-slate-700/20 dark:shadow-lg dark:shadow-slate-500/30 text-slate-500 border-2 border-transparent hover:border-current`,
  docsRoot: 'docs/zh-hant',
  to: '/config',
  tagline: `用於發布和維護高質量 JavaScript 套件的配置和工具`,
  description: `我們所有專案使用的構建和發布工具。如果你敢的話，也可以使用它！`,
  ogImage: 'https://github.com/tanstack/config/raw/main/media/repo-header.png',
  badge: undefined,
  bgStyle: 'bg-slate-500',
  textStyle: 'text-slate-500',
  repo,
  latestBranch: 'main',
  latestVersion: 'v0',
  availableVersions: ['v0'],
  colorFrom: 'from-gray-500',
  colorTo: 'to-gray-700',
  textColor: 'text-gray-700',
  frameworks: [],
  menu: [
    {
      icon: <BiBookAlt />,
      label: '文檔',
      to: '/config/latest/docs',
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
      icon: <VscWand className="text-gray-400" />,
      description: (
        <div>
          TanStack Config
          提供了一個無縫且直覺式的配置管理系統，簡化了構建和發布高質量
          JavaScript 套件的過程。TanStack Config{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            簡化了配置過程，讓開發者能夠專注於編寫代碼
          </span>{' '}
          而不必為複雜的設置程序而煩惱。
        </div>
      ),
    },
    {
      title: 'Vite 驅動的構建',
      icon: <FaBolt className="text-gray-500" />,
      description: (
        <div>
          TanStack Config 的構建配置利用了 Vite
          生態系統。輕鬆自定義和擴展您的構建工作流程，使其滿足您專案的獨特需求。{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            無論您需要高級優化、預處理器還是其他專業工具，
          </span>{' '}
          TanStack Config 為打造適合您特定需求的構建流程提供了堅實的基礎。
        </div>
      ),
    },
    {
      title: '輕鬆發布',
      icon: <FaCogs className="text-gray-700" />,
      description: (
        <div>
          告別代碼發布的複雜性。此套件提供了設計用於自動化項目發布的工具。開發者可以輕鬆地發布更新、管理版本以及在
          npm 和 GitHub 上發布。{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            TanStack Config 處理了套件發布中那些繁瑣的方面，
          </span>{' '}
          使開發者能夠高效地與社區分享他們的工作。
        </div>
      ),
    },
  ],
} satisfies Library
