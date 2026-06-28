import useReveal from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import { firm } from '../data/firm'

export default function Privacy() {
  useReveal()
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy & Disclaimer"
        lead="How we handle the information you share with us, and the terms on which this website is published."
        crumb="Privacy & Disclaimer"
      />

      <section className="section">
        <div className="container legal">
          <article className="legal__block reveal">
            <h2>Disclaimer</h2>
            <p>
              This website is intended solely to provide general information about
              {' '}{firm.name} and is not, and should not be construed as,
              solicitation, advertisement or inducement of any sort from the firm
              or any of its members, in accordance with the rules and guidelines of
              the Institute of Chartered Accountants of India (ICAI).
            </p>
            <p>
              By accessing this website, the user acknowledges that they wish to
              know about us for their own information and use. The information
              provided here is general in nature and should not be relied upon as
              professional advice. No reader should act on the basis of any
              information contained herein without seeking appropriate professional
              advice for their specific circumstances.
            </p>
            <p>
              {firm.name} is not liable for any consequence of any action taken by
              the user relying on material or information provided on this website.
              Calculators and reference material (Acts, Rules, Forms, Bulletins)
              are provided for convenience only and may not reflect the latest
              statutory position.
            </p>
          </article>

          <article className="legal__block reveal">
            <h2>Privacy Policy</h2>
            <p>
              When you contact us through this website (for example, via the
              enquiry form, email or phone), we collect only the details you
              voluntarily provide — such as your name, contact information and the
              nature of your query.
            </p>
            <ul className="legal__list">
              <li>We use your information solely to respond to your enquiry and to provide the services you request.</li>
              <li>We do not sell, rent or trade your personal information to any third party.</li>
              <li>Any client information shared with us is treated as strictly confidential, consistent with professional obligations.</li>
              <li>We retain enquiry information only for as long as necessary to assist you.</li>
            </ul>
            <p>
              If you would like your details removed from our records, please write
              to us at <a href={firm.emailHref}>{firm.email}</a>.
            </p>
          </article>

          <article className="legal__block reveal">
            <h2>External links</h2>
            <p>
              This website links to official government and regulatory portals for
              your convenience. We are not responsible for the content, accuracy or
              availability of those external websites.
            </p>
          </article>

          <p className="legal__note reveal">
            This is a general template. Please have it reviewed to ensure it
            reflects {firm.name}’s actual practices and current ICAI guidelines
            before relying on it.
          </p>
        </div>
      </section>
    </>
  )
}
