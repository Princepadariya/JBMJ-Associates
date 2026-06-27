import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { testimonials } from '../data/testimonials'

/*
  Continuously moving testimonial marquee.
  The list is duplicated once so the CSS translateX(-50%) loop is seamless.
  Scrolling pauses on hover and is disabled under prefers-reduced-motion.
*/
export default function Testimonials() {
  const loop = [...testimonials, ...testimonials]

  return (
    <div className="testi-marquee" aria-label="Client testimonials">
      <div className="testi-track">
        {loop.map((t, i) => (
          <figure className="testi-card" key={i} aria-hidden={i >= testimonials.length}>
            <FaQuoteLeft className="testi-card__quote" />
            <div className="testi-card__stars" aria-label={`${t.rating} out of 5`}>
              {Array.from({ length: t.rating || 5 }).map((_, s) => (
                <FaStar key={s} />
              ))}
            </div>
            <blockquote>{t.quote}</blockquote>
            <figcaption>
              <span className="testi-card__avatar">{t.name.charAt(0)}</span>
              <span className="testi-card__meta">
                <strong>{t.name}</strong>
                <small>
                  {t.role}
                  {t.location ? ` · ${t.location}` : ''}
                </small>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
