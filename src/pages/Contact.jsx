import { useState } from 'react'
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiCheckCircle,
} from 'react-icons/fi'
import useReveal from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import { firm } from '../data/firm'
import { serviceCategories } from '../data/services'

export default function Contact() {
  useReveal()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Front-end demo: wire this to your email service / backend (e.g. Formspree,
    // EmailJS, or your own API) to actually deliver enquiries.
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s start a conversation"
        lead="Tell us a little about your business or query and our team will get back to you promptly. Consultations are always confidential."
        crumb="Contact"
      />

      <section className="section">
        <div className="container contact-grid">
          {/* Info column */}
          <aside className="contact-info reveal">
            <h3 className="contact-info__title">Reach us directly</h3>
            <p className="contact-info__lead">
              Prefer to call or email? We’re happy to help — reach out using any
              of the details below.
            </p>

            <ul className="contact-info__list">
              {firm.offices.map((o) => (
                <li key={o.city}>
                  <span className="contact-info__icon"><FiMapPin /></span>
                  <div>
                    <strong>{o.city} Office</strong>
                    <span>{o.lines}</span>
                  </div>
                </li>
              ))}
              <li>
                <span className="contact-info__icon"><FiPhone /></span>
                <div>
                  <strong>Phone</strong>
                  <a href={firm.phoneHref}>{firm.phone}</a>
                </div>
              </li>
              <li>
                <span className="contact-info__icon"><FiMail /></span>
                <div>
                  <strong>Email</strong>
                  <a href={firm.emailHref}>{firm.email}</a>
                </div>
              </li>
              <li>
                <span className="contact-info__icon"><FiClock /></span>
                <div>
                  <strong>Working hours</strong>
                  <span>{firm.hours}</span>
                </div>
              </li>
            </ul>
          </aside>

          {/* Form column */}
          <div className="contact-form-wrap reveal">
            {sent ? (
              <div className="contact-success">
                <FiCheckCircle />
                <h3>Thank you for reaching out</h3>
                <p>
                  Your message has been captured. Connect this form to your
                  preferred email service to start receiving enquiries directly.
                </p>
                <button className="btn btn--outline" onClick={() => setSent(false)}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="contact-form__title">Send us a message</h3>
                <div className="contact-form__row">
                  <label>
                    Full name
                    <input type="text" name="name" required placeholder="Your name" />
                  </label>
                  <label>
                    Phone
                    <input type="tel" name="phone" placeholder="+91 ..." />
                  </label>
                </div>
                <div className="contact-form__row">
                  <label>
                    Email
                    <input type="email" name="email" required placeholder="you@email.com" />
                  </label>
                  <label>
                    Service of interest
                    <select name="service" defaultValue="">
                      <option value="" disabled>Select a service</option>
                      {serviceCategories.map((cat) => (
                        <optgroup key={cat.id} label={cat.category}>
                          {cat.items.map((item) => (
                            <option key={item.title} value={item.title}>{item.title}</option>
                          ))}
                        </optgroup>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </label>
                </div>
                <label>
                  Message
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder="How can we help you?"
                  />
                </label>
                <button type="submit" className="btn btn--gold contact-form__submit">
                  Send message <FiSend />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
