import Banner from '../../components/Banner/banner.jsx'
import Gallery from '../../components/Gallery/gallery.jsx'
import bannerHome from '../../assets/banner-home.jpg'
import './home.scss'

function Home() {
    return (
        <main className='home'>
            <Banner imgBanner={bannerHome} textBanner="Chez vous, partout et ailleurs"/>
            <Gallery/>
        </main>
    )
}

export default Home;