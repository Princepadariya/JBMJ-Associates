import { Link } from 'react-router-dom'

/*
  Wordmark logo for JBMJ & Associates LLP.
  `variant` = 'light' (for dark backgrounds) | 'dark' (default).
*/
export default function Logo({ variant = 'dark', onClick }) {
  return (
    <Link to="/" className={`logo logo--${variant}`} onClick={onClick} aria-label="JBMJ & Associates LLP — Home">
      <span className="logo__mark" aria-hidden="true">
        <img src="/images/CA-India.jpg" alt="CA India" className="logo__icai-img" />
      </span>
      <span className="logo__words">
        <span className="logo__name">JBMJ</span>
        <span className="logo__sub">&amp; Associates LLP</span>
      </span>
    </Link>
  )
}
