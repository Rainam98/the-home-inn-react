import '../main.css';
import React from "react";
import PropertyCard from './PropertyCard'


const Properties = ({ properties }) => {


    return (

        <div className='row'>
            {
                properties.map((property) => {

                    return <PropertyCard property={property}></PropertyCard>

                }
                )}
            <br></br>
        </div>

    );
}

export default Properties;