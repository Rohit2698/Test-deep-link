import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  const location = useLocation()

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          🔗 Tool Check Native
        </Link>
        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/tool/ABC123/inspection/INS001/inspectionform" 
            className={`nav-link ${location.pathname.includes('/inspectionform') ? 'active' : ''}`}
          >
            Inspection Form
          </Link>
        </div>
      </div>
    </nav>
  )
}
