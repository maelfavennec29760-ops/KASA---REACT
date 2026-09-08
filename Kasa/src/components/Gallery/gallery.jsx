
import { useEffect, useState } from 'react';
import Card from '../Card/card.jsx'
import './gallery.scss'

function Gallery() {

    const [logements, setLogements] = useState([]);
    useEffect(() => {
        async function fetchLogements() {
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
         fetchLogements();
}, []);

    return (
        <section className="gallery container">
            {logements.map((logement) => (
                <Card  key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
            ))}
        </section>
    )
}


export default Gallery;