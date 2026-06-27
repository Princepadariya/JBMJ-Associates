import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Let the target page render, then scroll to the anchored section.
      const id = hash.replace('#', '')
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 90
          window.scrollTo({ top, behavior: 'smooth' })
          return
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      })
      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
