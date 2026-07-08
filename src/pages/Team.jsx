import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import useReveal from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import TeamCard from '../components/TeamCard'
import { team } from '../data/team'

const founders = team.filter((m) => m.role === 'Founding & Designated Partner')
const associates = team.filter((m) => m.role !== 'Founding & Designated Partner')

export default function Team() {
  useReveal()
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      // small delay so reveal animations + layout settle before scrolling
      const timer = setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' })
          el.classList.add('team-card--highlight')
          setTimeout(() => el.classList.remove('team-card--highlight'), 2000)
        }
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [hash])

  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The people you'll actually work with"
        lead="A close-knit team of Chartered Accountants and Company Secretaries — each leading their domain and personally accountable for your engagement."
        crumb="Our Team"
      />

      {/* ── Founding Partners ── */}
      <section className="section">
        <div className="container">
          <div className="team-section-head">
            <h2 className="team-section-head__title">Founding Partners</h2>
            <p className="team-section-head__lead">
              Our founding partners bring together deep technical expertise and a shared commitment to delivering partner-led advisory across audit, taxation, and corporate law.
            </p>
          </div>
          <div className="team-grid team-grid--detailed team-grid--center">
            {founders.map((m) => (
              <div key={m.id} id={m.id} className="reveal">
                <TeamCard member={m} detailed />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Associates & Specialists ── */}
      <section className="section team-associates-sec">
        <div className="container">
          <div className="team-section-head reveal">
            <h2 className="team-section-head__title">Associates &amp; Specialists</h2>
            <p className="team-section-head__lead">
              Domain specialists and professional associates who bring focused expertise in KPO, financial reporting, corporate law, secretarial compliance, and capital market advisory.
            </p>
          </div>
          <div className="team-grid team-grid--detailed">
            {associates.map((m) => (
              <div key={m.id} id={m.id} className="reveal">
                <TeamCard member={m} detailed />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner reveal">
          <div>
            <span className="eyebrow">Let's connect</span>
            <h2 className="cta-band__title">Speak directly with our partners.</h2>
            <p className="cta-band__text">
              No layers, no hand-offs — just qualified professionals who know your file.
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
