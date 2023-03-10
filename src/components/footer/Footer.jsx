import { ItemFooter } from "./ItemFooter"
import './styleFooter.scss'
const footer_arr = [
  {id:1, url: '#', item:'Terminos y Condiciones'},
  {id:2, url: '../contacto', item:'Contacto'},
  {id:3, url: '#', item:'Socios'},
  {id:4, url: '../servicios', item:'Servicios'},
  {id:5, url: 'https://www.facebook.com/Federacion-Argentina-de-Transportistas-para-Personas-con-Discapacidad-2826218010738820/', src:'/images/facebook.png'}
]

export const Footer = () => {
  return (
    <>
      <ul className="content__footer">
          {
            footer_arr.map( ( x ) => 
            <ItemFooter key={x.id} link={x.url} item={x.item} source={x.src} />
            )
          }
      </ul>
      <p className="copyrigth"><span>@copyrigth: TyG-CodingClan</span></p>
    </>
  )
}

