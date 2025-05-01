import { createFileRoute } from '@tanstack/react-router'
import { Footer } from '~/components/Footer'
import { seo } from '~/utils/seo'

export const Route = createFileRoute('/_libraries/terms')({
  component: RouteComp,
  head: () => ({
    meta: seo({
      title: '服務條款',
      description: '服務條款',
    }),
  }),
})

export default function RouteComp() {
  return (
    <div className="flex flex-col max-w-full min-h-screen gap-12 p-4 md:p-8 pb-0">
      <div className="flex-1 space-y-12 w-full max-w-3xl mx-auto">
        <header className="">
          <h1 className="text-4xl font-bold">服務條款</h1>
        </header>

        <section className="">
          <h2 className="text-2xl font-bold mb-4">總則</h2>
          <p className="mb-4">
            歡迎使用 TanStack
            服務。這些服務條款（"條款"）規範您對我們提供的網站、產品和服務的使用。請仔細閱讀這些條款。
          </p>
          <p>
            使用我們的服務即表示您同意這些條款。如果您不同意這些條款，請不要使用我們的服務。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">使用政策</h2>
          <p className="mb-4">
            您同意不會濫用我們的服務。例如，請不要干擾我們的服務或嘗試以任何未通過我們公共介面或文檔的方式訪問它們。
          </p>
          <p>
            我們可能會隨時暫停或停止向您提供服務，包括發布新功能或修改現有功能。
          </p>
        </section>
      </div>
      <Footer />
    </div>
  )
}
