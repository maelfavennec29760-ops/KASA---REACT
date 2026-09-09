import { Link } from 'react-router-dom'
import './card.scss'

function Card( {id, title, cover} ) {
    return (
        <Link to={`/housing/${id}`}>
            <article className='card'>
                <img src={cover} alt={title} />
                <h3>{title}</h3>
            </article>
        </Link>
    )
}

export default Card;