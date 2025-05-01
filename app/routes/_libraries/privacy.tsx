import { createFileRoute } from '@tanstack/react-router'
import { Footer } from '~/components/Footer'
import { seo } from '~/utils/seo'

export const Route = createFileRoute('/_libraries/privacy')({
  component: RouteComp,
  head: () => ({
    meta: seo({
      title: '隱私政策',
      description: '隱私政策',
    }),
  }),
})

export default function RouteComp() {
  return (
    <div className="flex flex-col max-w-full min-h-screen gap-12 p-4 md:p-8 pb-0">
      <div className="flex-1 space-y-12 w-full max-w-3xl mx-auto">
        <header className="">
          <h1 className="text-4xl font-bold">隱私政策</h1>
          <p className="">生效日期：2025年1月18日</p>
        </header>

        <section className="">
          <p className="text-lg">
            在 <strong>TanStack.com</strong>
            （以下簡稱「本網站」），您的隱私對我們非常重要。本隱私政策說明了當您訪問或使用我們的網站、產品和服務時，我們如何收集、使用和保護您的信息。使用本網站即表示您同意本隱私政策中描述的做法。如果您不同意，請不要使用本網站。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">1. 我們收集的信息</h2>
          <p>
            我們收集信息是為了提供和改進我們的服務。我們可能收集的信息類型包括：
          </p>
          <ul className="list-disc pl-8">
            <li>
              <strong>個人信息：</strong>{' '}
              包括您的姓名、電子郵件地址、電話號碼或您在註冊帳戶或與本網站互動時提供的其他信息。
            </li>
            <li>
              <strong>使用數據：</strong>{' '}
              有關您如何訪問和使用本網站的信息，包括您的IP地址、瀏覽器類型、訪問的頁面以及其他診斷數據。
            </li>
            <li>
              <strong>Cookies和追蹤技術：</strong>{' '}
              詳情請參閱下方的「Cookies和追蹤」部分。
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">2. 我們如何使用您的信息</h2>
          <p>我們使用收集的信息來達成以下目的：</p>
          <ul className="list-disc pl-8">
            <li>提供、運營和維護本網站及我們的服務。</li>
            <li>改進用戶體驗並優化性能。</li>
            <li>與您溝通，包括回應詢問和發送更新。</li>
            <li>遵守法律義務或執行我們的服務條款。</li>
            <li>防止欺詐、有害或未授權的活動。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">3. Cookies和追蹤</h2>
          <p>
            本網站使用Cookies和類似的追蹤技術來分析趨勢、追蹤用戶行為並收集人口統計信息。Cookies是存儲在您設備上的小文件。
          </p>
          <p>
            <strong>您可以控制Cookies：</strong>
          </p>
          <ul className="list-disc pl-8">
            <li>大多數瀏覽器允許您通過設置阻止或刪除Cookies。</li>
            <li>禁用Cookies可能會影響本網站的功能。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">4. 我們如何分享您的信息</h2>
          <p>
            我們不出售或出租您的個人信息。然而，我們可能在以下情況下分享信息：
          </p>
          <ul className="list-disc pl-8">
            <li>
              <strong>服務提供商：</strong>{' '}
              與幫助我們運營本網站的第三方分享，例如託管或分析提供商。
            </li>
            <li>
              <strong>法律合規：</strong> 如果法律要求或為了回應法律請求。
            </li>
            <li>
              <strong>業務轉讓：</strong> 與合併、收購或資產出售相關的情況。
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">5. 數據安全</h2>
          <p>
            我們採取合理措施保護您的信息免受未授權的訪問、使用或披露。然而，沒有任何安全措施是完全可靠的，我們無法保證您的數據的絕對安全。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">6. 您的權利</h2>
          <p>根據您的所在地，您可能擁有以下有關您的個人信息的權利：</p>
          <ul className="list-disc pl-8">
            <li>
              <strong>訪問：</strong> 請求訪問我們持有的有關您的個人信息。
            </li>
            <li>
              <strong>更正：</strong> 請求更正不準確或不完整的數據。
            </li>
            <li>
              <strong>刪除：</strong> 請求刪除您的個人信息。
            </li>
            <li>
              <strong>數據可攜性：</strong>{' '}
              以結構化、機器可讀的格式接收您的數據副本。
            </li>
          </ul>
          <p>
            要行使這些權利，請聯繫我們：{' '}
            <a
              href="mailto:support@tanstack.com"
              className="text-blue-600 underline"
            >
              support@tanstack.com
            </a>
            。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">7. 第三方服務</h2>
          <p>
            本網站可能包含指向第三方服務或網站的鏈接。我們對這些第三方的隱私實踐不負責。請查看他們的隱私政策以獲取更多信息。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">8. 兒童隱私</h2>
          <p>
            本網站不適用於13歲以下的兒童，我們不會故意收集兒童的個人信息。如果我們發現收集了兒童的信息，我們將立即刪除。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">9. 本隱私政策的變更</h2>
          <p>
            我們可能會不時更新本隱私政策。任何更改將在此頁面上發布，並附有更新的「生效日期」。您在更改發布後繼續使用本網站即表示接受修訂後的隱私政策。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">10. 聯繫我們</h2>
          <p>如果您對本隱私政策或我們如何處理您的信息有疑問，請聯繫我們：</p>
          <address>
            <p>
              <strong>TanStack</strong>
            </p>
            <p>
              電子郵件：{' '}
              <a
                href="mailto:support@tanstack.com"
                className="text-blue-600 underline"
              >
                support@tanstack.com
              </a>
            </p>
          </address>
        </section>
      </div>
      <Footer />
    </div>
  )
}
