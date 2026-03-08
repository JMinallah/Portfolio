import './App.css'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 650,
      once: false,
      easing: 'ease-out-cubic',
      offset: 60,
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><Home/></MainLayout>} />
        <Route path="/projects" element={<MainLayout><Projects/></MainLayout>} />
        <Route path="/about" element={<MainLayout><About/></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact/></MainLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
