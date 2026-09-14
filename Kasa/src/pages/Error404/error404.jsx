import { Link } from 'react-router-dom'
import "./error404.scss"

function Error404() {
    return (
        <main className='error404'>
            <h1>404</h1>
            <p>Oups! la page que vous demandez n'existe pas.</p>
            <Link to='/'>
                Retourner sur la page d'acceuil
            </Link>
        </main>
    )
}

export default Error404;