import { createFileRoute, Link } from '@tanstack/react-router'
import imgTanner from '~/images/people/tannerlinsley.jpeg'
import imgKevin from '~/images/people/kevinvancott.jpeg'
import imgDominik from '~/images/people/dominikdorfmeister.jpg'
import imgCorbin from '~/images/people/corbincrutchley.jpeg'
import { seo } from '~/utils/seo'
import { shuffle } from '~/utils/utils'
import { CiTurnL1 } from 'react-icons/ci'
import { useScript } from '~/hooks/useScript'

interface TeamMember {
  name: string
  twitter: string
  website: string
  specialties: string[]
  img: string
}

export const Route = createFileRoute('/_libraries/dedicated-support')({
  component: LoginComp,
  staleTime: Infinity,
  loader: () => {
    let indices = shuffle(
      Array.from({ length: teamMembers.length - 1 })
        .fill(0)
        .map((_, i) => i + 1)
    )

    return indices
  },
  head: () => ({
    meta: seo({
      title: '專屬支援 | TanStack',
      description: `任何規模專案的私人諮詢和企業支援合約。`,
      // Keywords to target support for all sizes of companies, including consulting and enterprise support contracts
      keywords:
        'tanstack,react,reactjs,react query,react table,開源,開源軟件,oss,軟件,諮詢,企業支援,專屬支援,企業合約',
    }),
  }),
})

const teamMembers: Array<TeamMember> = [
  {
    name: 'Tanner Linsley',
    twitter: '@TannerLinsley',
    website: 'tannerlinsley.com',
    specialties: ['TypeScript', '路由', '生態系統'],
    img: imgTanner,
  },
  {
    name: 'Dominik Dorfmeister',
    twitter: '@TkDodo',
    website: 'tkdodo.eu',
    specialties: ['數據管理', 'SSR', 'TypeScript'],
    img: imgDominik,
  },
  {
    name: 'Kevin Van Cott',
    twitter: '@KevinVanCott',
    website: 'kevinvancott.dev',
    specialties: ['表格', '數據網格', '儀表板'],
    img: imgKevin,
  },
  {
    name: 'Corbin Crutchley',
    twitter: '@Crutchcorn',
    website: 'crutchcorn.dev',
    specialties: ['表單', '驗證', '狀態管理'],
    img: imgCorbin,
  },
]

function LoginComp() {
  const randomIndices = Route.useLoaderData()

  useScript({
    id: 'hs-script-loader',
    async: true,
    defer: true,
    src: '//js-na1.hs-scripts.com/45982155.js',
  })

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container mx-auto px-4 md:px-6 space-y-12">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-4">
              <h1 className="space-y-2">
                <div className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none text-pretty">
                  專屬支援
                </div>
                <div className="text-xl font-normal tracking-tight sm:text-2xl md:text-3xl lg:text-4xl/none text-pretty">
                  為 TanStack 函式庫提供
                </div>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-pretty">
                為各種規模的專案提供私人諮詢和企業支援合約。
              </p>
            </div>
            {/* <div>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 uppercase font-black"
                href="#"
              >
                Get Started
              </Link>
            </div> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 md:px-6">
            {[
              teamMembers[0],
              ...randomIndices.map((i: number) => teamMembers[i]),
            ].map((member: TeamMember) => (
              <Link
                to={`https://twitter.com/${member.twitter}`}
                className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                key={member.name}
                target="_blank"
              >
                <div className="relative h-40 sm:h-48 md:h-52 lg:h-60 overflow-hidden">
                  <img
                    alt="使用者頭像"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 origin-top"
                    height={400}
                    src={member.img}
                    style={{
                      aspectRatio: '400/400',
                      objectFit: 'cover',
                    }}
                    width={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
                <div className="p-2 sm:p-4 space-y-4">
                  <div className="">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      <span className="inline-block w-5 text-center">𝕏</span>
                      {member.twitter}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      <a
                        href={`https://bsky.app/profile/${member.website}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="inline-block w-5 text-center">🦋</span>
                        @{member.website}
                      </a>
                    </p>
                  </div>
                  <ul className="flex flex-wrap">
                    {member.specialties.length > 0
                      ? member.specialties.map((specialty) => (
                          <li
                            className="bg-gray-500/10 text-xs text-gray-500 dark:text-white rounded-full px-2 py-1 mr-2 mb-2"
                            key={specialty}
                          >
                            {specialty}
                          </li>
                        ))
                      : null}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center max-w-xl mt-12 mx-auto px-4 text-gray-500 dark:text-gray-400 text-sm border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800/50">
          <p>
            註：此頁面專門用於詢問付費支援合約。如有一般支援問題，請在{' '}
            <a
              className="text-[#5865F2] hover:text-[#4752C4] dark:text-[#7289DA] dark:hover:text-[#5B6EAE]"
              href="https://tlinz.com/discord"
              target="_blank"
              rel="noreferrer"
            >
              Discord
            </a>{' '}
            或各個函式庫的{' '}
            <a
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              href="https://github.com/tanstack"
              target="_blank"
              rel="noreferrer"
            >
              GitHub&nbsp;討論區
            </a>{' '}
            提問，我們在那裡為清晰描述且範圍明確的問題提供免費幫助和支援。
          </p>
        </div>
        <div className="flex items-center flex-col py-12 space-y-2">
          <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extralight italic">
            讓我們聊聊！
          </div>
          <div className="opacity-30 text-xs max-w-[300px] text-center hover:opacity-100 focus:opacity-100 transition duration-300">
            (點擊屏幕右下角的聊天圖標開始對話)
          </div>
          <CiTurnL1 className="text-[5rem] rotate-180 translate-x-1/3" />
        </div>
      </section>
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-6 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
              <FaWrench className="h-8 w-8 text-gray-900 dark:text-gray-50" />
              <h3 className="text-lg font-semibold">Maintenance</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Get regular updates, bug fixes, and security patches for your
                open source projects.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-6 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
              <FaCode className="h-8 w-8 text-gray-900 dark:text-gray-50" />
              <h3 className="text-lg font-semibold">Development</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Collaborate with our team of experienced developers to enhance
                your open source projects.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-6 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
              <FaShieldAlt className="h-8 w-8 text-gray-900 dark:text-gray-50" />
              <h3 className="text-lg font-semibold">Security</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Ensure the security and compliance of your open source projects
                with our expert guidance.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-6 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
              <FaRocket className="h-8 w-8 text-gray-900 dark:text-gray-50" />
              <h3 className="text-lg font-semibold">Deployment</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Streamline the deployment and scaling of your open source
                projects with our infrastructure support.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
