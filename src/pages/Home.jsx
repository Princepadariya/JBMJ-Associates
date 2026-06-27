import { Link } from 'react-router-dom'
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiShield,
  FiUsers,
  FiTrendingUp,
  FiClock,
  FiAward,
} from 'react-icons/fi'
import { FaQuoteLeft } from 'react-icons/fa'
import useReveal from '../hooks/useReveal'
import SectionHeading from '../components/SectionHeading'
import TeamCard from '../components/TeamCard'
import Faq from '../components/Faq'
import { services } from '../data/services'
import { team } from '../data/team'
import { industries } from '../data/industries'
import { testimonials } from '../data/testimonials'

const stats = [
  { value: '8+', label: 'Service verticals' },
  { value: '100%', label: 'Compliance-first approach' },
  { value: '4', label: 'Qualified professionals' },
  { value: 'Rajkot', label: 'Rooted in Gujarat' },
]

const values = [
  {
    icon: FiShield,
    title: 'Integrity, always',
    text: 'Independent judgment and transparent advice. We tell you what you need to hear, not just what you want to.',
  },
  {
    icon: FiTrendingUp,
    title: 'Advisory that grows you',
    text: 'Beyond compliance — practical, numbers-backed guidance built around your business goals.',
  },
  {
    icon: FiUsers,
    title: 'Genuinely personal',
    text: 'Direct access to the partners who handle your file. No call-centre, no hand-offs.',
  },
  {
    icon: FiClock,
    title: 'On-time, every time',
    text: 'Deadlines met, returns filed, notices answered — proactively and without the last-minute scramble.',
  },
]

const steps = [
  { n: '01', title: 'Discovery', text: 'We understand your business, structure and objectives in a focused consultation.' },
  { n: '02', title: 'Diagnosis', text: 'A clear review of your compliance position, risks and opportunities.' },
  { n: '03', title: 'Execution', text: 'Hands-on delivery — audits, filings, structuring and advisory done right.' },
  { n: '04', title: 'Ongoing partnership', text: 'Continuous support so you stay compliant and ahead, all year round.' },
]

