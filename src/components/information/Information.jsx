import { InfoItem } from "./InfoItem";
import './information.scss'


const text_nosotros = `Somos la Asociación de Transportes Especiales de Santa Fe. Nos 
                      organizamos por la necesidad de unificar criterios y resolver 
                      inconvenientes comunes de los transportistas de personas con 
                      discapacidad en nuestra provincia`;

const text_Socios = `Forman ATRAES aquellos transportistas especiales con una o más 
                      habilitaciones que deciden asociarse. Invitamos a todos los transportistas
                      especiales de la provincia a sumarse, juntos somos más`

const text_Asociate = `A.TRA.ES es una asociación en crecimiento, que se encuentra en constante acción
                      para mejorar las condiciones de trabajo y de las personas con discapacidad que 
                      utilizan nuestros servicios`

const arr__info = [
  {id:1, title:'Nosotros', img:'/images/Nino-removebg-preview.png', text:text_nosotros},
  {id:2, title:'Socios', img:'/images/otro-removebg-preview.png', text:text_Socios},
  {id:3, title:'Asociate', img:'/images/Papelito-removebg-preview.png', text:text_Asociate}
]

export const Information = () => {
  
  return (
    <div className="body__info">
      {
        arr__info.map( info => {
          return ( 
            < InfoItem key={info.id} title={info.title} source={info.img} text={info.text} />
            )
        })
      }
    </div>
  )
}


