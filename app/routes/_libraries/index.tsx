import {
  Await,
  Link,
  MatchRoute,
  createFileRoute,
  getRouteApi,
} from '@tanstack/react-router'
import { Carbon } from '~/components/Carbon'
import { twMerge } from 'tailwind-merge'
import { CgSpinner } from 'react-icons/cg'
import { Footer } from '~/components/Footer'
import SponsorPack from '~/components/SponsorPack'
import discordImage from '~/images/discord-logo-white.svg'
import { useMutation } from '~/hooks/useMutation'
import { sample } from '~/utils/utils'
import { librariesByGroup, librariesGroupNamesMap, Library } from '~/libraries'
import bytesImage from '~/images/bytes.svg'
import { partners } from '../../utils/partners'
import OpenSourceStats from '~/components/OpenSourceStats'
import splashLightImg from '~/images/splash-light.png'
import splashDarkImg from '~/images/splash-dark.png'
import { GadFooter } from '~/components/GoogleScripts'
import LandingPageGad from '~/components/LandingPageGad'
import { Suspense } from 'react'

export const textColors = [
  `text-rose-500`,
  `text-yellow-500`,
  `text-teal-500`,
  `text-blue-500`,
]

export const gradients = [
  `from-rose-500 to-yellow-500`,
  `from-yellow-500 to-teal-500`,
  `from-teal-500 to-violet-500`,
  `from-blue-500 to-pink-500`,
]

const courses = [
  {
    name: '官方 TanStack React Query 課程',
    cardStyles: `border-t-4 border-red-500 hover:(border-green-500)`,
    href: 'https://query.gg/?s=tanstack',
    description: `通過我們全新的課程，輕鬆學習如何使用 TanStack 的 React Query 構建企業級應用程序。`,
  },
]

export const Route = createFileRoute('/_libraries/')({
  loader: () => {
    return {
      randomNumber: Math.random(),
    }
  },
  component: Index,
})

