import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import RatingStar from '../../assets/stars.png';
import RatingStarNull from '../../assets/stars-null.png';
import './housing.scss';
import Carousel from '../../components/Carousel/carousel.jsx'
import Collapse from '../../components/Collapse/collapse.jsx';

function Housing() {
    // Carrousel
    const [currentImg, setCurrentImg] = useState(0);
    const { id } = useParams();
    const [logements, setLogement] = useState(null);

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

    // Les logements ne sont pas encore chargés
    if (logements === null) {
        return null;
    }

    // Recherche du logement correspondant à l'id présent dans l'URL
    const logement = logements.find(
        (logement) => logement.id === id
    );

    // Si aucun logement ne correspond à l'id
    if (!logement) {
        return <Navigate to="/error404" replace />;
    }

    const ratingStars = [1, 2, 3, 4, 5];
    const ratingNumber = parseInt(logement.rating, 10);

    return (
        <section className='logement container'>
            <article className='logement-card'>
            <Carousel
                pictures={logement.pictures}
                title={logement.title}
            />
                <div className='logement-card-content'>
                    <div className='logement-card-content-left'>
                        <h2>{logement.title}</h2>
                        <p>{logement.location}</p>

                        <div className='tags'>
                            {logement.tags.map((tag) => (
                                <span key={tag} className='tag'>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className='logement-card-content-right'>
                        <div className='host'>
                            <div className='host-name'>
                                {logement.host.name
                                    .split(" ")
                                    .map((part, index) => (
                                        <p key={index}>{part}</p>
                                    ))}
                            </div>

                            <img
                                src={logement.host.picture}
                                alt={logement.host.name}
                            />
                        </div>

                        <div className='rating'>
                            {ratingStars.map((star) => (
                                <img
                                    src={
                                        star <= ratingNumber
                                            ? RatingStar
                                            : RatingStarNull
                                    }
                                    className='rating-star'
                                    key={star}
                                    alt="rating star"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="collapse-container">
                    <Collapse
                        title="Description"
                        content={logement.description}
                    />
                    <Collapse
                        title="Équipements"
                        content={logement.equipments}
                    />
                </div>
            </article>
        </section>
    );
}

export default Housing;