import React,{useState, useEffect} from "react";
import Card from "../Card";
import "../../Style/scss/Carousel/style.scss"

export default function Carousel() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/mostLiked');
            const data = await response.json();
            setImages(data);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
        };

        fetchData();
    }, []);

    return (
        <div className="Carousel">
            {images.map((image) => (
                <Card imageName={image.image} id={image.id}/>
            ))}
        </div>
    )
}