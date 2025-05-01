import { FaGithub, FaYinYang } from 'react-icons/fa'
import { Library } from '.'
import { VscPreview } from 'react-icons/vsc'
import { BiBookAlt } from 'react-icons/bi'
import { PiRocketLaunchDuotone, PiTreeStructureBold } from 'react-icons/pi'
import { TbServerBolt } from 'react-icons/tb'
import { twMerge } from 'tailwind-merge'

const repo = 'tanstack-dev/router'

const textStyles = 'text-cyan-600 dark:text-cyan-500'

export const startProject = {
  id: 'start',
  name: 'TanStack Start',
  cardStyles: `shadow-xl shadow-cyan-500/20 dark:shadow-lg dark:shadow-cyan-500/30 text-cyan-500 dark:text-white-400 border-2 border-transparent hover:border-current`,
  docsRoot: 'docs/zh-hant',
  to: '/start',
  tagline: `由 TanStack Router 驅動的全棧 React 框架`,
  description: `由 TanStack Router 和 Vite 驅動的全文檔 SSR、流式傳輸、伺服器功能和更多功能 - 準備部署到您喜歡的託管提供商。`,
  bgStyle: 'bg-cyan-500',
  textStyle: 'text-cyan-500',
  badge: 'beta',
  repo,
  latestBranch: 'main',
  latestVersion: 'v0',
  availableVersions: ['v0'],
  docsRoot: 'docs/start/zh-hant',
  colorFrom: 'from-teal-500',
  colorTo: 'to-cyan-500',
  textColor: 'text-cyan-600',
  embedEditor: 'codesandbox',
  frameworks: ['react', 'solid'],
  scarfId: 'b6e2134f-e805-401d-95c3-2a7765d49a3d',
  showNetlifyUrl: true,
  menu: [
    {
      icon: <VscPreview />,
      label: '範例',
      to: '/start/latest/docs/framework/react/examples/start-basic',
    },
    {
      icon: <BiBookAlt />,
      label: '文檔',
      to: '/start/latest/docs/framework/react/overview',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      to: `https://github.com/${repo}`,
    },
  ],
  featureHighlights: [
    {
      title: '企業級路由',
      icon: (
        <PiTreeStructureBold
          className={twMerge('motion-safe:animate-pulse', textStyles)}
          style={{
            animationDuration: '5s',
            animationTimingFunction: 'ease-in-out',
          }}
        />
      ),
      description: (
        <div>
          基於 TanStack Router 構建，Start 預先配備了{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            完全類型安全且功能強大無比的路由系統
          </span>{' '}
          ，專為輕鬆處理最複雜的全棧路由需求而設計。Start 在 Router
          的完全推斷類型安全基礎上進一步提供類型安全的全棧
          API，讓您保持在快速開發通道。
        </div>
      ),
    },
    {
      title: 'SSR、流式傳輸和伺服器 RPC',
      icon: (
        <TbServerBolt
          className={twMerge('motion-safe:animate-ping', textStyles)}
          style={{
            animationDuration: '2s',
            animationTimingFunction: 'ease-out',
          }}
        />
      ),
      description: (
        <div>
          誰說豐富且互動的應用程式不能兼顧所有功能？TanStack Start
          包含強大的功能，支持{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            全文檔 SSR、流式傳輸、伺服器功能和 RPC
          </span>
          。不再需要在伺服器端渲染和頂級客戶端交互性之間做出選擇。按照您的需求指揮伺服器。
        </div>
      ),
    },
    {
      title: '客戶端優先，100% 伺服器能力',
      icon: (
        <FaYinYang
          className={twMerge('motion-safe:animate-spin', textStyles)}
          style={{
            animationDuration: '10s',
            animationTimingFunction: 'ease-in-out',
          }}
        />
      ),
      description: (
        <div>
          當其他框架繼續在我們多年來作為前端社區培養的客戶端應用體驗上做出妥協時，TanStack
          Start 保持忠於{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            客戶端優先的開發者體驗，
          </span>{' '}
          同時提供{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            功能齊全的伺服器端系統
          </span>{' '}
          ，不會讓您在用戶體驗上做出妥協。
        </div>
      ),
    },
    {
      title: '部署到任何地方',
      icon: (
        <PiRocketLaunchDuotone
          className={twMerge('motion-safe:animate-bounce', textStyles)}
          style={{
            animationDuration: '2.5s',
            animationTimingFunction: 'ease-in-out',
          }}
        />
      ),
      description: (
        <div>
          TanStack Start 可以{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            部署到任何能運行 JS 的地方
          </span>
          。無論您是在傳統伺服器上託管，還是在無伺服器平台，甚至是在 CDN
          上，Start 都能無縫地構建、打包和部署您的應用程式。
        </div>
      ),
    },
  ],
} satisfies Library
