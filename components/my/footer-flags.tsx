import { Toilet, Flag, Flame, Angry, Smartphone, GitPullRequestCreateArrow } from "lucide-react"

export function FooterFlags({ copyrightHref = "/" }) {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <div className="max-w-3xl p-6 mt-3">
        <div className="flex gap-4">
          {copyrightHref === "/" && (
            <a href="/" target="_self" className="text-blue-500 hover:text-blue-800">
              <Flag size={24} />
            </a>
          )}
          <a href="https://www.mapplerk3.com/minjumap" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-800">
            <Toilet size={24} />
          </a>
          <a href="https://candle.btsroad.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-800">
            <Flame size={24} />
          </a>
          <a href="https://www.yna.co.kr/view/AKR20241212062700001?section=politics/all" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-800">
            <Angry size={24} />
          </a>
          <a href="https://nodong.org/notice/7872937" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-800">
            <Smartphone size={24} />
          </a>
          <a href="https://github.com/dMario24/flag123" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-800">
            <GitPullRequestCreateArrow size={24} />
          </a>
        </div>

        <p className="text-sm text-gray-600 mt-3 text-center">
          &copy; 12.3, <a href={copyrightHref} className="text-blue-500 hover:underline">어디서 도대체 무얼</a>
        </p>
      </div>
    </footer>
  )
}