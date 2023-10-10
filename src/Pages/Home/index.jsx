import React from "react";
import Carousel from "../../Componants/Carousel";
import List from "../../Componants/List";
import Footer from "../../Componants/Footer";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
    return (
        <div>
            <Footer icon={faPlus}/>
            <Carousel/>
            <List/>
            
        </div>
    )
}