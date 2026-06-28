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
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const sent = status === 'sent'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const data = Object.fromEntries(new FormData(form).entries())
    try {
      // Delivers enquiries straight to the firm's inbox via FormSubmit (no
      // backend needed). The FIRST submission triggers a one-time activation
      // email to firm.email — click the link in it to start receiving messages.
      // To switch providers (Formspree / EmailJS / your own API), change the URL.
      const res = await fetch(`https://formsubmit.co/ajax/${firm.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: `New enquiry from ${data.name || 'website'} — JBMJ & Associates`,
        }),
      })
      if (!res.ok) throw new Error('Network response was not ok')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
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
                  Your message has been sent to our team. We’ll get back to you
                  shortly — usually within one working day.
                </p>
                <button className="btn btn--outline" onClick={() => setStatus('idle')}>
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
                {status === 'error' && (
                  <p className="contact-form__error" role="alert">
                    Something went wrong sending your message. Please try again, or
                    email us directly at <a href={firm.emailHref}>{firm.email}</a>.
                  </p>
                )}
                <button
                  type="submit"
                  className="btn btn--gold contact-form__submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : <>Send message <FiSend /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Office locations on map */}
      <section className="section section--tight contact-maps-sec">
        <div className="container">
          <div className="contact-maps">
            {firm.offices.map((o) => (
              <div key={o.city} className="contact-map reveal">
                <div className="contact-map__head">
                  <FiMapPin />
                  <div>
                    <strong>{o.city} Office</strong>
                    <span>{o.lines}</span>
                  </div>
                </div>
                <iframe
                  title={`${o.city} office location`}
                  className="contact-map__frame"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    o.lines + ', ' + o.city
                  )}&output=embed`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
