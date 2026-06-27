import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
  FiArrowUpRight,
  FiArrowRight,
  FiBookOpen,
  FiBell,
  FiLink,
  FiFileText,
  FiFile,
  FiGrid,
} from 'react-icons/fi'
import useReveal from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import Calculators from '../components/Calculators'
import { bulletins, acts, rules, forms } from '../data/knowledge'
import { usefulLinks } from '../data/usefulLinks'

const TABS = [
  { id: 'calculators', label: 'Calculators', icon: FiGrid },
  { id: 'bulletins', label: 'Bulletins', icon: FiBell },
  { id: 'links', label: 'Links', icon: FiLink },
  { id: 'acts', label: 'Acts', icon: FiBookOpen },
  { id: 'rules', label: 'Rules', icon: FiFileText },
  { id: 'forms', label: 'Forms', icon: FiFile },
]

const fmtDate = (d) =>
  new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })

function LinkList({ items, withDesc }) {
  return (
    <div className="kb-list">
      {items.map((l) => (
        <a key={l.title} className="kb-list__item" href={l.href} target="_blank" rel="noopener noreferrer">
          <div>
            <h3>{l.title}</h3>
            {withDesc && l.desc && <p>{l.desc}</p>}
          </div>
          <FiArrowUpRight className="kb-list__arrow" />
        </a>
      ))}
    </div>
  )
}

export default function KnowledgeBank() {
  const location = useLocation()
  const [active, setActive] = useState('calculators')
  useReveal([active])

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (TABS.some((t) => t.id === hash)) setActive(hash)
  }, [location.hash])

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
          {/* Tab bar */}
          <div className="kb-tabs" role="tablist">
            {TABS.map((t) => {
              const Icon = t.icon
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={active === t.id}
                  className={`kb-tab ${active === t.id ? 'is-active' : ''}`}
                  onClick={() => setActive(t.id)}
                >
                  <Icon /> {t.label}
                </button>
              )
            })}
          </div>

          {/* Panels */}
          <div className="kb-panel">
            {active === 'calculators' && (
              <div className="reveal">
                <h2 className="kb-panel__title">Financial Calculators</h2>
                <p className="kb-panel__lead">Quick estimates for GST, loan EMIs and income tax.</p>
                <Calculators />
              </div>
            )}

            {active === 'bulletins' && (
              <div className="reveal">
                <h2 className="kb-panel__title">Bulletins & Updates</h2>
                <p className="kb-panel__lead">Recent notes and reminders from our desk.</p>
                <div className="kb-bulletins">
                  {bulletins.map((b, i) => (
                    <article key={i} className="kb-bulletin">
                      <div className="kb-bulletin__meta">
                        <span className="kb-bulletin__tag">{b.tag}</span>
                        <time>{fmtDate(b.date)}</time>
                      </div>
                      <h3>{b.title}</h3>
                      <p>{b.desc}</p>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {active === 'links' && (
              <div className="reveal">
                <h2 className="kb-panel__title">Useful Links</h2>
                <p className="kb-panel__lead">Direct access to official government & regulatory portals.</p>
                <LinkList items={usefulLinks} withDesc />
              </div>
            )}

            {active === 'acts' && (
              <div className="reveal">
                <h2 className="kb-panel__title">Acts</h2>
                <p className="kb-panel__lead">Key legislation governing taxation and corporate compliance.</p>
                <LinkList items={acts} />
              </div>
            )}

            {active === 'rules' && (
              <div className="reveal">
                <h2 className="kb-panel__title">Rules</h2>
                <p className="kb-panel__lead">The rules framed under the principal Acts.</p>
                <LinkList items={rules} />
              </div>
            )}

            {active === 'forms' && (
              <div className="reveal">
                <h2 className="kb-panel__title">Forms</h2>
                <p className="kb-panel__lead">Commonly required statutory forms and where to access them.</p>
                <LinkList items={forms} withDesc />
              </div>
            )}
          </div>

          <p className="kb-disclaimer">
            Disclaimer: Information here is for general reference only and may change
            by government notification. Please confirm applicability with us before
            acting on it.
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
