import * as React from 'react'

import { CgSpinner } from 'react-icons/cg'
import { FaCheckCircle } from 'react-icons/fa'
import { Await, Link, getRouteApi } from '@tanstack/react-router'
import { Carbon } from '~/components/Carbon'
import { Footer } from '~/components/Footer'
import { TbHeartHandshake } from 'react-icons/tb'
import SponsorPack from '~/components/SponsorPack'
import { QueryGGBanner } from '~/components/QueryGGBanner'
import { queryProject } from '~/libraries/query'
import { createFileRoute } from '@tanstack/react-router'
import { Framework, getBranch, getLibrary } from '~/libraries'
import { seo } from '~/utils/seo'
import { twMerge } from 'tailwind-merge'
import { LibraryFeatureHighlights } from '~/components/LibraryFeatureHighlights'
import { partners } from '~/utils/partners'

export const Route = createFileRoute('/_libraries/query/$version/')({
  component: VersionIndex,
  head: () => ({
    meta: seo({
      title: queryProject.name,
      description: queryProject.description,
    }),
  }),
})

const librariesRouteApi = getRouteApi('/_libraries')

const library = getLibrary('query')

export default function VersionIndex() {
  const { sponsorsPromise } = librariesRouteApi.useLoaderData()
  const { version } = Route.useParams()
  const branch = getBranch(queryProject, version)
  const [framework, setFramework] = React.useState<Framework>('react')
  const [isDark, setIsDark] = React.useState(true)

  React.useEffect(() => {
    setIsDark(window.matchMedia?.(`(prefers-color-scheme: dark)`).matches)
  }, [])

  const gradientText = `pr-1 inline-block leading-snug text-transparent bg-clip-text bg-gradient-to-r ${queryProject.colorFrom} ${queryProject.colorTo}`

  return (
    <div className="flex flex-1 flex-col min-h-0 relative overflow-x-hidden">
      <div className="flex flex-1 min-h-0 relative justify-center overflow-x-hidden">
        <div className="flex flex-col gap-20 md:gap-32 max-w-full py-32">
          <div className="flex flex-col items-center gap-8 text-center px-4">
            <h1 className="font-black flex gap-3 items-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl uppercase [letter-spacing:-.05em]">
              <span>TanStack</span>
              <span className={twMerge(gradientText)}>Query</span>
            </h1>
            <h2
              className="font-bold text-2xl max-w-md
            md:text-3xl
            lg:text-5xl lg:max-w-2xl"
            >
              強大的{' '}
              <span className="underline decoration-dashed decoration-yellow-500 decoration-3 underline-offset-2">
                非同步狀態管理
              </span>{' '}
              適用於 TS/JS、React、Solid、Vue、Svelte 和 Angular
            </h2>
            <p
              className="text opacity-90 max-w-[500px]
            lg:text-xl lg:max-w-[600px]"
            >
              拋棄精細的狀態管理、手動重新獲取數據和無盡的非同步「意大利麵」代碼。TanStack
              Query 提供聲明式、始終最新的自動管理查詢和突變，這{' '}
              <strong>直接改善您的開發者和用戶體驗</strong>。
            </p>
            <div className="space-y-4">
              <Link
                to="./docs/"
                className={`py-2 px-4 bg-red-500 rounded text-white uppercase font-extrabold`}
              >
                閱讀文檔
              </Link>
              <p>(或查看我們的官方課程 👇)</p>
            </div>
            <QueryGGBanner />
          </div>
          <LibraryFeatureHighlights
            featureHighlights={library.featureHighlights}
          />

          <div className="px-4 sm:px-6 lg:px-8 mx-auto">
            <div className=" sm:text-center pb-16">
              <h3 className="text-3xl text-center mx-auto leading-tight font-extrabold tracking-tight sm:text-4xl lg:leading-none mt-2">
                無依賴。全功能。
              </h3>
              <p className="mt-4 text-xl max-w-3xl mx-auto leading-7 opacity-60">
                TanStack Query
                零依賴，考慮到其豐富的功能集，它極為輕量。從週末愛好項目到企業電子商務系統（是的，我正在看著你，沃爾瑪！😉），TanStack
                Query 是幫助您按照創造力速度成功的久經考驗的工具。
              </p>
            </div>
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4  mx-auto">
              {[
                '後端無關性',
                '專用開發工具',
                '自動緩存',
                '自動重新獲取',
                '窗口聚焦重新獲取',
                '輪詢/即時查詢',
                '並行查詢',
                '依賴查詢',
                '突變 API',
                '自動垃圾回收',
                '分頁/游標查詢',
                '加載更多/無限滾動查詢',
                '滾動恢復',
                '請求取消',
                'Suspense 就緒！',
                '獲取時渲染',
                '預取',
                '可變長度並行查詢',
                '離線支持',
                'SSR 支持',
                '數據選擇器',
              ].map((d, i) => {
                return (
                  <span key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-500 " /> {d}
                  </span>
                )
              })}
            </div>
          </div>

          <div>
            <div className="uppercase tracking-wider text-sm font-semibold text-center text-gray-400 mb-3">
              生產環境中受信任
            </div>
            {/* @ts-ignore */}
            <marquee scrollamount="2">
              <div className="flex gap-2 items-center text-3xl font-bold ml-[-100%]">
                {(new Array(4) as string[])
                  .fill('')
                  .reduce(
                    (all) => [...all, ...all],
                    [
                      'Google',
                      'Walmart',
                      'Facebook',
                      'PayPal',
                      'Amazon',
                      'American Express',
                      'Microsoft',
                      'Target',
                      'Ebay',
                      'Autodesk',
                      'CarFAX',
                      'Docusign',
                      'HP',
                      'MLB',
                      'Volvo',
                      'Ocado',
                      'UPC.ch',
                      'EFI.com',
                      'ReactBricks',
                      'Nozzle.io',
                      'Uber',
                    ]
                  )
                  .map((d, i) => (
                    <span key={i} className="opacity-70 even:opacity-40">
                      {d}
                    </span>
                  ))}
              </div>
              {/* @ts-ignore */}
            </marquee>
          </div>

          <div className="px-4 lg:max-w-screen-lg md:mx-auto mx-auto">
            <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10 lg:leading-none mt-8">
              合作夥伴
            </h3>
            <div className="h-8" />
            <div className={`grid grid-cols-1 gap-6 max-w-screen-md mx-auto`}>
              {partners
                .filter((d) => d.libraries?.includes('query'))
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

          <div className="mx-auto max-w-[400px] flex flex-col gap-2 items-center">
            <div className="shadow-lg rounded-lg overflow-hidden bg-white dark:bg-gray-800 dark:text-white">
              <Carbon />
            </div>
            <span
              className="text-[.7rem] bg-gray-500 bg-opacity-10 py-1 px-2 rounded text-gray-500
                dark:bg-opacity-20"
            >
              此廣告幫助我們對投入的時間感到開心，避免我們疲憊並放棄開源項目。錢萬歲！😉
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <div className="px-4 sm:px-6 lg:px-8  mx-auto max-w-3xl sm:text-center">
              <h3 className="text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10 lg:leading-none mt-2">
                更少的代碼，更少的邊緣情況。
              </h3>
              <p className="my-4 text-xl leading-7  text-gray-600">
                與其編寫 reducer、緩存邏輯、計時器、重試邏輯、複雜的 async/await
                腳本（我可以繼續列舉...），您實際上只需編寫正常情況下所需代碼的一小部分。當您使用
                TanStack Query
                時，您會驚訝於自己編寫的代碼有多少或刪除了多少代碼。請使用下面的示例之一來嘗試一下！
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {(
                  [
                    { label: 'Angular', value: 'angular' },
                    { label: 'React', value: 'react' },
                    { label: 'Solid', value: 'solid' },
                    { label: 'Svelte', value: 'svelte' },
                    { label: 'Vue', value: 'vue' },
                  ] as const
                ).map((item) => (
                  <button
                    key={item.value}
                    className={`inline-block py-2 px-4 rounded text-white uppercase font-extrabold ${
                      item.value === framework
                        ? 'bg-red-500'
                        : 'bg-gray-300 dark:bg-gray-700 hover:bg-red-300'
                    }`}
                    onClick={() => setFramework(item.value)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {[''].includes(framework) ? (
            <div className="px-2">
              <div className="p-8 text-center text-lg w-full max-w-screen-lg mx-auto bg-black text-white rounded-xl">
                正在尋找 <strong>@tanstack/{framework}-query</strong>{' '}
                示例？我們需要您的幫助構建{' '}
                <strong>@tanstack/{framework}-query</strong> 適配器！加入{' '}
                <a
                  href="https://tlinz.com/discord"
                  className="text-teal-500 font-bold"
                >
                  TanStack Discord 伺服器
                </a>{' '}
                讓我們一起努力！
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-black">
              <iframe
                key={framework}
                src={`https://stackblitz.com/github/${
                  queryProject.repo
                }/tree/${branch}/examples/${framework}/simple?embed=1&theme=${
                  isDark ? 'dark' : 'light'
                }&preset=node`}
                title={`tannerlinsley/${framework}-query: basic`}
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                className="shadow-2xl"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '80vh',
                  border: '0',
                }}
              ></iframe>
            </div>
          )}

          <div className="flex flex-col gap-4 items-center">
            <div className="font-extrabold text-xl lg:text-2xl">
              哇，您已經走了很長一段路！
            </div>
            <div className="italic font-sm opacity-70">只剩下一件事要做...</div>
            <div>
              <Link
                to="./docs/"
                className={`inline-block py-2 px-4 bg-red-500 rounded text-white uppercase font-extrabold`}
              >
                閱讀文檔！
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
