import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { firm } from '../data/firm'

export default function FloatingActions() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fab">
      <a
        className="fab__btn fab__btn--wa"
        href={`https://wa.me/${firm.whatsapp}?text=${encodeURIComponent(
          'Hello JBMJ & Associates, I would like to know more about your services.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
        <span className="fab__tip">Chat with us</span>
      </a>
      <button
        className={`fab__btn fab__btn--top ${show ? 'is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <FiArrowUp />
      </button>
    </div>
  )
}
