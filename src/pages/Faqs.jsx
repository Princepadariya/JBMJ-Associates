import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import useReveal from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import Faq from '../components/Faq'

export default function Faqs() {
  useReveal()
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        lead="Answers to the questions we hear most. If you need something specific, our team is always happy to help."
        crumb="FAQ"
      />

      <section className="section">
        <div className="container faq-wrap">
          <Faq />
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner reveal">
          <div>
            <span className="eyebrow">Still curious?</span>
            <h2 className="cta-band__title">Ask us anything.</h2>
            <p className="cta-band__text">
              Get a clear, no-obligation answer from a qualified professional.
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
