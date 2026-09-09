import { useState } from "react";
import ArrowCollapse from '../../assets/arrow-collapse.png'
import './collapse.scss'

function Collapse({ title, content }) {
    const [ isOpen, setIsOpen ] = useState(false);
    function toggleCollapse() {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <div className="collapse">
            <button onClick={toggleCollapse}>
                <span>{title}</span>
                <img src={ArrowCollapse} alt="Fleche collapse" className={isOpen ? "arrow open" : "arrow"}/>
            </button>
                <div className={`collapse-content ${isOpen ? "open" : ""}`}>
                    {Array.isArray(content) ? (
                        <ul>
                            {content.map((item, index) => (
                            <li key={index}>{item}</li>
                            ))}
                        </ul>
                        ) : (
                        <p>{content}</p>
                        )}
                </div>
        </div>
    )
}

export default Collapse;