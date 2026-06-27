import { useParams, Navigate, Link } from 'react-router-dom'
import { FiArrowUpRight, FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import useReveal from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import KnowledgeNav, { KB_SECTIONS } from '../components/KnowledgeNav'
import Calculators from '../components/Calculators'
import {
  bulletins,
  linkGroups,
  actGroups,
  ruleGroups,
  formGroups,
  calculatorList,
} from '../data/knowledge'

const META = {
  calculators: {
    title: 'Financial Calculators',
    lead: 'Quick, interactive estimates for GST, loan EMIs, income tax, HRA and gratuity.',
  },
  bulletins: {
    title: 'Bulletins & Updates',
    lead: 'Recent notes and reminders from our desk on tax, GST and corporate compliance.',
  },
  links: {
    title: 'Useful Links',
    lead: 'Direct access to official government and regulatory portals.',
  },
  acts: {
    title: 'Acts',
    lead: 'Key legislation governing taxation, corporate and other laws.',
  },
  rules: {
    title: 'Rules',
    lead: 'The rules framed under the principal Acts.',
  },
  forms: {
    title: 'Forms',
    lead: 'Commonly required statutory forms and where to access them.',
  },
}

const fmtDate = (d) =>
  new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })

/* Grouped list of external links (used by Links / Acts / Rules / Forms) */
function GroupedLinks({ groups, itemsKey = 'items', withDesc }) {
  return (
    <div className="kb-groups">
      {groups.map((g) => (
        <div key={g.group} className="kb-group reveal">
          <h3 className="kb-group__title">{g.group}</h3>
          <div className="kb-list">
            {(g[itemsKey] || g.links).map((l) => (
              <a key={l.title} className="kb-list__item" href={l.href} target="_blank" rel="noopener noreferrer">
                <div>
                  <h4>{l.title}</h4>
                  {withDesc && l.desc && <p>{l.desc}</p>}
                </div>
                <FiArrowUpRight className="kb-list__arrow" />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function KnowledgeSection() {
  const { section } = useParams()
  useReveal([section])

  const valid = KB_SECTIONS.some((s) => s.id === section)
  if (!valid) return <Navigate to="/knowledge" replace />

  const meta = META[section]

  return (
    <>
      <PageHero
        eyebrow="Knowledge Bank / Insights"
        title={meta.title}
        lead={meta.lead}
        crumb={meta.title}
      />

      <section className="section">
        <div className="container">
          <KnowledgeNav />

          <div className="kb-content">
            {section === 'calculators' && (
              <>
                <Calculators />
                <div className="kb-more">
                  <h3 className="kb-group__title">More calculators</h3>
                  <div className="kb-list">
                    {calculatorList.map((c) => (
                      <div key={c.id} className={`kb-calc-item ${c.live ? 'is-live' : ''}`}>
                        <div>
                          <h4>{c.title}</h4>
                          <p>{c.desc}</p>
                        </div>
                        <span className="kb-calc-item__badge">
                          {c.live ? <><FiCheckCircle /> Live</> : 'On request'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {section === 'bulletins' && (
              <div className="kb-bulletins">
                {bulletins.map((b, i) => (
                  <article key={i} className="kb-bulletin reveal">
                    <div className="kb-bulletin__meta">
                      <span className="kb-bulletin__tag">{b.tag}</span>
                      <time>{fmtDate(b.date)}</time>
                    </div>
                    <h3>{b.title}</h3>
                    <p>{b.desc}</p>
                  </article>
                ))}
              </div>
            )}

            {section === 'links' && <GroupedLinks groups={linkGroups} itemsKey="links" withDesc />}
            {section === 'acts' && <GroupedLinks groups={actGroups} />}
            {section === 'rules' && <GroupedLinks groups={ruleGroups} />}
            {section === 'forms' && <GroupedLinks groups={formGroups} withDesc />}
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
