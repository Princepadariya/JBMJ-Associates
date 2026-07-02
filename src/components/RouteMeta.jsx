import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/*
  Sets a unique <title> and meta description per route (important for SEO,
  browser tabs and link sharing in a single-page app).
*/
const META = {
  '/': {
    title: 'JBMJ & Associates LLP | Chartered Accountants & Company Secretaries',
    desc: 'A firm of Chartered Accountants & Company Secretaries delivering audit, taxation, GST, corporate law, IPO compliance and growth advisory with precision and integrity.',
  },
  '/about': {
    title: 'About Us | JBMJ & Associates LLP',
    desc: 'Learn about JBMJ & Associates LLP — our objective, mission, vision and the multi-disciplinary CA & CS team behind the firm.',
  },
  '/team': {
    title: 'Our People | JBMJ & Associates LLP',
    desc: 'Meet the Chartered Accountants and Company Secretaries who lead every engagement at JBMJ & Associates LLP.',
  },
  '/services': {
    title: 'Services | JBMJ & Associates LLP',
    desc: 'Audit & assurance, direct & indirect taxation, GST, accounting, company incorporation, ROC compliance, SEBI IPO advisory and project finance.',
  },
  '/industries': {
    title: 'Industries We Serve | JBMJ & Associates LLP',
    desc: 'Sector experience across retail, manufacturing & MSME, IT & startups, real estate, healthcare, hospitality and more.',
  },
  '/knowledge': {
    title: 'Knowledge Bank | JBMJ & Associates LLP',
    desc: 'Calculators, bulletins, useful links, and the latest Acts, Rules and Forms — a handy reference from JBMJ & Associates LLP.',
  },
  '/careers': {
    title: 'Careers | JBMJ & Associates LLP',
    desc: 'Build your career with JBMJ & Associates LLP — articleship, audit & tax roles, and opportunities for qualified Chartered Accountants.',
  },
  '/contact': {
    title: 'Contact Us | JBMJ & Associates LLP',
    desc: 'Get in touch with JBMJ & Associates LLP — offices in Rajkot and Surat. Call, email or send us a message.',
  },
  '/faq': {
    title: 'FAQ | JBMJ & Associates LLP',
    desc: 'Frequently asked questions about our services, process, offices and fees.',
  },
  '/privacy': {
    title: 'Privacy & Disclaimer | JBMJ & Associates LLP',
    desc: 'Privacy policy and professional disclaimer for the JBMJ & Associates LLP website.',
  },
}

const DEFAULT = META['/']

export default function RouteMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Match the most specific known prefix (handles /knowledge/acts etc.)
    const key =
      META[pathname] ? pathname
      : Object.keys(META)
          .filter((k) => k !== '/' && pathname.startsWith(k))
          .sort((a, b) => b.length - a.length)[0]

    const meta = (key && META[key]) || DEFAULT
    document.title = meta.title

    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', meta.desc)
  }, [pathname])

  return null
}
