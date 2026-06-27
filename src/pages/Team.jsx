import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import useReveal from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import TeamCard from '../components/TeamCard'
import { team } from '../data/team'

export default function Team() {
  useReveal()
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The people you’ll actually work with"
        lead="A close-knit team of Chartered Accountants and Company Secretaries — each leading their domain and personally accountable for your engagement."
        crumb="Our Team"
      />

      <section className="section">
        <div className="container">
          <div className="team-grid team-grid--detailed">
            {team.map((m) => (
              <div key={m.id} className="reveal">
                <TeamCard member={m} detailed />
              </div>
            ))}
          </div>

          <p className="team-note reveal">
            Photographs of our team members will be added soon. The cards above
            include a placeholder for each professional’s photo.
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner reveal">
          <div>
            <span className="eyebrow">Let’s connect</span>
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
