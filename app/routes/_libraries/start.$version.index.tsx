import * as React from 'react'

import { CgSpinner } from 'react-icons/cg'
import { FaBook, FaGithub, FaTwitter } from 'react-icons/fa'
import { Await, Link, getRouteApi } from '@tanstack/react-router'
import { Carbon } from '~/components/Carbon'
import { Footer } from '~/components/Footer'
import SponsorPack from '~/components/SponsorPack'
import { startProject } from '~/libraries/start'
import { createFileRoute } from '@tanstack/react-router'
import { seo } from '~/utils/seo'
import { partners } from '~/utils/partners'
import { VscPreview } from 'react-icons/vsc'
import { twMerge } from 'tailwind-merge'
import { getLibrary } from '~/libraries'
import { LibraryFeatureHighlights } from '~/components/LibraryFeatureHighlights'
import LandingPageGad from '~/components/LandingPageGad'

export const Route = createFileRoute('/_libraries/start/$version/')({
  component: VersionIndex,
  head: () => ({
    meta: seo({
      title: startProject.name,
      description: startProject.description,
    }),
  }),
})

const librariesRouteApi = getRouteApi('/_libraries')

const library = getLibrary('start')

export default function VersionIndex() {
  const { sponsorsPromise } = librariesRouteApi.useLoaderData()
  const [isDark, setIsDark] = React.useState(true)

  React.useEffect(() => {
    if (isDark) {
      //
    }
    setIsDark(window.matchMedia?.(`(prefers-color-scheme: dark)`).matches)
  }, [isDark])

  const gradientText = `pr-1 text-transparent bg-clip-text bg-gradient-to-r ${startProject.colorFrom} ${startProject.colorTo}`

  return (
    <div className="flex flex-col gap-20 md:gap-32 max-w-full pt-32">
      <div className="flex flex-col items-center gap-8 text-center px-4">
        <h1 className="font-black flex gap-3 items-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl uppercase [letter-spacing:-.05em]">
          <span>TanStack</span>
          <span className={twMerge(gradientText)}>Start</span>
        </h1>
        {/* <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[150%]"> */}
        <div
          className={twMerge(
            'text-sm',
            'md:text-base font-black',
            'lg:text-lg align-super text-white animate-bounce uppercase',
            'dark:text-black bg-black dark:bg-white shadow-xl shadow-black/30 px-2 py-1 rounded-md',
            'leading-none whitespace-nowrap'
          )}
        >
          狀態: BETA
          {/* {version === 'latest' ? latestVersion : version} */}
        </div>
        {/* </div> */}
        <h2
          className="font-bold text-2xl max-w-md
            md:text-3xl
            lg:text-5xl lg:max-w-2xl"
        >
          全堆疊 React 和 Solid 框架{' '}
          <span className="underline decoration-dashed decoration-yellow-500 decoration-3 underline-offset-2">
            由 TanStack Router 提供支持
          </span>{' '}
        </h2>
        <p
          className="text opacity-90 max-w-[500px]
            lg:text-xl lg:max-w-[600px]"
        >
          由 <strong>TanStack Router</strong> 和 <strong>Vite</strong> 驅動的
          SSR、流式處理、伺服器功能、API 路由、打包和更多功能。
          已準備好部署到您喜歡的託管提供商。
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="./docs/framework/react/quick-start#impatient"
            className={`py-2 px-4 bg-transparent text-cyan-600 dark:text-cyan-400 border-2 border-cyan-500 dark:border-cyan-600 rounded uppercase font-extrabold`}
          >
            60 秒內嘗試
          </Link>
          <Link
            to="./docs/framework/react/overview"
            className={`py-2 px-4 bg-cyan-500 dark:bg-cyan-600 rounded text-white uppercase font-extrabold flex items-center`}
          >
            開始使用
          </Link>
        </div>
      </div>
      <LibraryFeatureHighlights featureHighlights={library.featureHighlights} />
      <div className="space-y-8 px-4">
        <div className="font-black text-3xl mr-1 text-center">
          何時可以使用它？
        </div>
        <div className="max-w-full p-8 w-[800px] mx-auto leading-loose space-y-4 bg-white dark:bg-black/40 rounded-xl shadow-xl shadow-black/10">
          <div>
            您現在就可以使用 <strong>TanStack Start BETA</strong>
            ！雖然目前仍在積極開發中，但我們預計不會有更多重大變更。
            我們邀請您提供反饋，幫助我們邁向 1.0 版本的旅程！如果您選擇將 BETA
            版 Start 應用部署到生產環境，
            我們建議將您的依賴項鎖定到特定版本，並隨時關注最新版本。
          </div>
        </div>
        <div className="grid items-center gap-2 justify-center grid-cols-2 w-[600px] max-w-full mx-auto">
          <Link
            to="/start/latest/docs/framework/react/examples/start-basic"
            className={`flex items-center gap-2 py-2 px-4 bg-cyan-900 rounded text-white uppercase font-extrabold`}
          >
            <VscPreview /> 查看範例
          </Link>
          <Link
            to="/start/latest/docs/framework/react/overview"
            className={`flex items-center gap-2 py-2 px-4 bg-cyan-800 rounded text-white uppercase font-extrabold`}
          >
            <FaBook /> 嘗試 BETA 版
          </Link>
          <a
            href={`https://github.com/tanstack/tanstack.com`}
            className={`flex items-center gap-2 py-2 px-4 bg-cyan-700 rounded text-white uppercase font-extrabold`}
          >
            <FaGithub /> TanStack.com 原始碼
          </a>
          <a
            href={`https://twitter.com/intent/post?text=${encodeURIComponent(
              `TanStack Start 已進入 BETA 階段！這是 @Tan_Stack 推出的新全堆疊 React 框架，您可以在 https://tanstack.com/start/ 查看`
            )}`}
            target="_blank"
            className={`flex items-center gap-2 py-2 px-4 bg-cyan-500 rounded text-white uppercase font-extrabold`}
            rel="noreferrer"
          >
            <FaTwitter /> 分享到推特！
          </a>{' '}
        </div>
      </div>

      <div className="px-4 lg:max-w-screen-lg md:mx-auto mx-auto">
        <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10 lg:leading-none mt-8">
          合作夥伴
        </h3>
        <div className="h-8" />
        <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2`}>
          {partners
            .filter((d) => d.libraries?.includes('router'))
            .map((partner) => {
              return (
                <a
                  key={partner.name}
                  href={partner.href}
                  target="_blank"
                  className="shadow-xl shadow-gray-500/20 rounded-lg dark:border border-gray-500/20 bg-white dark:bg-black/40 dark:shadow-none group overflow-hidden grid"
                  rel="noreferrer"
                >
                  <div className="z-0 row-start-1 col-start-1 flex items-center justify-center group-hover:blur-sm transition-all duration-200">
                    {partner.homepageImg}
                  </div>
                  <div className="z-10 row-start-1 col-start-1 max-w-full p-4 text-sm flex flex-col gap-4 items-start opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/70 dark:bg-gray-800/70">
                    {partner.content}
                  </div>
                </a>
              )
            })}
        </div>
      </div>

      <div className="relative text-lg overflow-hidden">
        <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10 lg:leading-none mt-8">
          贊助商
        </h3>
        <div
          className="my-4 flex flex-wrap mx-auto max-w-screen-lg"
          style={{
            aspectRatio: '1/1',
          }}
        >
          <Await
            promise={sponsorsPromise}
            fallback={<CgSpinner className="text-2xl animate-spin" />}
            children={(sponsors) => {
              return <SponsorPack sponsors={sponsors} />
            }}
          />
        </div>
        <div className="text-center">
          <a
            href="https://github.com/sponsors/tannerlinsley"
            className="inline-block bg-green-500 px-4 py-2 text-xl mx-auto leading-tight font-extrabold tracking-tight text-white rounded-full"
          >
            成為贊助商！
          </a>
        </div>
      </div>

      <LandingPageGad />

      <div className="flex flex-col gap-4 items-center">
        <div className="font-extrabold text-xl lg:text-2xl">
          哇，您已經走了很長一段路！
        </div>
        <div className="italic font-sm opacity-70">只剩下一件事要做...</div>
        <div>
          <Link
            to="/start/latest/docs/framework/react/overview"
            className={`inline-block py-2 px-4 bg-cyan-500 rounded text-white uppercase font-extrabold`}
          >
            開始使用！
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
