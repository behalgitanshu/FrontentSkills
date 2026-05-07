import { Link } from 'react-router-dom'

const CONSTANTS = {
  components: ['Tic Tac Toe', 'Toast'],
  linkClassname:
    'px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors',
}

function Home({ setActiveComponent }) {
  return (
    <>
      <section id="center">
        <nav className="grid grid-cols-3 p-4 gap-4 mt-6">
          {CONSTANTS.components.map((component) => (
            <Link
              key={component}
              to={`/${component}`}
              className={CONSTANTS.linkClassname}
              onClick={
                setActiveComponent ? () => setActiveComponent(component) : null
              }
            >
              {component}
            </Link>
          ))}
        </nav>
      </section>
    </>
  )
}

export default Home
