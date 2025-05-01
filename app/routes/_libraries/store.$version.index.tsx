import { CgSpinner } from 'react-icons/cg'
import { Link, createFileRoute, getRouteApi } from '@tanstack/react-router'
import { Carbon } from '~/components/Carbon'
import { Footer } from '~/components/Footer'
import { TbHeartHandshake } from 'react-icons/tb'
import SponsorPack from '~/components/SponsorPack'
import { storeProject } from '~/libraries/store'
import { Await } from '@tanstack/react-router'
import { seo } from '~/utils/seo'
import { twMerge } from 'tailwind-merge'
import { getLibrary } from '~/libraries'
import { LibraryFeatureHighlights } from '~/components/LibraryFeatureHighlights'
import LandingPageGad from '~/components/LandingPageGad'

export const Route = createFileRoute('/_libraries/store/$version/')({
  component: StoreVersionIndex,
  head: () => ({
    meta: seo({
      title: storeProject.name,
      description: storeProject.description,
    }),
  }),
})

// const librariesRouteApi = getRouteApi('/_libraries')
const library = getLibrary('store')

export default function StoreVersionIndex() {
  // const { sponsorsPromise } = librariesRouteApi.useLoaderData()
  const { version } = Route.useParams()

  const gradientText = `pr-1inline-block text-transparent bg-clip-text bg-gradient-to-r ${storeProject.colorFrom} ${storeProject.colorTo}`

  return (
    <>
      <div className="flex flex-col gap-20 md:gap-32 max-w-full pt-32">
        <div className="flex flex-col items-center gap-6 text-center px-4">
          <h1 className="font-black flex gap-3 items-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl uppercase [letter-spacing:-.05em]">
            <span>TanStack</span>
            <span className={twMerge(gradientText)}>Store</span>
          </h1>
          <h2
            className="font-bold text-2xl max-w-md
            md:text-3xl
            lg:text-5xl lg:max-w-2xl"
          >
            <span className="underline decoration-dashed decoration-gray-500 decoration-3 underline-offset-2">
              框架無關
            </span>{' '}
            類型安全存儲庫與反應式框架適配器
          </h2>
          <p
            className="text opacity-90 max-w-[500px]
            lg:text-xl lg:max-w-[800px]"
          >
            使用 TanStack Store 提升您的狀態管理 –
            框架無關、類型安全的存儲庫。享受{' '}
            <strong>最小設置、精細 API 和跨框架的無縫適應性</strong>
            。簡化您的開發並通過 TanStack Store 提高效率。
          </p>
          <Link
            to="./docs/"
            className={`py-2 px-4 bg-stone-600 text-white rounded uppercase font-extrabold`}
          >
            開始使用
          </Link>
        </div>
        <LibraryFeatureHighlights
          featureHighlights={library.featureHighlights}
        />
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
              Store <TbHeartHandshake /> 與您?
            </span>
            <div className="flex flex-col p-4 gap-4">
              <div>
                我們正在尋找 TanStack Store
                開源合作夥伴，希望您能超越一般贊助的範疇。您是否與我們一樣投入於
                TanStack Store？讓我們一起推動 Store 的發展界限！
              </div>
              <a
                href="mailto:partners@tanstack.com?subject=TanStack Store Partnership"
                className="text-blue-500 uppercase font-black text-sm"
              >
                一起交流
              </a>
            </div>
          </div>
        </div>

        {/*  
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
        */}

        <LandingPageGad />

        <div className="flex flex-col gap-4 items-center">
          <div className="font-extrabold text-xl lg:text-2xl">
            哇，您已經走了很長一段路！
          </div>
          <div className="italic font-sm opacity-70">只剩下一件事要做...</div>
          <div>
            <Link
              to="./docs/"
              className={`inline-block py-2 px-4 bg-stone-700 rounded text-white uppercase font-extrabold`}
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
