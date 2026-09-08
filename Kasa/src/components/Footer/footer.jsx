import './footer.scss'
import footerLogo from '../../assets/FOOTER.svg'



function Footer() {
    return (
        <footer className='footer'>
            <img src={footerLogo} alt="Logo kasa blanc" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;