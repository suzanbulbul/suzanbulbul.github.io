import { motion } from 'framer-motion'
import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

const PortfolioPage = () => {
  const { lang } = useParams<{ lang: string }>()
  const { i18n } = useTranslation()
  
  useEffect(() => {
    if (lang && ['tr', 'en'].includes(lang)) {
      i18n.changeLanguage(lang)
      document.documentElement.lang = lang
    }
  }, [lang, i18n])

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Background Animation */}
      <div className="fixed inset-0 background-animate -z-10"></div>
      
      {/* Floating Blobs */}
      <div className="blob top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="blob top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="blob bottom-10 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      
      <Header />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </motion.main>
      
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/tr" replace />} />
      <Route path="/:lang" element={<PortfolioPage />} />
    </Routes>
  )
}

export default App 