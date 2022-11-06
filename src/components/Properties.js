import '../main.css';
import React from "react";
import PropertyCard from './PropertyCard';


const Properties = ({ properties, filterText }) => {

    
    return (

        <div className='row'>
            {
                properties.map((property) => {

                    if (!(property.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
                        || !(property.city.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
                    ) {
                        return(<PropertyCard property = {property}></PropertyCard>);
                        
                    }
                    
                }
                )}
            <br></br>
        </div>

    );
}

export default Properties;