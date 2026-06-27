import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiArrowRight, FiCalendar } from 'react-icons/fi'
import useReveal from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Faq from '../components/Faq'
import { dueDates } from '../data/dueDates'
import { usefulLinks } from '../data/usefulLinks'

export default function Resources() {
  useReveal()
  return (
    <>
      <PageHero
        eyebrow="Knowledge Center"
        title="Resources, due dates & useful links"
        lead="A handy reference for recurring compliance deadlines and quick access to official government portals — curated by our team."
        crumb="Resources"
      />

      {/* Compliance calendar */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Compliance Calendar"
            title="Key recurring due dates"
            lead="Indicative deadlines for common filings. Dates can change by notification — please confirm applicability with us before relying on them."
          />
          <div className="duedates-grid">
            {dueDates.map((d, i) => (
              <article key={i} className="duedate-card reveal">
                <div className="duedate-card__date">
                  <FiCalendar />
                  <span className="duedate-card__day">{d.day}</span>
                  <span className="duedate-card__cycle">{d.cycle}</span>
                </div>
                <div className="duedate-card__body">
                  <span className="duedate-card__tag">{d.tag}</span>
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="duedates-note reveal">
            Disclaimer: The above is general information, not professional advice.
            Statutory due dates are subject to change by the relevant authorities.
          </p>
        </div>
      </section>

      {/* Useful links */}
      <section className="section process-sec">
        <div className="container">
          <SectionHeading
            eyebrow="Useful Links"
            title="Official portals at your fingertips"
            lead="Direct links to the government and regulatory portals you’re most likely to need."
          />
          <div className="links-grid">
            {usefulLinks.map((l) => (
              <a
                key={l.title}
                className="link-card reveal"
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h3>{l.title}</h3>
                  <p>{l.desc}</p>
                </div>
                <FiArrowUpRight className="link-card__arrow" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container faq-wrap">
          <SectionHeading
            center
            eyebrow="FAQ"
            title="Frequently asked questions"
            lead="Quick answers to what clients ask us most. Need something specific? Just reach out."
          />
          <Faq />
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner reveal">
          <div>
            <span className="eyebrow">Still have questions?</span>
            <h2 className="cta-band__title">Talk to a professional, not a chatbot.</h2>
            <p className="cta-band__text">
              Our partners are happy to clarify any compliance or advisory query.
            </p>
          </div>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--gold">
              Get in touch <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
