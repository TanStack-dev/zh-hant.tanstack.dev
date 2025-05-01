import * as React from 'react'

import { CgSpinner } from 'react-icons/cg'
import { FaCheckCircle } from 'react-icons/fa'
import {
  Await,
  Link,
  createFileRoute,
  getRouteApi,
} from '@tanstack/react-router'
import { Carbon } from '~/components/Carbon'
import { Footer } from '~/components/Footer'
import { TbHeartHandshake } from 'react-icons/tb'
import SponsorPack from '~/components/SponsorPack'
import { formProject } from '~/libraries/form'
import { Framework, getBranch, getLibrary } from '~/libraries'
import { seo } from '~/utils/seo'
import { twMerge } from 'tailwind-merge'
import { LibraryFeatureHighlights } from '~/components/LibraryFeatureHighlights'
import LandingPageGad from '~/components/LandingPageGad'

export const Route = createFileRoute('/_libraries/form/$version/')({
  component: FormVersionIndex,
  head: () => ({
    meta: seo({
      title: formProject.name,
      description: formProject.description,
    }),
  }),
})

const librariesRouteApi = getRouteApi('/_libraries')

const library = getLibrary('form')

export default function FormVersionIndex() {
  const { sponsorsPromise } = librariesRouteApi.useLoaderData()
  const { version } = Route.useParams()
  const branch = getBranch(formProject, version)
  const [framework, setFramework] = React.useState<Framework>('react')
  const [isDark, setIsDark] = React.useState(true)

  React.useEffect(() => {
    setIsDark(window.matchMedia?.(`(prefers-color-scheme: dark)`).matches)
  }, [])

  const gradientText = `pr-1 inline-block text-transparent bg-clip-text bg-gradient-to-r ${formProject.colorFrom} ${formProject.colorTo}`

  return (
    <>
      <div className="flex flex-col gap-20 md:gap-32 max-w-full pt-32">
        <div className="flex flex-col items-center gap-8 text-center px-4">
          <h1 className="font-black flex gap-3 items-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl uppercase [letter-spacing:-.05em]">
            <span>TanStack</span>
            <span className={twMerge(gradientText)}>Form</span>
          </h1>
          <h2
            className="font-bold text-2xl max-w-[600px]
            md:text-3xl
            lg:text-5xl lg:max-w-[800px]"
          >
            <span className="underline decoration-dashed decoration-yellow-500 decoration-3 underline-offset-2">
              無頭式、高效能且類型安全
            </span>{' '}
            的表單狀態管理工具，適用於 TS/JS、React、Vue、Angular、Solid、Lit 和
            Svelte
          </h2>
          <p
            className="text opacity-90 max-w-[500px]
            lg:text-xl lg:max-w-[800px]"
          >
            告別表單處理的煩惱，回歸簡單、可組合和類型安全的開發方式。TanStack
            Form 擁有{' '}
            <strong>
              小巧的體積、零依賴、框架無關的核心設計以及精細的類型安全 API
            </strong>
            ，完美結合了簡單性和強大功能，讓您能夠快速構建表單并保持開發的安心。
          </p>
          <Link
            to="/$libraryId/$version/docs"
            params={{ libraryId: library.id, version }}
            className={`py-2 px-4 bg-yellow-400 text-black rounded uppercase font-extrabold`}
          >
            開始使用
          </Link>
        </div>
        <LibraryFeatureHighlights
          featureHighlights={library.featureHighlights}
        />

        <div className="px-4 sm:px-6 lg:px-8 mx-auto">
          <div className=" sm:text-center pb-16">
            <h3 className="text-3xl text-center mx-auto leading-tight font-extrabold tracking-tight sm:text-4xl lg:leading-none mt-2">
              零依賴，所有功能
            </h3>
            <p className="mt-4 text-xl max-w-3xl mx-auto leading-7 opacity-60">
              TanStack Form
              零依賴，考慮到其豐富的功能集，它極為輕量。從週末愛好項目到企業級應用，TanStack
              Form 擁有幫助您按照創造力速度成功的所有工具。
            </p>
          </div>
          <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4  mx-auto">
            {[
              // TanStack Form 提供的用於管理表單狀態、驗證、touched/dirty 狀態、UI 整合等方面的功能列表
              '框架無關設計',
              '一流的 TypeScript 支持',
              '無頭式設計',
              '小巧 / 零依賴',
              '精細反應式組件/Hooks',
              '擴展性和插件架構',
              '模塊化架構',
              '表單/字段驗證',
              '非同步驗證',
              '內建非同步驗證防抖',
              '可配置的驗證事件',
              '深層嵌套對象/陣列字段',
            ].map((d, i) => {
              return (
                <span key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 " /> {d}
                </span>
              )
            })}
          </div>
        </div>

        <div className="px-4 w-[500px] max-w-full mx-auto">
          <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10 lg:leading-none mt-8">
            合作夥伴
          </h3>
          <div className="h-8" />
          <div
            className="flex-1 flex flex-col items-center text-sm text-center
                      bg-white/80 shadow-xl shadow-gray-500/20 rounded-lg
                        divide-y-2 divide-gray-500 divide-opacity-10 overflow-hidden
                        dark:bg-black/40 dark:shadow-none"
          >
            <span className="flex items-center gap-2 p-12 text-4xl text-rose-500 font-black uppercase">
              Form <TbHeartHandshake /> 與您？
            </span>
            <div className="flex flex-col p-4 gap-4">
              <div>
                我們正在尋找 TanStack Form
                開源合作夥伴，希望您能超越一般贊助的範疇。您是否與我們一樣投入於
                TanStack Form？讓我們一起推動 Form 的發展界限！
              </div>
              <a
                href="mailto:partners@tanstack.com?subject=TanStack Form Partnership"
                className="text-blue-500 uppercase font-black text-sm"
              >
                一起交流
              </a>
            </div>
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

        <div className="flex flex-col gap-4">
          <div className="px-4 sm:px-6 lg:px-8  mx-auto container max-w-3xl sm:text-center">
            <h3 className="text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10 lg:leading-none mt-2">
              更少代碼，更少邊緣情況
            </h3>
            <p className="my-4 text-xl leading-7  text-gray-600">
              TanStack Form 不鼓勵倉促的抽象和以 hook 為中心的
              API，而是在關鍵處擁抱組合，通過組件（當然也提供 hooks）提供無頭式
              API。TanStack Form 設計為直接在您的組件和 UI
              中使用，這意味著更少的代碼、更少的邊緣情況和對 UI
              的更深層次控制。請使用下面的示例之一來嘗試一下！
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {(
                [
                  { label: 'React', value: 'react' },
                  { label: 'Vue', value: 'vue' },
                  { label: 'Angular', value: 'angular' },
                  { label: 'Solid', value: 'solid' },
                  { label: 'Lit', value: 'lit' },
                ] as const
              ).map((item) => (
                <button
                  key={item.value}
                  className={`inline-block py-2 px-4 rounded text-black uppercase font-extrabold ${
                    item.value === framework
                      ? 'bg-yellow-500'
                      : 'bg-gray-300 dark:bg-gray-700 hover:bg-yellow-400'
                  }`}
                  onClick={() => setFramework(item.value)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-black">
          <iframe
            key={framework}
            src={`https://stackblitz.com/github/${
              formProject.repo
            }/tree/${branch}/examples/${framework}/simple?embed=1&theme=${
              isDark ? 'dark' : 'light'
            }&preset=node`}
            title={`tanstack//${framework}-form: simple`}
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            className="shadow-2xl max-h-[800px]"
            loading="lazy"
            style={{
              width: '100%',
              height: '80vh',
              border: '0',
            }}
          ></iframe>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <div className="font-extrabold text-xl lg:text-2xl">
            哇，您已經走了很長一段路！
          </div>
          <div className="italic font-sm opacity-70">只剩下一件事要做...</div>
          <div>
            <Link
              to="/$libraryId/$version/docs"
              params={{ libraryId: library.id, version }}
              className={`inline-block py-2 px-4 bg-yellow-500 rounded text-black uppercase font-extrabold`}
            >
              開始使用！
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
