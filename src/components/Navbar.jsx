import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi'
import Logo from './Logo'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Our Team' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Logo variant={scrolled ? 'dark' : 'light'} />

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `nav__link ${isActive ? 'is-active' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/contact" className="btn btn--gold nav__cta">
          Book a Consultation <FiArrowRight />
        </NavLink>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div className={`nav__drawer ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `nav__drawer-link ${isActive ? 'is-active' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <NavLink to="/contact" className="btn btn--gold">
          Book a Consultation <FiArrowRight />
        </NavLink>
      </div>
    </header>
  )
}
