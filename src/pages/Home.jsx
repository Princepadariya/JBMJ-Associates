import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiShield,
  FiUsers,
  FiTrendingUp,
  FiClock,
  FiMapPin,
  FiLayers,
  FiAward,
} from 'react-icons/fi'
import {
  LuMapPin,
  LuUsers,
  LuLayers,
  LuAward
} from 'react-icons/lu'
import useReveal from '../hooks/useReveal'

/* ── Animated stat counter ── */
function StatItem({ value, label, index }) {
  const numericPart = parseInt(value.replace(/\D/g, ''), 10)
  const suffix = value.replace(/\d/g, '')
  const [display, setDisplay] = useState('0' + suffix)
  const ref = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || done.current) return
      done.current = true
      const start = performance.now()
      const dur = 1800
      const run = (now) => {
        const p = Math.min((now - start) / dur, 1)
        const ease = 1 - Math.pow(1 - p, 3)
        setDisplay(Math.round(ease * numericPart) + suffix)
        if (p < 1) requestAnimationFrame(run)
        else setDisplay(value)
      }
      requestAnimationFrame(run)
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [value, numericPart, suffix])

  return (
    <div ref={ref} className="stats-clean__item reveal" style={{ transitionDelay: `${index * 100}ms` }}>
      <span className="stats-clean__value">{display}</span>
      <span className="stats-clean__label">{label}</span>
    </div>
  )
}

/* ── 3-D card tilt helpers ── */
function handleTiltEnter(e) {
  e.currentTarget.style.transition = 'box-shadow 0.4s cubic-bezier(0.22,1,0.36,1), border-color 0.4s cubic-bezier(0.22,1,0.36,1)'
}
function handleTilt(e) {
  const el = e.currentTarget
  const { left, top, width, height } = el.getBoundingClientRect()
  const x = (e.clientX - left) / width - 0.5
  const y = (e.clientY - top)  / height - 0.5
  el.style.transform = `perspective(900px) rotateX(${-y * 9}deg) rotateY(${x * 9}deg) translateY(-10px) scale(1.02)`
}
function resetTilt(e) {
  const el = e.currentTarget
  el.style.transition = ''
  el.style.transform = ''
}

/* ── Magnetic button helpers ── */
function magneticMove(e) {
  const el = e.currentTarget
  const { left, top, width, height } = el.getBoundingClientRect()
  const x = (e.clientX - left - width / 2) * 0.22
  const y = (e.clientY - top - height / 2) * 0.22
  el.style.transform = `translate(${x}px, ${y}px) scale(1.04)`
}
function magneticLeave(e) {
  e.currentTarget.style.transform = ''
}
import SplashScreen from '../components/SplashScreen'
import SectionHeading from '../components/SectionHeading'
import TeamCard from '../components/TeamCard'
import Faq from '../components/Faq'
import Testimonials from '../components/Testimonials'
import { serviceCategories } from '../data/services'
import { team } from '../data/team'
import { industries } from '../data/industries'

