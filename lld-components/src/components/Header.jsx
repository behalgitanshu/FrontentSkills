import { Link, useLocation } from 'react-router-dom'

function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header className="flex items-center px-6 py-4 border-b border-gray-200 gap-4">
      {!isHome && (
        <Link
          to="/"
          className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          ← Back
        </Link>
      )}
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-semibold text-gray-900">
          Gitanshu's React Playground
        </h1>
      </div>
    </header>
  )
}

export default Header
