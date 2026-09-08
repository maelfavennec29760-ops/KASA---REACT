import './header.scss'
import logo from '../../assets/LOGO.svg'
import { NavLink } from 'react-router-dom'
import '../../styles/index.scss'

function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <img src={logo} alt="Logo Kasa" />
                <nav>
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/about">À Propos</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header;