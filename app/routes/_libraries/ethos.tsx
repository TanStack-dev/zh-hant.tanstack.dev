import { createFileRoute } from '@tanstack/react-router'
import { Footer } from '~/components/Footer'
import { seo } from '~/utils/seo'

export const Route = createFileRoute('/_libraries/ethos')({
  component: RouteComp,
  head: () => ({
    meta: seo({
      title: 'TanStack 理念',
      description: '我們的哲學和對構建開放網絡的承諾。',
    }),
  }),
})

export default function RouteComp() {
  return (
    <div className="flex flex-col max-w-full min-h-screen gap-12 p-4 md:p-8 pb-0">
      <div className="flex-1 space-y-12 w-full max-w-3xl mx-auto">
        <header className="">
          <h1 className="text-4xl font-bold">TanStack 理念</h1>
        </header>

        <section className="">
          <p className="text-lg">
            在
            TanStack，我們的理念很簡單：我們為開放網絡、開放標準以及按照您所見合適的方式自由組合、部署和創新而建設。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">獨立所有，設計上無偏見</h2>
          <p>
            TanStack LLC <strong>100% 由其創始人私人擁有</strong>
            ——沒有外部投資者，沒有控制利益，也沒有隱藏議程。我們的資金來自與共享我們核心價值觀的公司的媒體和營銷合作夥伴關係：
            <strong>
              開放網絡、開放標準，以及自由組合和部署任何您想要的內容，隨心所欲。
            </strong>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">可持續的未來</h2>
          <p>
            TanStack
            是一個精簡、專注的團隊：一位全職創始人、幾位知名且得到良好贊助的維護者，以及一個蓬勃發展的用戶和貢獻者社區，他們共享我們的核心價值觀。
          </p>
          <p className="">
            與追求不惜一切代價增長的風險投資支持的項目不同，
            <strong>
              我們不需要"擴展"、"增長"或"擴張"成為風投資助的、尋求收購的或半免費欺騙性產品。
            </strong>
            我們不痴迷於達到下一個10倍倍數以滿足某些母公司尋求首次公開募股的野心。
          </p>
          <p className="">這意味著：</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>沒有為了獲取利潤而犧牲開發者體驗的壓力。</li>
            <li>沒有企業影響決定我們的技術方向。</li>
            <li>
              <strong>專注於構建使網絡對用戶和開發者更好的工具</strong>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">技術無關性為默認</h2>
          <p>
            我們相信
            <strong>與框架無關、與平台無關且面向未來的工具</strong>
            這些工具將開發者放在首位：
          </p>
          <ul className="list-disc pl-8 space-y-2">
            <li>
              TanStack
              函式庫建立在與框架和平台無關的基本原理上。當我們的函式庫建立在其他工具上時，比如
              TanStack Start 建立在 Vite
              上，我們確保這些工具也維持相同的開放性和靈活性價值觀。
            </li>
            <li>
              <strong>TanStack 函式庫</strong>{' '}
              已經支持或將來會支持所有主要（甚至一些次要！）框架和部署環境——無一例外。
            </li>
            <li>
              <strong>如果有任何技術我們保持一致，那就是 TypeScript</strong>
              ——或者更廣泛地說，是"類型化的
              JavaScript"，無論它隨著時間的推移如何演變。
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">開放贊助</h2>
          <p>我們合作的每位贊助商不僅理解而且積極支持我們的價值觀：</p>
          <ul className="list-disc pl-8  space-y-2">
            <li>
              任何贊助商都不能以有利於其平台的方式影響或左右 TanStack
              的核心技術。
            </li>
            <li>
              我們的函式庫首先是為了<strong>服務開發者</strong>
              而構建的，而非企業利益。
            </li>
            <li>
              如果一家公司支持我們，那是因為他們相信我們正在構建的東西——而不是因為他們期望得到優先待遇。
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <p className="text-lg font-medium">
            歸根結底，
            <strong>
              TanStack
              不僅僅是一套函式庫——它是一種按照您的方式構建網絡的承諾，不妥協。
            </strong>
            我們只需要足夠的資源來不斷改進我們認為真正能讓網絡變得更好的工具。
          </p>
        </section>

        <section className="space-y-4">
          <div>
            <strong>- Tanner Linsley</strong>
            <br />
            創始人，TanStack LLC
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
