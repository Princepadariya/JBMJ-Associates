import { Link } from 'react-router-dom'
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiArrowUpRight,
} from 'react-icons/fi'
import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa'
import Logo from './Logo'
import { firm } from '../data/firm'
import { serviceHighlights } from '../data/services'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo variant="light" />
          <p className="footer__about">
            A Rajkot-based firm of Chartered Accountants delivering audit,
            taxation, corporate law and advisory services with precision,
            integrity and a genuinely personal approach.
          </p>
          <div className="footer__social">
            <a href={firm.social.linkedin} aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href={firm.social.instagram} aria-label="Instagram"><FaInstagram /></a>
            <a href={firm.social.facebook} aria-label="Facebook"><FaFacebookF /></a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__head">Explore</h4>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/team">Our People</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/knowledge">Knowledge Bank</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__head">Services</h4>
          <ul>
            {serviceHighlights.slice(0, 6).map((title) => (
              <li key={title}>
                <Link to="/services">{title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__head">Get in touch</h4>
          <ul className="footer__contact">
            <li><FiMapPin /><span>{firm.address}</span></li>
            <li><FiPhone /><a href={firm.phoneHref}>{firm.phone}</a></li>
            <li><FiMail /><a href={firm.emailHref}>{firm.email}</a></li>
            <li><FiClock /><span>{firm.hours}</span></li>
          </ul>
          <Link to="/contact" className="footer__cta">
            Book a consultation <FiArrowUpRight />
          </Link>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p>© {year} {firm.name}. All rights reserved.</p>
          <p className="footer__disc">
            Chartered Accountants · {firm.city}
          </p>
        </div>
      </div>
    </footer>
  )
}
