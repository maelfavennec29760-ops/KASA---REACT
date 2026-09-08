import './banner.scss'

function Banner({ imgBanner, textBanner }) {

    return (
        <section className='banner container' style={{ backgroundImage: `url(${imgBanner})` }}>
            {textBanner && <h1>{textBanner}</h1>}      
        </section> 
    )
}

export default Banner;