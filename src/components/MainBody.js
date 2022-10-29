import Carousel from "./Carousel";
import Properties from "./Properties";
import React, { useState, useEffect } from "react";

function MainBody() {

    const [properties, setProperties] = useState(null);
    const [filterText, setFilterText] = useState("");

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

    function SearchBar({ filterText }) {
        return (
            <div className="input-group justify-content-center">
                <div className="form-outline">
                    <input type="search" id="form1" value={filterText} onChange={(e) => setFilterText(e.target.value)} className="form-control" placeholder="Search for Property" />
                </div>
            </div>
        );
    }

    return (
        <div>
            <Carousel></Carousel>
            <br />
            <h1 className="popular-property">Popular Properties</h1>
            <br></br>
            <SearchBar filterText={filterText}></SearchBar>
            <br></br>
            {properties && <Properties properties={properties} filterText={filterText}></Properties>}
        </div>

    );
}

export default MainBody;