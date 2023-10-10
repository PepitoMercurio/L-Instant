import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faShareNodes, faHeart } from '@fortawesome/free-solid-svg-icons'
import "../../Style/scss/Card/style.scss"

export default function Card(props) {
    const navigate = useNavigate();
    const imageUrl = 'http://localhost:3001/image/' + props.imageName;

    const handleCardClick = () => {
        navigate('/' + props.id);
    };

    const handleShare = () => {
        const currentURL = window.location.href + props.id;
    
        navigator.clipboard.writeText(currentURL)
          .then(() => alert('Lien copié avec succès !'))
          .catch(error => console.error('Erreur lors de la copie du lien :', error));
    };

    const handleDownload = () => {
        if (props.imageName) {
            const downloadURL = `http://localhost:3001/download/${props.imageName}`;
            window.location.href = downloadURL;
        } else {
            console.error('Aucune donnée d\'image disponible.');
        }
    };

    return (
        <div className="Card" onClick={handleCardClick}>
            <img src={imageUrl} alt={props.id}/>
            <div className="icons">
            <FontAwesomeIcon className="Card-download" icon={faDownload} onClick={handleDownload} />
                <FontAwesomeIcon className="Card-Like" icon={faHeart} />
                <FontAwesomeIcon className="Card-Share" icon={faShareNodes} onClick={handleShare} />
            </div>
        </div>
    )
}