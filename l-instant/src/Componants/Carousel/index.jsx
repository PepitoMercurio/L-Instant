import React from "react";
import Card from "../Card";
import "../../Style/scss/Carousel/style.scss"

export default function Carousel() {
    return (
        <div className="Carousel">
            <Card alt="1"/>
            <Card alt="2"/>
            <Card alt="3"/>
            <Card alt="4"/>
            <Card alt="5"/>
        </div>
    )
}