import { Routes, Route } from 'react-router-dom'
import ToastContainer from './components/Toast/ToastContainer'
import Home from './Home'
import Header from './components/Header'
import { useState } from 'react'
import TicTacToe from './components/TicTacToe/TicTacToe'

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
        <Route path="/Tic Tac Toe" element={<TicTacToe />} />
      </Routes>
    </>
  )
}

export default App