const stats = [
  { value: '15+', label: 'Industries Served' },
  { value: '60+', label: 'Corporate Clients' },
  { value: '5+', label: 'Cities Reached' },
  { value: '100%', label: 'Partner-Led Advisory' },
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

  /* ── Cursor spotlight on why-sec ── */
  useEffect(() => {
    const sec = document.querySelector('.why-sec')
    if (!sec) return
    const onMove = (e) => {
      const { left, top } = sec.getBoundingClientRect()
      sec.style.setProperty('--cx', `${e.clientX - left}px`)
      sec.style.setProperty('--cy', `${e.clientY - top}px`)
    }
    sec.setAttribute('data-spotlight', '1')
    sec.addEventListener('mousemove', onMove)
    return () => {
      sec.removeEventListener('mousemove', onMove)
      sec.removeAttribute('data-spotlight')
    }
  }, [])

  return (
    <>
      <SplashScreen />
      {/* ============== HERO ============== */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <span className="hero__grid" />
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__orb hero__orb--3" />
        </div>

        <div className="container hero__inner">
          <div className="hero__content">
            <div className="hero__overline">
              <span className="hero__overline-rule" />
              Chartered Accountants &amp; Company Secretaries
            </div>
            <h1 className="hero__title">
              Clarity in numbers.
              <br />
              <em>Confidence</em> in decisions.
            </h1>
            <span className="hero__title-rule" aria-hidden="true" />
            <p className="hero__lead">
              JBMJ &amp; Associates LLP is a firm of Chartered Accountants and
              Company Secretaries delivering audit, taxation, GST, corporate law
              and growth advisory — with the precision your business deserves.
            </p>

            <div className="hero__actions">
              <Link
                to="/contact"
                className="btn btn--gold"
                onMouseMove={magneticMove}
                onMouseLeave={magneticLeave}
              >
                Book a Consultation <FiArrowRight />
              </Link>
              <Link
                to="/services"
                className="btn btn--ghost"
                onMouseMove={magneticMove}
                onMouseLeave={magneticLeave}
              >
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
      <section className="stats-clean-sec">
        <div className="container stats-clean__grid">
          {stats.map((s, i) => (
            <StatItem key={i} value={s.value} label={s.label} index={i} />
          ))}
        </div>
      </section>

      {/* ============== ABOUT PREVIEW ============== */}
      <section className="section about-pre">
        <div className="container about-pre__grid">
          <div className="about-pre__content reveal">
            <SectionHeading
              eyebrow="About the Firm"
              title="A practice built on diligence, depth and trust"
            />
            <p className="about-pre__text">
              JBMJ &amp; Associates LLP brings together Chartered Accountants and
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

          <aside className="about-pre__aside reveal">
            <span className="about-pre__aside-kicker">Areas of expertise</span>
            <ul className="about-pre__expertise">
              <li><FiCheck /> Audit &amp; Assurance</li>
              <li><FiCheck /> Direct &amp; Indirect Taxation</li>
              <li><FiCheck /> GST Compliance &amp; Advisory</li>
              <li><FiCheck /> Corporate &amp; ROC Compliance</li>
              <li><FiCheck /> CMA Data &amp; Project Finance</li>
              <li><FiCheck /> Startup &amp; Business Advisory</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* ============== SERVICES ============== */}
      <section className="section services-sec" id="services">
        <div className="container">
          <div className="services-sec__head">
            <SectionHeading
              index="01"
              eyebrow="What We Do"
              title="Comprehensive services for every stage of business"
              lead="From day-one incorporation to large-scale assurance and capital-market advisory — a single, dependable team for all your financial and compliance needs."
            />
            <Link to="/services" className="btn btn--outline services-sec__all">
              All services <FiArrowRight />
            </Link>
          </div>

          <div className="services-grid services-grid--cats-v2">
            {serviceCategories.map((cat, i) => {
              const Icon = cat.icon
              return (
                <Link
                  to={`/services/${cat.id}`}
                  key={cat.id}
                  className="service-card-v2 reveal"
                  style={{ '--card-accent': cat.accent }}
                  onMouseEnter={handleTiltEnter}
                  onMouseMove={handleTilt}
                  onMouseLeave={resetTilt}
                >
                  <div className="service-card-v2__accent" aria-hidden="true" />
                  <div className="service-card-v2__top">
                    <div className="service-card-v2__icon-wrap">
                      <Icon />
                    </div>
                  </div>
                  <h3 className="service-card-v2__title">{cat.category}</h3>
                  <p className="service-card-v2__summary">{cat.summary}</p>
                  <ul className="service-card-v2__points">
                    {cat.items.slice(0, 4).map((item) => (
                      <li key={item.title}><FiCheck /> {item.title}</li>
                    ))}
                  </ul>
                  <span className="service-card-v2__link">
                    Learn more <FiArrowUpRight />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============== INDUSTRIES ============== */}
      <section className="section industries-sec-v2">
        <div className="container">
          <SectionHeading
            center
            index="02"
            eyebrow="Industries We Serve"
            title="Sector experience across the board"
            lead="We understand that every industry has its own compliance rhythm. Our advice is shaped by the realities of your sector."
          />
          <div className="ind-v2-grid">
            {industries.map((ind) => {
              const Icon = ind.icon
              return (
                <Link
                  to="/industries"
                  key={ind.label}
                  className="ind-v2-card reveal"
                  style={{ '--card-accent': ind.accent }}
                >
                  <div className="ind-v2-card__accent" aria-hidden="true" />
                  <div className="ind-v2-card__icon-wrap">
                    <Icon />
                  </div>
                  <div className="ind-v2-card__body">
                    <h3 className="ind-v2-card__title">{ind.label}</h3>
                    <p className="ind-v2-card__desc">{ind.desc}</p>
                  </div>
                  <span className="ind-v2-card__arrow">
                    <FiArrowUpRight />
                  </span>
                </Link>
              )
            })}
          </div>
          <div className="industries-cta reveal">
            <Link to="/industries" className="btn btn--outline">
              Explore all industries <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ============== VALUES / WHY ============== */}
      <section className="section why-sec">
        <div className="container">
          <SectionHeading
            center
            light
            index="03"
            eyebrow="Why JBMJ"
            title="The difference is in how we work"
            lead="Premium service isn’t about jargon — it’s about reliability, judgment and being genuinely invested in your outcome."
          />
          <div className="why-grid">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="why-card reveal" style={{ transitionDelay: `${i * 120}ms` }}>
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
            index="04"
            eyebrow="Our Approach"
            title="A clear, four-step way of working"
            lead="No ambiguity, no surprises — just a structured engagement that keeps you informed and in control."
          />
          <div className="process-grid">
            {steps.map((s, i) => (
              <div key={s.n} className="process-card reveal" style={{ transitionDelay: `${i * 100}ms` }}>
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
              index="05"
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
            index="06"
            eyebrow="Client Voices"
            title="Trusted by businesses that value diligence"
            lead="Real results across audit, tax, funding and corporate compliance — here’s what working with JBMJ feels like."
          />
        </div>
        <Testimonials />
      </section>

      {/* ============== FAQ ============== */}
      <section className="section faq-sec">
        <div className="container faq-wrap">
          <SectionHeading
            center
            index="07"
            eyebrow="FAQ"
            title="Frequently asked questions"
            lead="Quick answers to what clients ask us most. Need something specific? Just reach out."
          />
          <Faq limit={6} />
          <div className="faq-more reveal">
            <Link to="/faq" className="btn btn--outline">
              See all FAQs <FiArrowRight />
            </Link>
          </div>
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
              JBMJ &amp; Associates LLP can support your compliance and growth.
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
