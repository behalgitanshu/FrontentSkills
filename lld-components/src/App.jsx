import './App.css'
import { Routes, Route } from 'react-router-dom'
import ToastContainer from './components/Toast/ToastContainer'
import Home from './Home'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Toast" element={<ToastContainer />} />
      </Routes>
    </>
  )
}

export default App
