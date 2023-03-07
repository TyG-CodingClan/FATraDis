
export const ItemFooter = ({ item, link, source }) => {
  return (
    <li className="item__footer">
        {
            item ? <a href={link}>{item}</a>
            : <a href={link}><img src={source} alt="img" /></a>
        }
    </li>
    )
}


