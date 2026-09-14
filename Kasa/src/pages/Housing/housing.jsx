import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import './housing.scss';
import Carousel from '../../components/Carousel/carousel.jsx'
import Collapse from '../../components/Collapse/collapse.jsx';
import Host from '../../components/Host/host.jsx'
import Rating from '../../components/Rating/rating.jsx'
import Tags from '../../components/Tags/tags.jsx'

function Housing() {
    const { id } = useParams();
    const [logements, setLogements] = useState(null);

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
                setLogements(data);
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
                        <Tags tags={logement.tags}/>
                    </div>

                    <div className='logement-card-content-right'>
                        <Host host={logement.host} />
                        <Rating rating={logement.rating}/>
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