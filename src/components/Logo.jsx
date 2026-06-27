import { Link } from 'react-router-dom'

/*
  Wordmark logo for JBMJ & Associates.
  `variant` = 'light' (for dark backgrounds) | 'dark' (default).
*/
export default function Logo({ variant = 'dark', onClick }) {
  return (
    <Link to="/" className={`logo logo--${variant}`} onClick={onClick} aria-label="JBMJ & Associates — Home">
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 48 48" width="44" height="44">
          <rect x="1.5" y="1.5" width="45" height="45" rx="11" className="logo__mark-bg" />
          <text
            x="50%"
            y="53%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="logo__mark-text"
          >
            J
          </text>
        </svg>
      </span>
      <span className="logo__words">
        <span className="logo__name">JBMJ</span>
        <span className="logo__sub">&amp; Associates</span>
      </span>
    </Link>
  )
}
