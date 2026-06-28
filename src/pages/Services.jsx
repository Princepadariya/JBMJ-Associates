import { Link } from 'react-router-dom'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import useReveal from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { serviceCategories } from '../data/services'

export default function Services() {
  useReveal()
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="End-to-end services for compliance, assurance & growth"
        lead="From audit and taxation to accounting, incorporation and project finance — a single, dependable team across every category your business needs."
        crumb="Services"
      />

      <section className="section">
        <div className="container">
          {serviceCategories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <div key={cat.id} className="svc-cat reveal" id={cat.id}>
                <div className="svc-cat__head">
                  <span className="svc-cat__icon"><Icon /></span>
                  <div>
                    <span className="svc-cat__kicker">
                      Service Category {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="svc-cat__title">{cat.category}</h2>
                    <p className="svc-cat__summary">{cat.summary}</p>
                  </div>
                </div>

                <div className="svc-cat__items">
                  {cat.items.map((item) => (
                    <article key={item.title} className="svc-item">
                      <h3 className="svc-item__title">{item.title}</h3>
                      <p className="svc-item__desc">{item.desc}</p>
                    </article>
                  ))}
                </div>

                <Link to={`/services/${cat.id}`} className="svc-cat__more">
                  View {cat.category} in detail <FiArrowRight />
                </Link>
              </div>
            )
          })}
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
