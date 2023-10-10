import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faShareNodes, faHeart } from '@fortawesome/free-solid-svg-icons'
import "../../Style/scss/Image/style.scss"

export default function Image() {
    const { id } = useParams();
    console.log("LIEN : " + id);
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch('http://localhost:3001/getImage/'+ id );
                const data = await response.json();
                setImageData(data);
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImage();
    }, [id]);

    const handleShare = () => {
        const currentURL = window.location.href;
    
        navigator.clipboard.writeText(currentURL)
          .then(() => alert('Lien copié avec succès !'))
          .catch(error => console.error('Erreur lors de la copie du lien :', error));
    };

    const handleDownload = () => {
        if (imageData && imageData.image) {
            const downloadURL = `http://localhost:3001/download/${imageData.image}`;
            window.location.href = downloadURL;
        } else {
            console.error('Aucune donnée d\'image disponible.');
        }
    };

    return (
        <div className="Image">
            {imageData ? (
                <img src={`http://localhost:3001/image/${imageData.image}`} alt={imageData.id} />
            ) : (
                <div className="loading">Chargement en cours...</div>
            )}
            <div className="icons">
                <FontAwesomeIcon className="Card-download" icon={faDownload} onClick={handleDownload} />
                <FontAwesomeIcon className="Card-Like" icon={faHeart} />
                <FontAwesomeIcon className="Card-Share" icon={faShareNodes} onClick={handleShare} />
            </div>
        </div>
    )
}
