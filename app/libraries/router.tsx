import { FaGithub } from 'react-icons/fa'
import { Library } from '.'
import { VscPreview } from 'react-icons/vsc'
import { BiBookAlt } from 'react-icons/bi'
import { RiLightbulbFlashLine } from 'react-icons/ri'
import { CgTimelapse } from 'react-icons/cg'
import { TbZoomQuestion } from 'react-icons/tb'
import { twMerge } from 'tailwind-merge'
import { redirect } from '@tanstack/react-router'

const repo = 'tanstack-dev/router'

const textStyles = 'text-emerald-500 dark:text-emerald-400'

export const routerProject = {
  id: 'router',
  name: 'TanStack Router',
  cardStyles: twMerge(
    `shadow-xl shadow-emerald-700/20 dark:shadow-lg dark:shadow-emerald-500/30 ${textStyles} border-2 border-transparent hover:border-current`
  ),
  to: '/router',
  tagline: `React 應用程式的類型安全路由。`,
  description: `適用於客戶端和全棧 React 應用程式的強大路由器。完全類型安全的 API、用於管理 URL 中狀態的一流搜索參數，以及與現有 React 生態系統的無縫整合。`,
  ogImage: 'https://github.com/tanstack/router/raw/main/media/header.png',
  bgStyle: 'bg-emerald-500',
  textStyle: textStyles,
  badge: undefined,
  repo,
  latestBranch: 'main',
  latestVersion: 'v1',
  availableVersions: ['v1'],
  docsRoot: 'docs/router/zh-hant',
  colorFrom: 'from-emerald-500',
  colorTo: 'to-lime-600',
  textColor: textStyles,
  frameworks: ['react', 'solid'],
  scarfId: '3d14fff2-f326-4929-b5e1-6ecf953d24f4',
  defaultDocs: 'framework/react/overview',
  hideCodesandboxUrl: true,
  showVercelUrl: false,
  showNetlifyUrl: true,
  menu: [
    {
      icon: <VscPreview />,
      label: '範例',
      to: '/router/latest/docs/framework/react/examples/kitchen-sink-file-based',
    },
    {
      icon: <BiBookAlt />,
      label: '文檔',
      to: '/router/latest/docs/framework/react/overview',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      to: `https://github.com/${repo}`,
    },
  ],
  featureHighlights: [
    {
      title: '類型安全且強大，但熟悉且簡單',
      icon: (
        <RiLightbulbFlashLine className={twMerge('scale-125', textStyles)} />
      ),
      description: (
        <div>
          TanStack Router
          以其他工具所popularized的現代路由模式為基礎，但從頭開始重新設計，以實現{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            100% 類型安全，同時不犧牲開發者體驗
          </span>
          。您<em>確實</em>可以兩全其美！
        </div>
      ),
    },
    {
      title: '內建數據獲取與緩存',
      icon: (
        <CgTimelapse
          className={twMerge('motion-safe:animate-spin', textStyles)}
          style={{
            animationDuration: '3s',
            animationTimingFunction: 'ease-in-out',
          }}
        />
      ),
      description: (
        <div>
          通過 TanStack Router 的 loader API
          提升您的數據獲取並避免瀑布流，並獲得{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            內建緩存和自動預加載的即時頁面導航
          </span>
          。需要更加自定義的解決方案？Router 的 API
          設計可與您喜愛的客戶端緩存庫無縫協作！
        </div>
      ),
    },
    {
      title: '讓您的狀態管理器嫉妒的搜索參數 API',
      icon: <TbZoomQuestion className={twMerge('', textStyles)} />,
      description: (
        <div>
          TanStack Router 不會將您丟給 URLSearchParam
          的狼群，而是為您提供狀態管理器級別的搜索參數 API。憑藉{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            模式、驗證、完全類型安全和預/後處理功能
          </span>
          ，您可以在 URL 中管理狀態，並輕鬆將其與您選擇的狀態管理器同步。
        </div>
      ),
    },
  ],
  handleRedirects(href) {
    if (href.includes('router/latest/docs/framework/react/start')) {
      throw redirect({
        href: href.replace(
          'router/latest/docs/framework/react/start',
          'start/latest/docs/framework/react'
        ),
      })
    }

    if (href.includes('/router/latest/docs/framework/react/examples/start')) {
      throw redirect({
        href: href.replace(
          'router/latest/docs/framework/react/examples/start',
          'start/latest/docs/framework/react/examples/start'
        ),
      })
    }
  },
} satisfies Library