async function bytesSignupServerFn({ email }: { email: string }) {
  'use server'

  return fetch(`https://bytes.dev/api/bytes-optin-cors`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      influencer: 'tanstack',
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

// const librariesRouteApi = getRouteApi('/_libraries')

function Index() {
  const bytesSignupMutation = useMutation({
    fn: bytesSignupServerFn,
  })

  const { randomNumber } = Route.useLoaderData()
  // const { sponsorsPromise } = librariesRouteApi.useLoaderData()
  const gradient = sample(gradients, randomNumber)

  return (
    <>
      {/* <img
        src={waves}
        className="-bottom-[50px] -left-[10px] z-0 fixed opacity-20"
      />
      <img
        src={toyPalmChair}
        className="-bottom-[50px] -right-[100px] z-0 fixed opacity-20"
      /> */}
      <div className="max-w-full z-10">
        <div className="flex flex-col xl:flex-row items-center gap-4 xl:pt-24 xl:justify-center">
          <img
            src={splashLightImg}
            className="w-[300px] pt-8 xl:pt-0 xl:w-[400px] 2xl:w-[500px] dark:hidden"
            alt="TanStack Logo"
          />
          <img
            src={splashDarkImg}
            className="w-[300px] pt-8 xl:pt-0 xl:w-[400px] 2xl:w-[500px] hidden dark:block"
            alt="TanStack Logo"
          />
          <div className="flex flex-col items-center gap-6 text-center px-4 xl:text-left xl:items-start">
            <div className="flex gap-2 lg:gap-4 items-center">
              <h1
                className={`inline-block
            font-black text-5xl
            md:text-6xl
            lg:text-8xl`}
              >
                <span
                  className={`
            inline-block text-black dark:text-white
            mb-2 uppercase [letter-spacing:-.04em] pr-1.5
            `}
                >
                  TanStack
                </span>
              </h1>
            </div>
            <h2
              className="font-bold text-2xl max-w-md
            md:text-4xl md:max-w-2xl
            2xl:text-5xl lg:max-w-2xl text-balance"
            >
              為{' '}
              <span className="underline decoration-dashed decoration-yellow-500 decoration-3 underline-offset-2">
                網頁開發者
              </span>{' '}
              打造的高品質開源軟件。
            </h2>
            <p
              className="text opacity-90 max-w-sm
            lg:text-xl lg:max-w-2xl text-balance"
            >
              無頭、類型安全且功能強大的工具，適用於網頁應用程序、路由、狀態管理、數據可視化、數據表格以及更多。
            </p>
          </div>
        </div>
        <div className="my-16" />
        <div className="w-fit mx-auto px-4">
          <Suspense>
            <OpenSourceStats />
          </Suspense>
        </div>
        <div className="my-16" />
        <div className="px-4 lg:max-w-screen-lg md:mx-auto">
          <h3 className={`text-4xl font-light`}>開源庫</h3>

          {Object.entries(librariesByGroup).map(
            ([groupName, groupLibraries]: [string, Library[]]) => (
              <div key={groupName} className="mt-8">
                <h4 className={`text-2xl font-medium capitalize mb-6`}>
                  {
                    librariesGroupNamesMap[
                      groupName as keyof typeof librariesGroupNamesMap
                    ]
                  }
                </h4>
                {/* Library Cards */}
                <div
                  className={`grid grid-cols-1 gap-6 gap-y-8 justify-center
                sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3`}
                >
                  {groupLibraries.map((library, i: number) => {
                    return (
                      <Link
                        key={library.name}
                        to={library.to ?? '#'}
                        params
                        className={twMerge(
                          `border-2 border-transparent rounded-xl shadow-md p-8 transition-all duration-300
                          bg-white/90 dark:bg-black/40 backdrop-blur-sm
                          dark:border-gray-800/50`,
                          'hover:shadow-lg',
                          'relative overflow-hidden group',
                          'min-h-[250px] xl:min-h-[220px]',
                          library.cardStyles
                        )}
                        style={{
                          zIndex: i,
                        }}
                      >
                        {/* Background content that will blur on hover */}
                        <div className="z-0 relative group-hover:blur-[0.5px] transition-[filter] duration-200">
                          <div className="flex gap-2 justify-between items-center">
                            <MatchRoute
                              pending
                              to={library.to}
                              children={(isPending) => {
                                return (
                                  <div
                                    className={twMerge(
                                      `flex items-center gap-2 text-[1.2rem] font-extrabold uppercase [letter-spacing:-.04em]`
                                    )}
                                    style={{
                                      viewTransitionName: `library-name-${library.id}`,
                                    }}
                                  >
                                    <span className="bg-current rounded-lg leading-none flex items-center">
                                      <span className="font-black text-white dark:text-black text-xs leading-none p-1.5 px-2 uppercase">
                                        TanStack
                                      </span>
                                    </span>
                                    <span className="text-current">
                                      {library.name.replace('TanStack ', '')}
                                    </span>
                                  </div>
                                )
                              }}
                            />
                          </div>
                          <div
                            className={`text-sm italic font-medium mt-3 text-current`}
                          >
                            {library.tagline}
                          </div>

                          {/* Description preview with ellipsis */}
                          <div
                            className={`text-sm mt-3 text-gray-700 dark:text-gray-300 line-clamp-3 leading-relaxed`}
                          >
                            {library.description}
                          </div>
                        </div>

                        {/* Foreground content that appears on hover */}
                        <div
                          className="absolute inset-0 z-30 bg-white/95 dark:bg-black/95 p-6
                          backdrop-blur-sm flex flex-col justify-center opacity-0 group-hover:opacity-100
                          transition-opacity duration-300"
                        >
                          <div
                            className={`text-sm text-gray-800 dark:text-gray-200 leading-relaxed`}
                          >
                            {library.description}
                          </div>
                          <div className="mt-6 text-center">
                            <span
                              className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/10 
                              rounded-full text-sm font-medium text-gray-900 dark:text-white"
                            >
                              點擊了解更多
                              <svg
                                className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                        {/* Badge */}
                        {library.badge ? (
                          <div
                            className={twMerge(`absolute top-0 right-0 z-20`)}
                          >
                            <div
                              className={twMerge(
                                `w-[100px] h-[100px] rounded-full translate-x-1/2 -translate-y-1/2`,
                                library.bgStyle
                              )}
                            />
                            <span
                              className={twMerge(
                                'inline-block transform rotate-45 uppercase text-white font-black italic animate-pulse text-xs',
                                library.badge.length > 4
                                  ? 'absolute top-[16px] right-[-2px]'
                                  : 'absolute top-[14px] right-[5px]'
                              )}
                            >
                              {library.badge}
                            </span>
                          </div>
                        ) : null}
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          )}
        </div>
        <hr className="my-16 border-gray-200 dark:border-gray-500/10" />
        <div className="px-4 lg:max-w-screen-lg md:mx-auto">
          <h3 className={`text-4xl font-light mb-6`}>合作夥伴</h3>
          <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2`}>
            {partners.map((partner) => {
              return (
                <a
                  key={partner.name}
                  href={partner.href}
                  target="_blank"
                  className="bg-white/80 shadow-xl shadow-gray-500/20 rounded-lg dark:border border-gray-500/20 dark:bg-black/40 dark:shadow-none group overflow-hidden grid"
                  rel="noreferrer"
                >
                  <div className="z-0 row-start-1 col-start-1 flex items-center justify-center group-hover:blur-md transition-all duration-200 p-4">
                    {partner.homepageImg}
                  </div>
                  <div className="z-10 row-start-1 col-start-1 max-w-full p-4 text-sm flex flex-col gap-4 items-start justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/70 dark:bg-gray-800/80">
                    {partner.content}
                  </div>
                </a>
              )
            })}
          </div>
        </div>
        <hr className="my-16 border-gray-200 dark:border-gray-500/10" />
        <div className={`lg:max-w-screen-lg px-4 mx-auto`}>
          <h3 className={`text-4xl font-light mb-6`}>課程</h3>
          <div className={`mt-4 grid grid-cols-1 gap-4`}>
            {courses.map((course) => (
              <a
                key={course.name}
                href={course.href}
                className={`flex gap-2 justify-between border-2 border-transparent rounded-lg p-4 md:p-8
              transition-all bg-white/90 dark:bg-black/40
              shadow-xl shadow-green-700/10 dark:shadow-green-500/30
              hover:border-green-500
              `}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={`col-span-2
                    md:col-span-5`}
                >
                  <div className={`text-2xl font-bold text-green-500`}>
                    {course.name}
                  </div>
                  <div className={`text-sm mt-2`}>{course.description}</div>
                  <div
                    className={`inline-block mt-4 px-4 py-2 bg-green-500 text-white rounded shadow uppercase font-black text-sm`}
                  >
                    立即查看 →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        {/* 
        <hr className="my-16 border-gray-200 dark:border-gray-500/10" />
        <div className={`lg:max-w-screen-lg px-4 mx-auto`}>
          <h3 className={`text-4xl font-light`}>開源贊助商</h3>
          <div className="h-6" />
          <div
            style={{
              aspectRatio: '1/1',
            }}
            className="max-w-[1000px] mx-auto"
          >
            <Await
              promise={sponsorsPromise}
              fallback={<CgSpinner className="text-2xl animate-spin mx-auto" />}
              children={(sponsors) => {
                return <SponsorPack sponsors={sponsors} />
              }}
            />
          </div>
          <div className={`h-8`} />
          <div className={`text-center`}>
            <div>
              <a
                href="https://github.com/sponsors/tannerlinsley"
                className={`inline-block p-4 bg-green-500 rounded text-white uppercase font-black`}
              >
                成為贊助商！
              </a>
            </div>
            <div className={`h-4`} />
            <p className={`italic mx-auto max-w-screen-sm text-gray-500`}>
              贊助商可獲得特殊福利，如{' '}
              <strong>
                私人 Discord 頻道、優先問題請求、直接支持甚至課程優惠券
              </strong>
              ！
            </p>
          </div>
        </div>
         */}
        <hr className="my-16 border-gray-200 dark:border-gray-500/10" />
        <LandingPageGad />
        <hr className="my-16 border-gray-200 dark:border-gray-500/10" />
        <div className="px-4 mx-auto max-w-screen-lg">
          <div
            className={`
          rounded-md p-4 grid gap-6
          bg-discord text-white overflow-hidden relative
          shadow-xl shadow-indigo-700/30
          sm:p-8 sm:grid-cols-3 items-center`}
          >
            <div
              className={`absolute transform opacity-10 z-0
            right-0 top-0 -translate-y-1/3 translate-x-1/3
            sm:opacity-20`}
            >
              <img
                src={discordImage}
                alt="Discord Logo"
                width={300}
                height={300}
              />
            </div>
            <div className={`sm:col-span-2`}>
              <h3 className={`text-3xl`}>TanStack 的 Discord 社區</h3>
              <p className={`mt-4`}>
                TanStack 的官方社區，可以提問、交流、結交新朋友，並獲取關於
                TanStack 未來動向的最新消息！
              </p>
            </div>
            <div className={`flex items-center justify-center`}>
              <a
                href="https://discord.com/invite/WrRKjPJ"
                target="_blank"
                className={`block w-full mt-4 px-4 py-2 bg-white text-discord
                text-center rounded shadow-lg z-10 uppercase font-black`}
                rel="noreferrer"
              >
                加入 TanStack Discord
              </a>
            </div>
          </div>
        </div>
        <div className="h-4" />
        <div className="px-4 mx-auto max-w-screen-lg relative">
          <div className="rounded-md p-8 bg-white shadow-xl shadow-gray-900/10 md:p-14 dark:bg-black/40">
            {!bytesSignupMutation.submittedAt ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.currentTarget)

                  bytesSignupMutation.mutate({
                    email: formData.get('email_address')?.toString() || '',
                  })
                }}
              >
                <div>
                  <div className={`relative inline-block`}>
                    <h3 className={`text-3xl`}>訂閱 Bytes</h3>
                    <figure className={`absolute top-0 right-[-48px]`}>
                      <img
                        src={bytesImage}
                        alt="Bytes Logo"
                        width={40}
                        height={40}
                      />
                    </figure>
                  </div>

                  <h3 className={`text-lg mt-1`}>最佳 JavaScript 通訊</h3>
                </div>
                <div className={`grid grid-cols-3 mt-4 gap-2`}>
                  <input
                    disabled={bytesSignupMutation.status === 'pending'}
                    className={`col-span-2 p-3 placeholder-gray-400 text-black bg-gray-200 rounded text-sm outline-none focus:outline-none w-full dark:(text-white bg-gray-700)`}
                    name="email_address"
                    placeholder="您的電子郵件地址"
                    type="text"
                    required
                  />
                  <button
                    type="submit"
                    className={`bg-[#ED203D] text-white rounded uppercase font-black`}
                  >
                    <span>
                      {bytesSignupMutation.status === 'pending'
                        ? '載入中...'
                        : '訂閱'}
                    </span>
                  </button>
                </div>
                {bytesSignupMutation.error ? (
                  <p
                    className={`text-sm text-red-500 font-semibold italic mt-2`}
                  >
                    似乎出了些問題。請重試。
                  </p>
                ) : (
                  <p className={`text-sm opacity-30 font-semibold italic mt-2`}>
                    加入超過100,000名開發者的行列
                  </p>
                )}
              </form>
            ) : (
              <p>🎉 感謝您！請確認您的電子郵件</p>
            )}
          </div>
        </div>
        <div className={`h-20`} />
        <Footer />
      </div>
    </>
  )
}
