import { Link } from 'react-router-dom'
import './information.scss'

export const InfoItem = ({ title, source, text}) => {
  return (
    <div className="container__info">
        <div  className="container__item">
        <h2>{title}</h2>
        <img src={source} alt={title} />  
        <p>{text}</p>
        </div>
    </div>
  )
}

