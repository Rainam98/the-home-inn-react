import Carousel from "./Carousel";
import Properties from "./Properties";
import React, { useState, useEffect } from "react";

function MainBody({ filterText }) {

    const [properties, setProperties] = useState(null);


    useEffect(() => {
        const getProperties = () => {
            fetch("properties.json", {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then(res => res.json())
                .then((data) => {
                    setProperties(data);
                });
        }

        getProperties()
    }, [])

    return (
        <div>
            <Carousel></Carousel>
            <br />
            <h1 className="popular-property">Popular Properties</h1>
            <br></br>
            {properties && <Properties properties={properties} filterText={filterText}></Properties>}
        </div>

    );
}

export default MainBody;