import React from "react";
import Image from "../../Componants/Image";
import List from "../../Componants/List";
import Footer from "../../Componants/Footer";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


export default function ImagePage() {
    return (
        <div>
            <Footer icon={faArrowLeft}/>
            <Image/>
            <List/>
            
        </div>
    )
}