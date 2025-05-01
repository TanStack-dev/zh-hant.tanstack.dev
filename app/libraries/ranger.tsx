import { VscPreview } from 'react-icons/vsc'
import { Library } from '.'
import { FaGithub } from 'react-icons/fa'
import { BiBookAlt } from 'react-icons/bi'
import { CgTimelapse } from 'react-icons/cg'
import { TbZoomQuestion } from 'react-icons/tb'
import { RiLightbulbFlashLine } from 'react-icons/ri'
import { twMerge } from 'tailwind-merge'

const repo = 'tanstack-dev/ranger'

const textStyles = 'text-pink-600 dark:text-pink-400'

export const rangerProject = {
  id: 'ranger',
  name: 'TanStack Ranger',
  cardStyles: `shadow-xl shadow-pink-700/20 dark:shadow-lg dark:shadow-pink-500/30 text-pink-500 border-2 border-transparent hover:border-current`,
  docsRoot: 'docs/zh-hant',
  to: '/ranger',
  tagline: `無界面的範圍和多範圍滑塊工具。`,
  description: `無界面、輕量級且可擴展的原始組件，用於構建範圍和多範圍滑塊。`,
  ogImage: 'https://github.com/tanstack/ranger/raw/main/media/headerv1.png',
  badge: undefined,
  bgStyle: 'bg-pink-500',
  textStyle: 'text-pink-500',
  repo,
  latestBranch: 'main',
  latestVersion: 'v0',
  availableVersions: ['v0'],
  colorFrom: 'from-pink-400',
  colorTo: 'to-pink-500',
  textColor: 'text-pink-500',
  frameworks: ['react'],
  scarfId: 'dd278e06-bb3f-420c-85c6-6e42d14d8f61',
  menu: [
    {
      icon: <VscPreview />,
      label: '範例',
      to: '/ranger/latest/docs/framework/react/examples/basic',
    },
    {
      icon: <BiBookAlt />,
      label: '文檔',
      to: '/ranger/latest/docs/overview',
    },
    {
      icon: <FaGithub />,
      label: 'Github',
      to: `https://github.com/${repo}`,
    },
  ],
  featureHighlights: [
    {
      title: '類型安全且強大，但簡單易用',
      icon: (
        <RiLightbulbFlashLine
          className={twMerge('scale-125 animate-pulse', textStyles)}
        />
      ),
      description: (
        <div>
          用於在 React 中構建範圍和多範圍滑塊的鉤子{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            100% 類型安全而不犧牲開發體驗
          </span>
          。
        </div>
      ),
    },
    {
      title: '"無界面"UI 庫',
      icon: (
        <CgTimelapse
          className={twMerge('animate-spin', textStyles)}
          style={{
            animationDuration: '3s',
            animationTimingFunction: 'ease-in-out',
          }}
        />
      ),
      description: (
        <div>
          無界面且可擴展。Ranger 不渲染或提供任何實際的 UI 元素。它是一個{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            用於構建您自己的自定義設計 UI 組件的工具
          </span>
          。
        </div>
      ),
    },
    {
      title: '可擴展性',
      icon: <TbZoomQuestion className={twMerge('', textStyles)} />,
      description: (
        <div>
          設計時考慮了最大的控制反轉，Ranger 旨在{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            輕鬆擴展和自定義
          </span>{' '}
          以滿足您的需求。
        </div>
      ),
    },
  ],
} satisfies Library
