import { Routes, Route } from 'react-router-dom'
import ToastContainer from './components/Toast/ToastContainer'
import Home from './Home'
import Header from './components/Header'
import { useState } from 'react'

function App() {
  const [activeComponent, setActiveComponent] = useState(null)

  return (
    <>
      <Header
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
      <Routes>
        <Route
          path="/"
          element={<Home setActiveComponent={setActiveComponent} />}
        />
        <Route path="/Toast" element={<ToastContainer />} />
      </Routes>
    </>
  )
}

export default App
