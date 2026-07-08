import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

function ScrollProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setPct(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])
  return <div className="scroll-progress" style={{ transform: `scaleX(${pct / 100})` }} aria-hidden="true" />
}
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import RouteMeta from './components/RouteMeta'
import FloatingActions from './components/FloatingActions'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Team from './pages/Team'
import Industries from './pages/Industries'
import KnowledgeBank from './pages/KnowledgeBank'
import KnowledgeSection from './pages/KnowledgeSection'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Faqs from './pages/Faqs'
import Privacy from './pages/Privacy'
import Articles from './pages/Articles'
import NotFound from './pages/NotFound'
import './App.css'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollToTop />
      <RouteMeta />
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/knowledge" element={<KnowledgeBank />} />
          <Route path="/knowledge/:section" element={<KnowledgeSection />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:category" element={<Articles />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
