import './navbar.css'
import { NavLinks } from './NavLinks'

export const NavBar = () => {

  const items = [
   {id:1, name: 'Home', path: '/'},
   {id:2, name: 'Nostros', path: '/Nosotros'},
   {id:3, name: 'Contacto', path: '/Contacto'},
   {id:4, name: 'Servicios', path: '/Servicios'},
   {id:5, name: 'La Provincia', path: '/Provincia'},

  ]

  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-body-tertiary nav__navbar ">
        <div className="container-fluid ">
          <a className="my__navbar" href="#">
            <img 
              src="/images/logo__fatradis.png" 
              alt="img_fatradis" 
              className="logo__navbar"
            />
          </a>          
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              { items.map( (item) => 
                < NavLinks key={item.id} link={item.name} path={item.path} />
              ) }          
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </>
  )
}