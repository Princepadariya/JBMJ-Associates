import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { faqs } from '../data/faqs'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <div className="faq reveal">
      {faqs.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={i} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
            <button
              className="faq__q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span>{f.q}</span>
              <span className="faq__icon">{isOpen ? <FiMinus /> : <FiPlus />}</span>
            </button>
            <div className="faq__a" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
              <div className="faq__a-inner">
                <p>{f.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
