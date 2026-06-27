import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import FloatingActions from './components/FloatingActions'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Team from './pages/Team'
import KnowledgeBank from './pages/KnowledgeBank'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './App.css'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/knowledge" element={<KnowledgeBank />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
