import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiArrowRight, FiChevronDown } from 'react-icons/fi'
import Logo from './Logo'

const knowledgeItems = [
  { to: '/knowledge/calculators', label: 'Calculators' },
  { to: '/knowledge/bulletins', label: 'Bulletins' },
  { to: '/knowledge/links', label: 'Links' },
  { to: '/knowledge/acts', label: 'Acts' },
  { to: '/knowledge/rules', label: 'Rules' },
  { to: '/knowledge/forms', label: 'Forms' },
]

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About us' },
  { to: '/team', label: 'Our People' },
  { to: '/services', label: 'Services' },
  { to: '/knowledge', label: 'Knowledge Bank', children: knowledgeItems },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [subOpen, setSubOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setSubOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="container nav__inner">
        <Logo variant={scrolled ? 'dark' : 'light'} />

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) =>
            l.children ? (
              <div className="nav__item nav__item--has-sub" key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
                >
                  {l.label} <FiChevronDown className="nav__caret" />
                </NavLink>
                <div className="nav__dropdown">
                  {l.children.map((c) => (
                    <NavLink key={c.to} to={c.to} className="nav__dropdown-link">
                      {c.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
              >
                {l.label}
              </NavLink>
            )
          )}
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
          {links.map((l) =>
            l.children ? (
              <div key={l.to} className="nav__drawer-group">
                <button
                  className="nav__drawer-link nav__drawer-toggle"
                  aria-expanded={subOpen}
                  onClick={() => setSubOpen((v) => !v)}
                >
                  {l.label}
                  <FiChevronDown className={`nav__caret ${subOpen ? 'is-open' : ''}`} />
                </button>
                {subOpen && (
                  <div className="nav__drawer-sub">
                    {l.children.map((c) => (
                      <NavLink key={c.to} to={c.to} className="nav__drawer-sublink">
                        {c.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => `nav__drawer-link ${isActive ? 'is-active' : ''}`}
              >
                {l.label}
              </NavLink>
            )
          )}
        </nav>
        <NavLink to="/contact" className="btn btn--gold">
          Book a Consultation <FiArrowRight />
        </NavLink>
      </div>
    </header>
  )
}
