import { Link } from 'react-router-dom'
import './navbar.scss'

export const NavLinks = ({ link, path }) => {

  return (
    <li className="nav-item">
        <Link className="nav-link" to={path}>{link}</Link>
    </li>
  )
}


