import '../main.css';
import React, { useState } from "react";


const Properties = ({ properties, filterText }) => {

    const [showDetails, setShowDetails] = useState(false);

    const [showPropertyDetails, setShowPropertyDetails] = useState(0);

    function handleMoreDetails(property) {

        setShowDetails(!showDetails);
        setShowPropertyDetails(property.id);
    }

    return (

        <div className='row'>
            {
                properties.map((property) => {

                    if (!(property.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
                        || !(property.city.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
                    ) {
                        return (
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={property.imgSource} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <div className='row'>
                                        <h5 className="card-title col-md-9">{property.title}</h5>
                                        <i class="bi bi-star col-md-3 card-star">  {property.rating}</i>
                                        
                                        </div>
                                        <br></br>
                                        <p className="card-text"><b>Location -</b> {property.city}, {property.state}</p>
                                        <p className="card-text"><b>Rates from -</b> {property.nightlyFee}$ per night.</p>
                                        <p className="card-text"><b>Accommodates - </b> {property.guests} guests</p>
                                        {(showDetails && property.id === showPropertyDetails) ? <p className="card-text"><b>No. of Bedrooms - </b> {property.bedrooms}</p> : null}
                                        {(showDetails && property.id === showPropertyDetails) ? <p className="card-text"><b>Description - </b> {property.description}</p> : null}
                                        {(showDetails && property.id === showPropertyDetails) ? <p className="card-text"><b>Availibility - </b> {property.dateAvailability}</p> : null}
                                        {(showDetails && property.id === showPropertyDetails) ? <p className="card-text"><b>Amenities - </b> {property.amenities}</p> : null}
                                        {(showDetails && property.id === showPropertyDetails) ? <p className="card-text"><b>Service Fees - </b> {property.serviceFee}$ per night</p> : null}
                                        {(showDetails && property.id === showPropertyDetails) ? <p className="card-text"><b>Cleaning Fees - </b> {property.cleaningFee}$ per night</p> : null}

                                        <button onClick={() => handleMoreDetails(property)} className=" btn">More Details</button>
                                    </div>
                                </div>
                            </div>

                        );
                    }
                    
                }
                )}
            <br></br>
        </div>

    );
}

export default Properties;