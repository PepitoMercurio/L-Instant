import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../Style/scss/Footer/style.scss";

export default function Footer(props) {
    return (
        <div className="Footer">
            <div className="box"></div>
            <div className="button">
            <FontAwesomeIcon className="Card-download" icon={props.icon} />
            </div>
        </div>
    )
}