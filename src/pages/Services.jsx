import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import useReveal from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { services } from '../data/services'

export default function Services() {
  useReveal()
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Full-spectrum financial, tax & compliance services"
        lead="One team for audit, taxation, GST, corporate law and advisory — delivered with precision and a partner’s attention to detail."
        crumb="Services"
      />

      <section className="section">
        <div className="container">
          <div className="services-detail">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <article key={s.id} className="service-row reveal" id={s.id}>
                  <div className="service-row__index">
                    <span className="service-row__icon"><Icon /></span>
                    <span className="service-row__num">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="service-row__main">
                    <h3 className="service-row__title">{s.title}</h3>
                    <p className="service-row__summary">{s.summary}</p>
                  </div>
                  <ul className="service-row__points">
                    {s.points.map((p) => (
                      <li key={p}><FiCheck /> {p}</li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section why-sec section--tight">
        <div className="container engage">
          <SectionHeading
            center
            light
            eyebrow="Not sure where to start?"
            title="Tell us about your business — we’ll map the right engagement"
          />
          <div className="engage__actions reveal">
            <Link to="/contact" className="btn btn--gold">
              Talk to a partner <FiArrowRight />
            </Link>
            <Link to="/team" className="btn btn--ghost">
              Meet the team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
