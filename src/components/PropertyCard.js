import '../main.css';
import React, { useState } from "react";

const PropertyCard = ({property}) => {

    const [showDetails, setShowDetails] = useState(false);


    function handleMoreDetails() {

        setShowDetails(!showDetails);
        
    }

    return (
        <div className="col-md-4">
            <div className="card">
                <img src={property.imgSource} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className='row'>
                    <h5 className="card-title col-md-9">{property.title}</h5>
                    <i className="bi bi-star col-md-3 card-star">  {property.rating}</i>
                    
                    </div>
                    <br></br>
                    <p className="card-text"><b>Location -</b> {property.city}, {property.state}</p>
                    <p className="card-text"><b>Rates from -</b> {property.nightlyFee}$ per night.</p>
                    <p className="card-text"><b>Accommodates - </b> {property.guests} guests</p>
                    {(showDetails) ? <p className="card-text"><b>No. of Bedrooms - </b> {property.bedrooms}</p> : null}
                    {(showDetails) ? <p className="card-text"><b>Description - </b> {property.description}</p> : null}
                    {(showDetails) ? <p className="card-text"><b>Availibility - </b> {property.dateAvailability}</p> : null}
                    {(showDetails) ? <p className="card-text"><b>Amenities - </b> {property.amenities}</p> : null}
                    {(showDetails) ? <p className="card-text"><b>Service Fees - </b> {property.serviceFee}$ per night</p> : null}
                    {(showDetails) ? <p className="card-text"><b>Cleaning Fees - </b> {property.cleaningFee}$ per night</p> : null}

                    <button onClick={() => handleMoreDetails()} className=" btn">More Details</button>
                </div>
            </div>
        </div>

    );


}

export default PropertyCard;