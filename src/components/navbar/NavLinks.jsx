
export const NavLinks = ({ link, path }) => {

  return (
    <li className="nav-item">
        <a className="nav-link" href={path}>{link}</a>
    </li>
  )
}


