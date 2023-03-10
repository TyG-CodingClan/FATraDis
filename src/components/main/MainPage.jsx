import { Link } from 'react-router-dom'
import './mainPage.scss'

const textP = `Federacion Argentina de Transportistas de Personas con Discapacidad 
              Aqui podras encontrar toda la informacion relacionada a las Asociaciones 
              de Transportistas de toda la Argentina, realizar consultas, y registrarte 
              como socio si todavia no lo hiciste!`


export const MainPage = () => {
  return (
    <>
      <div className='container__main'>
        <img src="/images/logo__final.png" alt="logo" className="img__main" />
        <div className='container__title'>
          <h1 className='title__main'>F.A.Tra.Dis</h1>
          <p className='parrafo__main'>
            {textP}
          </p>
          <br />
          <Link to='contacto' className='link__asociarme'>Asociarme</Link>
        </div> 
      </div>
      <div className='container__grafico'>
          <img src="/images/grafico.png" alt="grafico" className='grafico__main'/>
      </div>
    </>
  )
}

