import { VscPreview, VscWand } from 'react-icons/vsc'
import { Library } from '.'
import { FaGithub, FaBolt, FaCogs } from 'react-icons/fa'
import { BiBookAlt } from 'react-icons/bi'
import { twMerge } from 'tailwind-merge'

const repo = 'tanstack-dev/form'

const textStyles = 'text-yellow-600 dark:text-yellow-300'

export const formProject = {
  id: 'form',
  name: 'TanStack Form',
  cardStyles: `shadow-xl shadow-yellow-700/20 dark:shadow-lg dark:shadow-yellow-500/30 text-yellow-500 border-2 border-transparent hover:border-current`,
  docsRoot: 'docs/zh-hant',
  to: '/form',
  tagline: `用於構建高效且類型安全表單的無界面 UI`,
  description: `適用於 TS/JS、React、Vue、Angular、Solid、Lit 和 Svelte 的無界面、高效且類型安全的表單狀態管理。`,
  ogImage: 'https://github.com/tanstack/form/raw/main/media/repo-header.png',
  badge: 'new',
  bgStyle: 'bg-yellow-500',
  textStyle: 'text-yellow-500',
  repo,
  latestBranch: 'main',
  latestVersion: 'v1',
  availableVersions: ['v1'],
  colorFrom: 'from-yellow-500',
  colorTo: 'to-yellow-600',
  textColor: 'text-yellow-600',
  frameworks: ['react', 'vue', 'angular', 'solid', 'lit', 'svelte'],
  scarfId: '72ec4452-5d77-427c-b44a-57515d2d83aa',
  menu: [
    {
      icon: <VscPreview />,
      label: '範例',
      to: '/form/latest/docs/framework/react/examples/simple',
    },
    {
      icon: <BiBookAlt />,
      label: '文檔',
      to: '/form/latest/docs',
    },
    {
      icon: <FaGithub />,
      label: 'Github',
      to: `https://github.com/${repo}`,
    },
  ],
  featureHighlights: [
    {
      title: '一流的 TypeScript 支援',
      icon: <VscWand className="text-yellow-400" />,
      description: (
        <div>
          TanStack Form 擁有一流的 TypeScript
          支援，提供出色的自動完成功能、優秀的泛型傳遞和處處推斷類型。{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            這可減少運行時錯誤，提高代碼可維護性，並帶來更順暢的開發體驗
          </span>{' '}
          ，幫助您自信地構建健壯且類型安全的表單解決方案，並且能夠擴展。
        </div>
      ),
    },
    {
      title: '無界面且框架無關',
      icon: <FaBolt className="text-yellow-500" />,
      description: (
        <div>
          Form
          的無界面和框架無關的方法確保了最大的靈活性和與許多前端框架的廣泛兼容性，甚至可以完全不使用框架。通過提供和鼓勵對表單使用無界面的方法，構建針對應用需求定制的可重用表單組件{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            只需很少的抽象，並保持代碼模塊化、簡潔和可組合。
          </span>
        </div>
      ),
    },
    {
      title: '粒度響應式性能',
      icon: <FaCogs className="text-amber-500" />,
      description: (
        <div>
          在性能方面，TanStack Form
          提供了令人驚嘆的速度和控制，但沒有繁瑣、樣板代碼或抽象。憑藉其核心的粒度響應式
          API，{' '}
          <span className={twMerge('font-semibold', textStyles)}>
            當表單狀態變化時，只有相關組件會更新。
          </span>{' '}
          最終結果？更快的 UI，滿意的用戶，以及對性能零顧慮。
        </div>
      ),
    },
  ],
} satisfies Library
