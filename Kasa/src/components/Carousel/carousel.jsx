import { useState } from "react";
import ArrowLeft from '../../assets/arrow-left.png';
import ArrowRight from '../../assets/arrow-right.png';
import './carousel.scss';


function Carousel({ pictures, title }) {
    const [currentImg, setCurrentImg] = useState(0);
    function nextImg() {
        if (currentImg === pictures.length - 1) {
            setCurrentImg(0);
        } else {
            setCurrentImg(currentImg + 1);
        }
    };
    function previousImg() {
        if (currentImg === 0) {
            setCurrentImg(pictures.length - 1);
        } else {
            setCurrentImg(currentImg - 1);
        }
    };
    return (
        <div className='carousel'>
            <img
                src={pictures[currentImg]}
                alt={title}
                className='img-logement'
            />
            {pictures.length > 1 && (
            <>  
                <img
                    src={ArrowLeft}
                    onClick={previousImg}
                    alt="Image précédente"
                    className='carousel-arrow left'
                />
                <img
                    src={ArrowRight}
                    onClick={nextImg}
                    alt="Image suivante"
                    className='carousel-arrow right'
                />
                <span className='carousel-counter'>
                    {currentImg + 1}/{pictures.length}
                </span>
            </>
            )}  
        </div>
    );
}

export default Carousel;