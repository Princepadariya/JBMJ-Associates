import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheck, FiTarget, FiEye, FiHeart } from 'react-icons/fi'
import useReveal from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { team } from '../data/team'

const pillars = [
  {
    icon: FiTarget,
    title: 'Our Mission',
    text: 'To deliver end-to-end, insight-led financial and compliance services with objectivity and integrity — empowering our clients to make confident, well-informed decisions.',
  },
  {
    icon: FiEye,
    title: 'Our Vision',
    text: 'To be the most trusted multi-disciplinary CA & CS practice in the region — known for integrity, technical depth and genuine client partnership.',
  },
  {
    icon: FiHeart,
    title: 'Our Motto',
    text: '“Right solutions, delivered with objectivity and integrity.” We help our clients create value and build lasting wealth.',
  },
]

const expertise = [
  'Assurance & Statutory Audit',
  'Direct & Indirect Taxation',
  'GST Compliance & Advisory',
  'CMA Data & Banking Reports',
  'Corporate Law & ROC Compliance',
  'SME / Main Board IPO Advisory',
  'Startup Registration & Funding',
  'Risk & Due Diligence',
]

export default function About() {
  useReveal()
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A modern Chartered Accountancy & Company Secretary practice"
        lead="JBMJ & Associates LLP blends technical excellence with practical business understanding to serve businesses, founders and individuals across Rajkot and beyond."
        crumb="About"
      />

      {/* Intro */}
      <section className="section">
        <div className="container about-intro">
          <div className="about-intro__main reveal">
            <SectionHeading
              eyebrow="Who We Are"
              title="Compliance, assurance and advisory — under one trusted roof"
            />
            <p>
              JBMJ &amp; Associates LLP is a Rajkot-based firm bringing together
              Chartered Accountants and Company Secretaries with complementary
              strengths across audit, taxation, corporate law and advisory. The
              firm was founded on a simple belief: that businesses deserve a
              partner who is as invested in their growth as they are.
            </p>
            <p>
              We combine the discipline of structured compliance with the
              perspective of seasoned advisors — helping clients navigate
              regulation, manage risk and unlock opportunity. Every engagement is
              led personally by our partners, ensuring depth, accountability and
              continuity from first conversation to long-term partnership.
            </p>
            <Link to="/contact" className="btn btn--navy">
              Work with us <FiArrowRight />
            </Link>
          </div>

          <aside className="about-intro__aside reveal">
            <h3 className="about-intro__aside-title">Areas of expertise</h3>
            <ul className="about-intro__list">
              {expertise.map((e) => (
                <li key={e}><FiCheck /> {e}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Objective */}
      <section className="section--tight">
        <div className="container">
          <div className="objective reveal">
            <span className="objective__mark">“</span>
            <span className="eyebrow">Our Objective</span>
            <p className="objective__text">
              Our objective is to provide end-to-end services to our clients,
              encompassing accountancy, compliance, auditing and assurance, filing
              procedures, taxation, and fund-raising consultancy. We are committed
              to delivering the right solutions with objectivity and integrity,
              empowering our clients to create value and build lasting wealth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Motto */}
      <section className="section why-sec">
        <div className="container">
          <SectionHeading
            center
            light
            eyebrow="What Drives Us"
            title="Built on purpose and principle"
          />
          <div className="pillars-grid">
            {pillars.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.title} className="pillar-card reveal">
                  <span className="pillar-card__icon"><Icon /></span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership snapshot (full profiles live on the Team page) */}
      <section className="section">
        <div className="container">
          <div className="services-sec__head">
            <SectionHeading
              eyebrow="Leadership"
              title="The professionals behind JBMJ & Associates LLP"
              lead="A multi-disciplinary team of Chartered Accountants and Company Secretaries, each leading the areas they know best."
            />
            <Link to="/team" className="btn btn--outline services-sec__all">
              Full team &amp; profiles <FiArrowRight />
            </Link>
          </div>
          <div className="leaders-grid">
            {team.map((m) => (
              <div key={m.id} className="leader-row reveal">
                <div className="leader-row__avatar">
                  {m.photo ? (
                    <img src={m.photo} alt={m.name} />
                  ) : (
                    <span>{m.name.startsWith('CS') ? 'CS' : 'CA'}</span>
                  )}
                </div>
                <div className="leader-row__info">
                  <h3>{m.name}</h3>
                  <p className="leader-row__role">{m.role}</p>
                  <p className="leader-row__cred">{m.credential}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner reveal">
          <div>
            <span className="eyebrow">Get started</span>
            <h2 className="cta-band__title">Let’s build something dependable together.</h2>
            <p className="cta-band__text">
              Whether you’re starting up or scaling up, our team is ready to help.
            </p>
          </div>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--gold">
              Book a Consultation <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
