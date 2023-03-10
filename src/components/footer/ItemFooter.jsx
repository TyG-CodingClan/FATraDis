import { Link } from "react-router-dom"

export const ItemFooter = ({ item, link, source }) => {
  return (
    <li className="item__footer">
        {
            item ? <Link to={link}>{item}</Link>
            : <Link to={link}><img src={source} alt="img" /></Link>
        }
    </li>
    )
}


