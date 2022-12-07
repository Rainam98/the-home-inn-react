import '../main.css';
import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';


const PropertyCard = ({ property }) => {

    const [showDetails, setShowDetails] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const navigate = useNavigate();

    function handleMoreDetails() {

        setShowDetails(!showDetails);

    }

    function handleAddFavorites() {

        setFavorite(true);


    }
    function handleRemoveFavorites() {

        setFavorite(false);
    }

    function handleRating() {
       
        localStorage.setItem("ratePropertyTitle", property.title);
        localStorage.setItem("ratePropertyImage", property.imgSrc);
        navigate("/rateproperty")
    }

    return (
        <div className="col-md-4">
            <div className="card">
                <img src={property.imgSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    {/* <div className='row'> */}
                    <h5 className="card-title">{property.title}</h5>
                    {/* <i className="bi bi-star col-md-3 card-star">{property.rating}</i> */}

                    {/* </div> */}
                    <br></br>
                    <p className="card-text"><b>Location -</b> {property.address.city}, {property.address.state}</p>
                    <p className="card-text"><b>Rates from -</b> {property.nightlyFee}$ per night.</p>
                    <p className="card-text"><b>Accommodates - </b> {property.guests} guests</p>
                    <p className="card-text"><b>Property Type - </b> {property.propertyType}</p>
                    {(showDetails) ? <p className="card-text"><b>No. of Bedrooms - </b> {property.bedrooms}</p> : null}
                    {(showDetails) ? <p className="card-text"><b>Description - </b> {property.description}</p> : null}
                    {(showDetails) ? <p className="card-text"><b>Availibility - </b> {property.dateAvailability}</p> : null}
                    {(showDetails) ? <p className="card-text"><b>Amenities - </b> {property.amenities}</p> : null}
                    {(showDetails) ? <p className="card-text"><b>Service Fees - </b> {property.serviceFee}$ per night</p> : null}
                    {(showDetails) ? <p className="card-text"><b>Cleaning Fees - </b> {property.cleaningFee}$ per night</p> : null}

                    <div className='d-flex'>

                        <button onClick={() => handleMoreDetails()} className="btn mx-auto">More Details</button>
                    </div>
                    <br></br>
                    <div className='d-flex'>
                        {(favorite) ? <button onClick={() => handleRemoveFavorites()} className="btn mx-auto">Remove from Favorites</button> :
                            <button onClick={() => handleAddFavorites()} className="btn mx-auto">Add To Favorites</button>}
                    </div>
                    <br></br>
                    <div className='d-flex'>
                        <button onClick={() => handleRating()} className="btn mx-auto">Rate Property</button>
                    </div>



                    {/* <div className='d-flex'>
                    <button onClick={() => handleMoreDetails()} className="btn mx-auto">More Details</button>
                    </div>
                    <br></br>
                    <div className='d-flex'>
                    {(favorite) ? <button onClick={() => handleRemoveFavorites({property})} className="btn mx-auto">Remove from Favorites</button> :
                    <button onClick={() => handleAddFavorites({property})} className="btn mx-auto">Add To Favorites</button>}
                    </div> */}
                </div>
            </div>
        </div>

    );


}

export default PropertyCard;