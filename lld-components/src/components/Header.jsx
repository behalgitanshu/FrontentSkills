import { Link, useLocation } from 'react-router-dom'

function Header({ activeComponent, setActiveComponent }) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header className="flex-col items-center px-6 py-4 border-b border-gray-200 gap-4">
      <div className="flex items-center gap-4">
        {!isHome && (
          <Link
            to="/"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            onClick={() => setActiveComponent(null)}
          >
            ← Back
          </Link>
        )}
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-semibold text-gray-900">
            Gitanshu's React Playground
          </h1>
        </div>
      </div>
      <div className="ml-auto w-full flex items-center gap-4">
        {activeComponent && (
          <h2 className="w-full px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-bold">
            {`${activeComponent} Container`}
          </h2>
        )}
      </div>
    </header>
  )
}

export default Header
