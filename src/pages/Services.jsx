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
              <div key={cat.id} className="svc-cat reveal" id={cat.id} style={{ '--svc-accent': cat.accent }}>
                <div className="svc-cat__head">
                  <span className="svc-cat__icon"><Icon /></span>
                  <div className="svc-cat__head-text">
                    <span className="svc-cat__kicker">
                      {String(i + 1).padStart(2, '0')} — Service Category
                    </span>
                    <h2 className="svc-cat__title">{cat.category}</h2>
                    <p className="svc-cat__summary">{cat.summary}</p>
                  </div>
                </div>

                <div className="svc-cat__items">
                  {cat.items.map((item, j) => (
                    <article key={item.title} className="svc-item">
                      <h3 className="svc-item__title">{item.title}</h3>
                      <p className="svc-item__desc">{item.desc}</p>
                      {item.keyDeliverables && (
                        <ul className="svc-item__deliverables">
                          {item.keyDeliverables.slice(0, 3).map((d, k) => (
                            <li key={k}>{d}</li>
                          ))}
                        </ul>
                      )}
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

      <section className="cta-band">
        <div className="container cta-band__inner reveal">
          <div>
            <span className="eyebrow">Not sure where to start?</span>
            <h2 className="cta-band__title">
              Tell us about your business — we’ll map the right engagement.
            </h2>
            <p className="cta-band__text">
              A short, confidential conversation is all it takes to scope the
              support you need.
            </p>
          </div>
          <div className="cta-band__actions">
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
