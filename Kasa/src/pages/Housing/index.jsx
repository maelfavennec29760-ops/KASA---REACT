import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import RatingStar from '../../assets/stars.png'
import RatingStarNull from '../../assets/stars-null.png'
import ArrowLeft from '../../assets/arrow-left.png'
import ArrowRight from '../../assets/arrow-right.png'
import ArrowCollapse from '../../assets/arrow-collapse.png'
import './housing.scss'
import Collapse from '../../components/Collapse/collapse.jsx'

function Housing() {
    // caroussel
    const [ currentImg, setCurrentImg ] = useState(0)
    // collapse
    const [ descriptionOpen, setDescriptionOpen ] = useState(false)
    function toggleDescription() {
        setDescriptionOpen((prevState) => !prevState)
    }
    const [ equipmentOpen, setEquipmentOpen ] = useState(false)
    function toggleEquipment() {
        setEquipmentOpen((prevState) => !prevState)
    }
    const { id } = useParams(); 
    const [ logements, setLogement ] = useState([]);
    useEffect(() => {
            async function fetchLogement() {
                try {
                    const response = await fetch("http://localhost:8080/api/properties");
                    if (!response.ok) {
                    throw new Error(
                        `Failed to fetch properties. ${response.status} ${response.statusText}`
                    );
                }
                const data = await response.json();
                setLogement(data);
                } catch (error) {
                console.error(error);
                }
             }
             fetchLogement();
    }, []);
    const logement = logements.find((logement) => logement.id === id)
    // caroussel
    function nextImg() {
        if(currentImg === logement.pictures.length - 1) {
            setCurrentImg(0)
        } else {
            setCurrentImg(currentImg + 1)
        }
    }

    function previousImg() {
        if(currentImg === 0) {
            setCurrentImg(logement.pictures.length - 1)
        } else {
            setCurrentImg(currentImg - 1)
        }
    } 


    if(logement === undefined) {
        return null
    }
    const ratingStars = [1, 2, 3, 4, 5]
    const ratingNumber = parseInt(logement.rating, 10)
    return (
        <section className='logement container'>
            <article className='logement-card'>
                <div className='carousel'>
                    <img src={logement.pictures[currentImg]} alt={logement.title} className='img-logement'/>
                    <img src={ArrowLeft} onClick={previousImg} alt="Image précédente" className='carousel-arrow left' />
                    <img src={ArrowRight} onClick={nextImg} alt="Image suivante" className='carousel-arrow right' />
                    <span className='carousel-counter' >{currentImg + 1}/{logement.pictures.length}</span>
                </div>
                <div className='logement-card-content'>
                    <div className='logement-card-content-left'>
                        <h2>{logement.title}</h2>
                        <p>{logement.location}</p>
                        <div className='tags'>
                            {logement.tags.map((tag) => (
                                <span key={tag} className='tag'>{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className='logement-card-content-right'>
                        <div className='host'>
                            <div className='host-name'>
                            {logement.host.name.split(" ").map((part, index) => (
                                <p key={index}>{part}</p>
                            ))}
                            </div>
                            <img src={logement.host.picture} alt={logement.host.name} />
                        </div>
                        <div className='rating'>
                            {ratingStars.map((star) => (
                                <img src={star <= ratingNumber ? RatingStar : RatingStarNull} className='rating-star' key={star} alt="rating star"/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="collapse-container">
                    <Collapse title="Description" content={logement.description}/>
                    <Collapse title="Équipements" content={logement.equipments}/>
                </div>
            </article>
        </section>
    )
}


export default Housing;