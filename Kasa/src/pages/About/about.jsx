import bannerAbout from '../../assets/banner-about.jpg'
import Banner from '../../components/Banner/banner.jsx'
import Collapse from '../../components/Collapse/collapse.jsx'
import aboutData from '../../data/aboutData.js'
import './about.scss'

function About() {
    return (
        <>
            <Banner imgBanner={bannerAbout}/>
            <div className="about-collapse">
            {aboutData.map((item) => (
                <Collapse key={item.title} title={item.title} content={item.content}/>
            ))}
            </div>
        </>
    )
}

export default About;