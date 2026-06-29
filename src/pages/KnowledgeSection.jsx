import { useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { FiArrowUpRight, FiArrowRight, FiCheckCircle, FiDownload, FiMail } from 'react-icons/fi'
import useReveal from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import KnowledgeNav, { KB_SECTIONS } from '../components/KnowledgeNav'
import Calculators from '../components/Calculators'
import RateCard from '../components/RateCard'
import ItrSelector from '../components/ItrSelector'
import FinancialsGuide from '../components/FinancialsGuide'
import {
  bulletins,
  linkGroups,
  actGroups,
  ruleGroups,
  formGroups,
  dueDateGroups,
} from '../data/knowledge'
import { keySectionGroups } from '../data/keySections'
import { firm } from '../data/firm'

const META = {
  calculators: {
    title: 'Financial Calculators',
    lead: 'Quick, interactive estimates for GST, loan EMIs, income tax, HRA and gratuity.',
  },
  'rate-card': {
    title: 'Rate Card',
    lead: 'TDS rates, GST slabs, income-tax slabs, ROC fees and more — all in one place.',
  },
  'due-dates': {
    title: 'Compliance Calendar',
    lead: 'Key recurring statutory due dates for Income Tax, TDS, GST, ROC and payroll.',
  },
  'itr-selector': {
    title: 'Which ITR applies to you?',
    lead: 'Answer a few quick questions and we’ll point you to the right income-tax return form.',
  },
  'key-sections': {
    title: 'Key Sections — in plain English',
    lead: 'The most-referenced sections of the Income Tax, GST and Companies Acts, explained simply.',
  },
  'read-financials': {
    title: 'How to read your financial statements',
    lead: 'A plain-language guide to your P&L, balance sheet and cash flow — written for business owners.',
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
  const [subStatus, setSubStatus] = useState('idle') // idle | sent

  const subscribe = async (e) => {
    e.preventDefault()
    const email = new FormData(e.target).get('email')
    try {
      await fetch(`https://formsubmit.co/ajax/${firm.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, _subject: 'Compliance calendar subscription — JBMJ' }),
      })
    } catch { /* still show confirmation */ }
    e.target.reset()
    setSubStatus('sent')
  }

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
            {section === 'calculators' && <Calculators />}

            {section === 'rate-card' && <RateCard />}

            {section === 'itr-selector' && <ItrSelector />}

            {section === 'read-financials' && <FinancialsGuide />}

            {section === 'key-sections' && (
              <div className="kb-groups">
                {keySectionGroups.map((g) => (
                  <div key={g.group} className="kb-group reveal">
                    <h3 className="kb-group__title">{g.group}</h3>
                    <div className="keysec-list">
                      {g.items.map((s) => (
                        <article key={s.section} className="keysec">
                          <span className="keysec__no">{s.section}</span>
                          <div className="keysec__body">
                            <h4>{s.title}</h4>
                            <p>{s.plain}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
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

            {section === 'due-dates' && (
              <div className="kb-groups">
                <div className="duedate-actions reveal">
                  <button className="btn btn--navy" onClick={() => window.print()}>
                    <FiDownload /> Download / Print calendar
                  </button>
                  {subStatus === 'sent' ? (
                    <p className="duedate-sub__done">
                      <FiCheckCircle /> Thanks — we’ll email you the calendar.
                    </p>
                  ) : (
                    <form className="duedate-sub" onSubmit={subscribe}>
                      <FiMail />
                      <input type="email" name="email" required placeholder="Email me the calendar" />
                      <button type="submit" className="btn btn--gold">Subscribe</button>
                    </form>
                  )}
                </div>
                {dueDateGroups.map((g) => (
                  <div key={g.group} className="kb-group reveal">
                    <h3 className="kb-group__title">{g.group}</h3>
                    <div className="duedate-list">
                      {g.items.map((d, i) => (
                        <div key={i} className="duedate-row">
                          <span className="duedate-row__date">{d.date}</span>
                          <div className="duedate-row__body">
                            <span className="duedate-row__tag">{d.tag}</span>
                            <h4>{d.title}</h4>
                            <p>{d.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {section === 'links' && <GroupedLinks groups={linkGroups} itemsKey="links" withDesc />}
            {section === 'acts' && <GroupedLinks groups={actGroups} withDesc />}
            {section === 'rules' && <GroupedLinks groups={ruleGroups} withDesc />}
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
