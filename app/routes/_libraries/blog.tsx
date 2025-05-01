import { Link, createFileRoute } from '@tanstack/react-router'
import { seo } from '~/utils/seo'

export const Route = createFileRoute('/_libraries/blog')({
  head: () => ({
    meta: seo({
      title: '部落格 | TanStack',
      description: 'TanStack 的最新消息和部落格文章！',
    }),
  }),
})

export function PostNotFound() {
  return (
    <div className="flex-1 p-4 flex flex-col items-center justify-center gap-6">
      <h1 className="opacity-10 flex flex-col text-center font-black">
        <div className="text-7xl leading-none">404</div>
        <div className="text-3xl leading-none">找不到頁面</div>
      </h1>
      <div className="text-lg">找不到文章。</div>
      <Link
        to="/blog"
        className={`py-2 px-4 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold`}
      >
        返回部落格首頁
      </Link>
    </div>
  )
}
