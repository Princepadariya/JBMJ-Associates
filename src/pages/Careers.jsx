import { Link } from 'react-router-dom'
import {
  FiArrowRight,
  FiTrendingUp,
  FiBookOpen,
  FiUsers,
  FiAward,
  FiMail,
  FiMapPin,
  FiClock,
} from 'react-icons/fi'
import useReveal from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { firm } from '../data/firm'

const perks = [
  {
    icon: FiBookOpen,
    title: 'Real, varied exposure',
    text: 'Work across audit, direct & indirect tax, corporate law and advisory — not just one narrow desk.',
  },
  {
    icon: FiUsers,
    title: 'Learn from the partners',
    text: 'Direct mentorship from qualified CAs and CSs who are invested in your growth.',
  },
  {
    icon: FiTrendingUp,
    title: 'Grow your career',
    text: 'Clear progression, meaningful responsibility early, and support for your professional exams.',
  },
  {
    icon: FiAward,
    title: 'Quality-first culture',
    text: 'A practice that values integrity, diligence and doing the work right — every time.',
  },
]

const openings = [
  {
    role: 'CA Article Assistant (Articleship)',
    type: 'Articleship',
    location: 'Rajkot',
    desc: 'For IPCC / Intermediate cleared students seeking practical training across audit, taxation and compliance.',
  },
  {
    role: 'Audit & Tax Executive',
    type: 'Full-time',
    location: 'Rajkot',
    desc: 'Semi-qualified / B.Com / M.Com candidates with exposure to accounting, GST and income-tax work.',
  },
  {
    role: 'Qualified Chartered Accountant',
    type: 'Full-time',
    location: 'Rajkot',
    desc: 'Recently qualified CAs looking to take ownership of assignments in audit, tax and advisory.',
  },
]

export default function Careers() {
  useReveal()
  return (
    <>
      <PageHero
        eyebrow="Opportunity / Careers"
        title="Build your career with JBMJ & Associates LLP"
        lead="We’re always looking for sharp, sincere people who want to do meaningful professional work. If that sounds like you, we’d love to hear from you."
        crumb="Careers"
      />

      {/* Why join */}
      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Why Join Us"
            title="A place to learn, contribute and grow"
            lead="Working here means broad exposure, genuine mentorship and a culture that takes quality seriously."
          />
          <div className="why-grid why-grid--light">
            {perks.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.title} className="perk-card reveal">
                  <span className="perk-card__icon"><Icon /></span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="section process-sec">
        <div className="container">
          <SectionHeading
            eyebrow="Current Openings"
            title="Roles we’re hiring for"
            lead="Don’t see an exact match? We still welcome strong applications — send us your details and we’ll be in touch."
          />
          <div className="openings">
            {openings.map((o) => (
              <article key={o.role} className="opening reveal">
                <div className="opening__main">
                  <h3>{o.role}</h3>
                  <p>{o.desc}</p>
                  <div className="opening__tags">
                    <span><FiClock /> {o.type}</span>
                    <span><FiMapPin /> {o.location}</span>
                  </div>
                </div>
                <a href={firm.emailHref} className="btn btn--outline opening__apply">
                  Apply <FiArrowRight />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="cta-band">
        <div className="container cta-band__inner reveal">
          <div>
            <span className="eyebrow">How to apply</span>
            <h2 className="cta-band__title">Send us your resume</h2>
            <p className="cta-band__text">
              Email your CV with a short note about the role you’re interested in.
              We review every application personally.
            </p>
          </div>
          <div className="cta-band__actions">
            <a href={`mailto:${firm.email}?subject=Career%20enquiry%20—%20JBMJ%20%26%20Associates`} className="btn btn--gold">
              <FiMail /> {firm.email}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
