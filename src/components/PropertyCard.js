import '../main.css';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


const PropertyCard = ({ property, isFavourite }) => {

    const [showDetails, setShowDetails] = useState(false);
    const propertyTitle = property.title
    var propertyId = ''
    const navigate = useNavigate();
    

    function handleMoreDetails() {
        localStorage.setItem("property", JSON.stringify(property))
        localStorage.setItem("ratePropertyTitle", property.title);
        localStorage.setItem("ratePropertyImage", property.imgSrc);

        
        const queryString = `${property._id}`
        fetch(`review/${queryString}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'GET',
        })
            .then(res => {
                if (!res.ok) {

                } else {
                    return res.json()
                }

            })
            .then((data) => {

                
                
                localStorage.setItem("reviews", JSON.stringify(data));
                navigate("/propertydetails")
            });

        // setShowDetails(!showDetails);
        
        
       

    }

    function handleAddFavorites() {

        const propertyInput = {title: propertyTitle}
            fetch("properties/title", {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(propertyInput),
            })
                .then(res => {
                    if (!res.ok) {
                        
                    } else {
                        return res.json()
                    }
                    
                })
                .then((data) => {
    
                    propertyId = data.propertyId;
    
                });


        // setFavorite(true);
        const email = localStorage.getItem("user");
        const userInput = { emailId: email }
        var userIdToPass = ''

        fetch("user/emailId", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(userInput),
        })
            .then(res => {
                if (!res.ok) {

                } else {
                    return res.json()
                }

            })
            .then((data) => {

                userIdToPass = data.userId;
                
                const inputdata = { userId: userIdToPass, propertyId: propertyId }
                const getProperties = () => {
                    fetch('favourites/add', {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        method: 'POST',
                        body: JSON.stringify(inputdata)
                    })
                        .then(res => res.json())
                        .then((data) => {
                            isFavourite = true
                            navigate('/favorites')
                        });
                }

                getProperties()

            });

    }
    function handleRemoveFavorites() {

        // setFavorite(false);
        const propertyInput = {title: propertyTitle}
            fetch("properties/title", {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(propertyInput),
            })
                .then(res => {
                    if (!res.ok) {
                        
                    } else {
                        return res.json()
                    }
                    
                })
                .then((data) => {
    
                    propertyId = data.propertyId;
    
                });


        // setFavorite(true);
        const email = localStorage.getItem("user");
        const userInput = { emailId: email }
        var userIdToPass = ''

        fetch("user/emailId", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(userInput),
        })
            .then(res => {
                if (!res.ok) {

                } else {
                    return res.json()
                }

            })
            .then((data) => {

                userIdToPass = data.userId;
                
                const inputdata = { userId: userIdToPass, propertyId: propertyId }
                const getProperties = () => {
                    fetch('favourites/remove', {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        method: 'POST',
                        body: JSON.stringify(inputdata)
                    })
                        .then(res => res.json())
                        .then((data) => {
                            isFavourite = false
                            window.location.reload(false)
                        });
                }

                getProperties()

            });
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
                        {(isFavourite) ? <button onClick={() => handleRemoveFavorites()} className="btn mx-auto">Remove from Favorites</button> :
                            <button onClick={() => handleAddFavorites()} className="btn mx-auto">Add To Favorites</button>}
                    </div>
                    <br></br>
                    <div className='d-flex'>
                        <button onClick={() => handleRating()} className="btn mx-auto">Rate Property</button>
                    </div>

                </div>
            </div>
        </div>

    );


}

export default PropertyCard;