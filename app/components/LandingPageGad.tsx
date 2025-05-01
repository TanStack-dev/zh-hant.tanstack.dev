import { Link } from '@tanstack/react-router'
import { GadFooter } from './GoogleScripts'

export default function LandingPageGad() {
  return (
    <div className={`lg:max-[400px] px-4 mx-auto`}>
      <div className="flex flex-col gap-4 items-center">
        <div className="shadow-lg rounded-lg overflow-hidden bg-white dark:bg-gray-800 dark:text-white mx-auto">
          <GadFooter />
        </div>
        <div
          className="text-xs bg-gray-500 bg-opacity-10 py-2 px-4 rounded text-gray-500
                dark:bg-opacity-20 self-center text-center w-[500px] max-w-full space-y-2"
        >
          <div>
            <span className="font-medium italic">
              開源專案上的廣告？
            </span>{' '}
            <span className="font-black">這是什麼，1999年嗎？</span>
          </div>
          <div>
            <span className="font-medium italic">拜託...</span> TanStack 
            是100%私人擁有，沒有付費產品、風險投資或併購計劃。我們是一個小團隊，致力於創建每天被數百萬人使用的軟件。你還期望什麼？
          </div>
          <div>
            <Link to="/ethos" className="text-gray-500 font-bold underline">
              了解我們的理念
            </Link>{' '}
            來瞭解我們如何計劃長期堅持下去（並保持相關性）。
          </div>
        </div>
      </div>
    </div>
  )
}
