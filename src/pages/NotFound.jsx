import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container notfound__inner">
        <span className="notfound__code">404</span>
        <h1>Page not found</h1>
        <p>The page you’re looking for doesn’t exist or has moved.</p>
        <Link to="/" className="btn btn--navy">
          <FiArrowLeft /> Back to home
        </Link>
      </div>
    </section>
  )
}
