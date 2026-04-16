import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Process from './sections/Process'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import ChatBot from './components/ChatBot'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <div className={darkMode ? 'dark' : ''} style={{ minHeight: '100vh' }}>
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>
      {!loading && (
        <>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main>
            <Hero />
            <About />
            <Services />
            <Process />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <ChatBot />
          <ScrollToTop />
        </>
      )}
    </div>
  )
}
