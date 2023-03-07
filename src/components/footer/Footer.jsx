import { ItemFooter } from "./ItemFooter"

const footer_arr = [
  {id:1, url: '#', item:'@copyrigth: TyG-CodingClan'},
  {id:2, url: '#', item:'Terminos y Condiciones'},
  {id:3, url: '#', item:'Contacto'},
  {id:4, url: '#', item:'Socios'},
  {id:5, url: '#', item:'Servicios'},
  {id:6, url: 'https://www.facebook.com/Federacion-Argentina-de-Transportistas-para-Personas-con-Discapacidad-2826218010738820/', src:'/images/facebook.png'}
]

export const Footer = () => {
  return (

      <ul className="content__footer">
          {
            footer_arr.map( ( x ) => 
            <ItemFooter key={x.id} link={x.url} item={x.item} source={x.src} />
            )
          }
      </ul>
  )
}