export default function Home() {
  useReveal()

  return (
    <>
      {/* ============== HERO ============== */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <span className="hero__grid" />
          <span className="hero__glow hero__glow--1" />
          <span className="hero__glow hero__glow--2" />
        </div>

        <div className="container hero__inner">
          <div className="hero__content">
            <span className="hero__pill">
              <FiAward /> Chartered Accountants · Rajkot
            </span>
            <h1 className="hero__title">
              Clarity in numbers.
              <br />
              <em>Confidence</em> in decisions.
            </h1>
            <p className="hero__lead">
              JBMJ &amp; Associates is a firm of Chartered Accountants and
              Company Secretaries delivering audit, taxation, GST, corporate law
              and growth advisory — with the precision your business deserves.
            </p>

            <div className="hero__actions">
              <Link to="/contact" className="btn btn--gold">
                Book a Consultation <FiArrowRight />
              </Link>
              <Link to="/services" className="btn btn--ghost">
                Explore Services
              </Link>
            </div>

            <ul className="hero__ticks">
              <li><FiCheck /> Audit &amp; Assurance</li>
              <li><FiCheck /> Income Tax &amp; GST</li>
              <li><FiCheck /> Corporate &amp; Startup Advisory</li>
            </ul>
          </div>

          <aside className="hero__card" aria-label="Firm highlights">
            <div className="hero__card-top">
              <span className="hero__card-kicker">Trusted advisory</span>
              <h3>Why founders &amp; businesses choose JBMJ</h3>
            </div>
            <ul className="hero__card-list">
              <li>
                <FiShield />
                <div>
                  <strong>Risk-focused audits</strong>
                  <span>Assurance that stands up to scrutiny.</span>
                </div>
              </li>
              <li>
                <FiTrendingUp />
                <div>
                  <strong>Funding-ready reports</strong>
                  <span>CMA data &amp; project reports that get sanctioned.</span>
                </div>
              </li>
              <li>
                <FiUsers />
                <div>
                  <strong>Partner-led service</strong>
                  <span>Direct access to qualified professionals.</span>
                </div>
              </li>
            </ul>
            <Link to="/about" className="hero__card-link">
              About the firm <FiArrowUpRight />
            </Link>
          </aside>
        </div>

        <div className="hero__marquee" aria-hidden="true">
          <div className="hero__marquee-track">
            {['Statutory Audit', 'Income Tax', 'GST', 'CMA & Banking', 'ROC Compliance', 'Startup Advisory', 'Due Diligence', 'IPO Advisory'].map(
              (t, i) => (
                <span key={i}>{t}</span>
              )
            )}
            {['Statutory Audit', 'Income Tax', 'GST', 'CMA & Banking', 'ROC Compliance', 'Startup Advisory', 'Due Diligence', 'IPO Advisory'].map(
              (t, i) => (
                <span key={'b' + i}>{t}</span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ============== STATS ============== */}
      <section className="stats-strip">
        <div className="container stats-strip__grid">
          {stats.map((s) => (
            <div key={s.label} className="stats-strip__item reveal">
              <span className="stats-strip__value">{s.value}</span>
              <span className="stats-strip__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============== ABOUT PREVIEW ============== */}
      <section className="section about-pre">
        <div className="container about-pre__grid">
          <div className="about-pre__media reveal">
            <div className="about-pre__frame">
              <div className="about-pre__badge">
                <span className="about-pre__badge-num">Est.</span>
                <span className="about-pre__badge-text">A modern CA &amp; CS practice</span>
              </div>
              <div className="about-pre__seal">
                <span>JBMJ</span>
                <small>&amp; Associates</small>
              </div>
            </div>
          </div>

          <div className="about-pre__content reveal">
            <SectionHeading
              eyebrow="About the Firm"
              title="A practice built on diligence, depth and trust"
            />
            <p className="about-pre__text">
              JBMJ &amp; Associates brings together Chartered Accountants and
              Company Secretaries under one roof — combining technical rigour with
              real business understanding. From assurance and taxation to
              corporate law and startup funding, we help clients make informed
              financial, regulatory and strategic decisions.
            </p>
            <p className="about-pre__text">
              Our approach is structured yet personal: every engagement is led by
              professionals who take ownership of your compliance and your growth.
            </p>
            <ul className="about-pre__list">
              <li><FiCheck /> Partner-led, client-centric advisory</li>
              <li><FiCheck /> Multi-disciplinary CA &amp; CS expertise</li>
              <li><FiCheck /> Compliance, assurance &amp; growth under one roof</li>
            </ul>
            <Link to="/about" className="btn btn--navy">
              More about us <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ============== SERVICES ============== */}
      <section className="section services-sec" id="services">
        <div className="container">
          <div className="services-sec__head">
            <SectionHeading
              eyebrow="What We Do"
              title="Comprehensive services for every stage of business"
              lead="From day-one incorporation to large-scale assurance and capital-market advisory — a single, dependable team for all your financial and compliance needs."
            />
            <Link to="/services" className="btn btn--outline services-sec__all">
              All services <FiArrowRight />
            </Link>
          </div>

          <div className="services-grid">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <article key={s.id} className="service-card reveal">
                  <span className="service-card__icon"><Icon /></span>
                  <h3 className="service-card__title">{s.title}</h3>
                  <p className="service-card__summary">{s.summary}</p>
                  <ul className="service-card__points">
                    {s.points.slice(0, 3).map((p) => (
                      <li key={p}><FiCheck /> {p}</li>
                    ))}
                  </ul>
                  <Link to="/services" className="service-card__link">
                    Learn more <FiArrowUpRight />
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============== INDUSTRIES ============== */}
      <section className="section industries-sec">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Industries We Serve"
            title="Sector experience across the board"
            lead="We understand that every industry has its own compliance rhythm. Our advice is shaped by the realities of your sector."
          />
          <div className="industries-grid">
            {industries.map((ind) => {
              const Icon = ind.icon
              return (
                <div key={ind.label} className="industry-chip reveal">
                  <span className="industry-chip__icon"><Icon /></span>
                  <span>{ind.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============== VALUES / WHY ============== */}
      <section className="section why-sec">
        <div className="container">
          <SectionHeading
            center
            light
            eyebrow="Why JBMJ"
            title="The difference is in how we work"
            lead="Premium service isn’t about jargon — it’s about reliability, judgment and being genuinely invested in your outcome."
          />
          <div className="why-grid">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="why-card reveal">
                  <span className="why-card__icon"><Icon /></span>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============== PROCESS ============== */}
      <section className="section process-sec">
        <div className="container">
          <SectionHeading
            eyebrow="Our Approach"
            title="A clear, four-step way of working"
            lead="No ambiguity, no surprises — just a structured engagement that keeps you informed and in control."
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

      {/* ============== TEAM PREVIEW ============== */}
      <section className="section team-pre">
        <div className="container">
          <div className="services-sec__head">
            <SectionHeading
              eyebrow="Our People"
              title="Meet the core team"
              lead="Qualified professionals who lead every engagement personally — combining technical depth with practical business sense."
            />
            <Link to="/team" className="btn btn--outline services-sec__all">
              Full team <FiArrowRight />
            </Link>
          </div>
          <div className="team-grid">
            {team.map((m) => (
              <div key={m.id} className="reveal">
                <TeamCard member={m} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== TESTIMONIALS ============== */}
      <section className="section why-sec">
        <div className="container">
          <SectionHeading
            center
            light
            eyebrow="Client Voices"
            title="Trusted by businesses that value diligence"
          />
          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <figure key={i} className="testi-card reveal">
                <FaQuoteLeft className="testi-card__quote" />
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <span className="testi-card__avatar">{t.name.charAt(0)}</span>
                  <span>
                    <strong>{t.name}</strong>
                    <small>{t.role}</small>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============== FAQ ============== */}
      <section className="section faq-sec">
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

      {/* ============== CTA ============== */}
      <section className="cta-band">
        <div className="container cta-band__inner reveal">
          <div>
            <span className="eyebrow">Let’s talk</span>
            <h2 className="cta-band__title">
              Ready for advisory that actually moves your business forward?
            </h2>
            <p className="cta-band__text">
              Book a no-obligation consultation with our partners and see how
              JBMJ &amp; Associates can support your compliance and growth.
            </p>
          </div>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--gold">
              Book a Consultation <FiArrowRight />
            </Link>
            <Link to="/services" className="btn btn--ghost">
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
