import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="router-container">
    <div className="wave-logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-logo"
      />
      <h1 className="wave-heading"> Wave </h1>
    </div>
    <ul className="router-links-container">
      <li>
        <Link to="/" className="each-link">
          {' '}
          Home{' '}
        </Link>
      </li>
      <li>
        <Link to="/about" className="each-link">
          {' '}
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="each-link">
          {' '}
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
