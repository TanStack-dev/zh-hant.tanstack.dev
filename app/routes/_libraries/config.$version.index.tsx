import { CgSpinner } from 'react-icons/cg'
import { FaCheckCircle } from 'react-icons/fa'
import { Carbon } from '~/components/Carbon'
import { Footer } from '~/components/Footer'
import { TbHeartHandshake } from 'react-icons/tb'
import SponsorPack from '~/components/SponsorPack'
import { configProject } from '~/libraries/config'
import { getLibrary } from '~/libraries'
import { LibraryFeatureHighlights } from '~/components/LibraryFeatureHighlights'
import {
  Await,
  Link,
  createFileRoute,
  getRouteApi,
} from '@tanstack/react-router'
import { seo } from '~/utils/seo'
import { twMerge } from 'tailwind-merge'
import LandingPageGad from '~/components/LandingPageGad'

export const Route = createFileRoute('/_libraries/config/$version/')({
  component: FormVersionIndex,
  head: () => ({
    meta: seo({
      title: configProject.name,
      description: configProject.description,
    }),
  }),
})

const librariesRouteApi = getRouteApi('/_libraries')

export default function FormVersionIndex() {
  const { sponsorsPromise } = librariesRouteApi.useLoaderData()
  const { version } = Route.useParams()
  const library = getLibrary('config')

  const gradientText = `pr-1 inline-block leading-snug text-transparent bg-clip-text bg-gradient-to-r ${configProject.colorFrom} ${configProject.colorTo}`

  return (
    <>
      <div className="flex flex-col gap-20 md:gap-32 pt-32">
        <div className="flex flex-col items-center gap-8 text-center px-4">
          <h1 className="font-black flex gap-3 items-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl uppercase [letter-spacing:-.05em]">
            <span>TanStack</span>
            <span className={twMerge(gradientText)}>Config</span>
          </h1>
          <h2
            className="font-bold text-2xl max-w-[600px]
            md:text-3xl
            lg:text-5xl lg:max-w-[800px]"
          >
            <span className="underline decoration-dashed decoration-gray-500 decoration-3 underline-offset-2">
              配置和工具
            </span>{' '}
            用於發布和維護高品質的 JavaScript 套件
          </h2>
          <Link
            to="./docs/"
            className={`py-2 px-4 bg-gray-500 text-white rounded uppercase font-extrabold`}
          >
            開始使用
          </Link>
        </div>

        <LibraryFeatureHighlights
          featureHighlights={library.featureHighlights}
        />

        <div className="px-4 sm:px-6 lg:px-8 mx-auto container">
          <div className=" sm:text-center pb-16">
            <h3 className="text-3xl text-center mx-auto leading-tight font-extrabold tracking-tight sm:text-4xl lg:leading-none mt-2">
              無憂設置
            </h3>
            <p className="mt-4 text-xl max-w-3xl mx-auto leading-7 opacity-60">
              將 TanStack Config 納入您的開發工具包，體驗構建和發布高品質
              JavaScript 套件時的高效率、速度和客製化新水準。
            </p>
          </div>
          <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 w-[max-content] mx-auto">
            {[
              // A list of features that @tanstack/config provides
              'Vite 生態系統',
              '優化的預設值',
              'Publint 合規',
              '最簡配置',
              '套件版本控制',
              '自動化變更日誌',
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
              Config <TbHeartHandshake /> 與您
            </span>
            <div className="flex flex-col p-4 gap-4">
              <div>
                我們正在尋找 TanStack Config
                開源合作夥伴，希望能超越贊助範疇。如果您與我們一樣熱衷於
                TanStack Config，讓我們一起推動 Config 的發展！
              </div>
              <a
                href="mailto:partners@tanstack.com?subject=TanStack Config Partnership"
                className="text-blue-500 uppercase font-black text-sm"
              >
                一起聊聊
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

        <div className="flex flex-col gap-4 items-center">
          <div className="font-extrabold text-xl lg:text-2xl">
            哇，您已經瀏覽了很長一段路！
          </div>
          <div className="italic font-sm opacity-70">只剩下一件事要做...</div>
          <div>
            <Link
              to="./docs/"
              className={`inline-block py-2 px-4 bg-gray-500 text-white rounded uppercase font-extrabold`}
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
