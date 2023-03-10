import './navbar.scss'
import { NavLinks } from './NavLinks'

export const NavBar = () => {

  const items = [
   {id:1, name: 'Home', path: '/'},
   {id:2, name: 'Nostros', path: '/nosotros'},
   {id:3, name: 'Contacto', path: '/contacto'},
   {id:4, name: 'Servicios', path: '/servicios'},
   {id:5, name: 'La Provincia', path: '/provincia'},

  ]

  return (
    <>
      <nav className="navbar navbar-expand-lg  nav__navbar ">
        <div className="container-fluid">
          <div className='container__my__navbar '>

            {/* <a className="my__navbar" href="/">
              <img 
                src="/images/logo__fatradis.png" 
                alt="img_fatradis" 
                className="logo__navbar"
              />
            </a>    */}
                   
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className=" collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav" >
                { items.map( (item) => 
                  < NavLinks key={item.id} link={item.name} path={item.path} />
                  ) }          
              </ul>
            </div>

          </div>

        </div>
      </nav>
    </>
  )
}