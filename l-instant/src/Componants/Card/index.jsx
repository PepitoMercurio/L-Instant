import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faShareNodes, faHeart } from '@fortawesome/free-solid-svg-icons'
import "../../Style/scss/Card/style.scss"

export default function Card(props) {
    return (
        <div className="Card">
            <img src="https://images.cnrs.fr/system/files/styles/full_width_mobile/private/media/images/2011/07/CNRS_20110001_1937_683.jpg?h=b8e51141&itok=D7vgv8W2" alt={props.alt}/>
            <div className="icons">
                <FontAwesomeIcon className="Card-download" icon={faDownload} />
                <FontAwesomeIcon className="Card-Like" icon={faHeart} />
                <FontAwesomeIcon className="Card-Share" icon={faShareNodes} />
            </div>
        </div>
    )
}