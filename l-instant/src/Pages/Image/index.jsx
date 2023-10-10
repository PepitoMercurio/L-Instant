import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../Componants/Image";
import List from "../../Componants/List";
import Footer from "../../Componants/Footer";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


export default function ImagePage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div>
            <Footer icon={faArrowLeft} Click={handleClick}/>
            <Image/>
            <List/>
            
        </div>
    )
}