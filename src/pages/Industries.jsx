import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import useReveal from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { industries } from '../data/industries'

export default function Industries() {
  useReveal()
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Sector experience that shapes better advice"
        lead="Every industry has its own compliance rhythm and pressures. Our advice is grounded in the realities of the sectors we serve across Gujarat."
        crumb="Industries"
      />

      <section className="section">
        <div className="container">
          <div className="ind-grid">
            {industries.map((ind) => {
              const Icon = ind.icon
              return (
                <article key={ind.id} className="ind-card reveal">
                  <span className="ind-card__icon"><Icon /></span>
                  <h3 className="ind-card__title">{ind.label}</h3>
                  <p className="ind-card__desc">{ind.desc}</p>
                  <ul className="ind-card__list">
                    {ind.services.map((s) => (
                      <li key={s}><FiCheck /> {s}</li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner reveal">
          <div>
            <span className="eyebrow">Don’t see your sector?</span>
            <h2 className="cta-band__title">We work with businesses of every kind.</h2>
            <p className="cta-band__text">
              Whatever your industry, our advice is grounded in real compliance
              and finance experience.
            </p>
          </div>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--gold">
              Talk to us <FiArrowRight />
            </Link>
            <Link to="/services" className="btn btn--ghost">
              Browse services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
