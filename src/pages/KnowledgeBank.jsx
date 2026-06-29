import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi'
import useReveal from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import { KB_SECTIONS } from '../components/KnowledgeNav'

const blurbs = {
  calculators: 'Interactive GST, EMI, income-tax, HRA and gratuity calculators.',
  'rate-card': 'TDS, GST, income-tax, ROC and stamp-duty rates — all in one place.',
  'due-dates': 'Key recurring deadlines for Income Tax, TDS, GST, ROC and payroll.',
  'itr-selector': 'Answer a few questions to find the right ITR form for you.',
  'key-sections': 'Most-referenced Act sections explained in plain English.',
  'read-financials': 'A plain-language guide to reading your financial statements.',
  bulletins: 'Timely notes and reminders on tax, GST and corporate compliance.',
  links: 'Quick access to official government and regulatory portals.',
  acts: 'Key legislation governing taxation and corporate law.',
  rules: 'The rules framed under the principal Acts.',
  forms: 'Commonly required statutory forms and where to access them.',
}

export default function KnowledgeBank() {
  useReveal()
  return (
    <>
      <PageHero
        eyebrow="Knowledge Bank / Insights"
        title="Tools, updates and references — all in one place"
        lead="Handy calculators, the latest bulletins, and quick access to the Acts, Rules, Forms and official portals you need most."
        crumb="Knowledge Bank"
      />

      <section className="section">
        <div className="container">
          <div className="kb-cards">
            {KB_SECTIONS.map((s) => {
              const Icon = s.icon
              return (
                <Link key={s.id} to={`/knowledge/${s.id}`} className="kb-card reveal">
                  <span className="kb-card__icon"><Icon /></span>
                  <h3>{s.label}</h3>
                  <p>{blurbs[s.id]}</p>
                  <span className="kb-card__link">Open {s.label} <FiArrowUpRight /></span>
                </Link>
              )
            })}
          </div>

          <p className="kb-disclaimer">
            Disclaimer: Information in the Knowledge Bank is for general reference
            only and may change by government notification. Please confirm
            applicability with us before acting on it.
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner reveal">
          <div>
            <span className="eyebrow">Need a hand?</span>
            <h2 className="cta-band__title">Get expert help interpreting the rules.</h2>
            <p className="cta-band__text">
              Our team translates compliance into clear, actionable steps for your business.
            </p>
          </div>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--gold">
              Talk to us <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
