import { useParams, Navigate, Link } from 'react-router-dom'
import { FiArrowRight, FiArrowLeft, FiCheck } from 'react-icons/fi'
import useReveal from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { serviceCategories } from '../data/services'

const steps = [
  { n: '01', title: 'Understand', text: 'We learn your business, structure and objectives in a focused discussion.' },
  { n: '02', title: 'Assess', text: 'A clear review of your current position, risks and requirements.' },
  { n: '03', title: 'Execute', text: 'Hands-on delivery — filings, audits, documentation and advisory done right.' },
  { n: '04', title: 'Support', text: 'Ongoing guidance so you stay compliant and ahead all year round.' },
]

export default function ServiceDetail() {
  const { slug } = useParams()
  useReveal([slug])

  const cat = serviceCategories.find((c) => c.id === slug)
  if (!cat) return <Navigate to="/services" replace />

  const Icon = cat.icon
  const idx = serviceCategories.findIndex((c) => c.id === slug)
  const next = serviceCategories[(idx + 1) % serviceCategories.length]

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={cat.category}
        lead={cat.summary}
        crumb={cat.category}
      />

      <section className="section">
        <div className="container svc-detail">
          <div className="svc-detail__main">
            <span className="svc-detail__icon"><Icon /></span>
            <p className="svc-detail__intro reveal">{cat.intro}</p>

            <h2 className="svc-detail__h2 reveal">What this includes</h2>
            <div className="svc-detail__items">
              {cat.items.map((item) => (
                <article key={item.title} className="svc-item reveal">
                  <h3 className="svc-item__title">{item.title}</h3>
                  <p className="svc-item__desc">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="svc-detail__aside reveal">
            <h3 className="svc-detail__aside-title">Who this is for</h3>
            <ul className="svc-detail__who">
              {cat.who.map((w) => (
                <li key={w}><FiCheck /> {w}</li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn--gold svc-detail__cta">
              Discuss your requirement <FiArrowRight />
            </Link>
            <Link to="/services" className="svc-detail__back">
              <FiArrowLeft /> All services
            </Link>
          </aside>
        </div>
      </section>

      {/* Process */}
      <section className="section process-sec section--tight">
        <div className="container">
          <SectionHeading
            eyebrow="How We Work"
            title="A clear, structured engagement"
          />
          <div className="process-grid">
            {steps.map((s) => (
              <div key={s.n} className="process-card reveal">
                <span className="process-card__n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner reveal">
          <div>
            <span className="eyebrow">Next</span>
            <h2 className="cta-band__title">Explore {next.category}</h2>
            <p className="cta-band__text">{next.summary}</p>
          </div>
          <div className="cta-band__actions">
            <Link to={`/services/${next.id}`} className="btn btn--gold">
              View {next.category} <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
