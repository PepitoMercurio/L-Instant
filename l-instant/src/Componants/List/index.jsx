import React, {useState, useEffect} from "react";
import Card from "../Card";
import "../../Style/scss/List/style.scss"

export default function List() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/getImage');
            const data = await response.json();
            setImages(data);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
        };

        fetchData();
    }, []);

    return (
        <div className="List">
            {images.map((image) => (
                <Card imageName={image.image} id={image.id} alt={image.id}/>
            ))}
        </div>
    )
}