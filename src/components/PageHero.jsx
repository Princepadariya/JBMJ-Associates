import { Link } from 'react-router-dom'

/* Compact hero used at the top of inner pages. */
export default function PageHero({ eyebrow, title, lead, crumb }) {
  return (
    <section className="page-hero">
      <div className="page-hero__glow" aria-hidden="true" />
      <div className="container page-hero__inner">
        <nav className="crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{crumb || title}</span>
        </nav>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {lead && <p className="page-hero__lead">{lead}</p>}
      </div>
    </section>
  )
}
