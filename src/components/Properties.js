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

        <div className="accordion" id="accordionPanelsStayOpenExample">
            {
                properties.map((property) => {

                    if (
                        property.title.toLowerCase().indexOf(
                            filterText.toLowerCase()
                        ) === -1 || property.city.toLowerCase().indexOf(
                            filterText.toLowerCase()
                        ) === -1
                    ) {
                        return (<div></div>);
                    }


                    return (
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button btn" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                    aria-controls="panelsStayOpen-collapseOne">
                                    {property.title}
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                                aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body">
                                    <div className="card">
                                        <img src={property.imgSource} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col-md-10">
                                                    <p className="card-text"><b>Location -</b> {property.city}, {property.state}</p>

                                                    <p className="card-text"><b>Rates from -</b> {property.nightlyFee}$ per night.</p>
                                                    <p className="card-text"><b>Accommodates - </b> {property.guests} guests</p>
                                                    {(showDetails && property.id === showPropertyDetails) ? <p className="card-text"><b>No. of Bedrooms - </b> {property.bedrooms}</p> : null}
                                                    {(showDetails && property.id === showPropertyDetails) ? <p className="card-text"><b>Description - </b> {property.description}</p> : null}
                                                    {(showDetails && property.id === showPropertyDetails) ? <p className="card-text"><b>Availibility - </b> {property.dateAvailability}</p> : null}
                                                    {(showDetails && property.id === showPropertyDetails) ? <p className="card-text"><b>Amenities - </b> {property.amenities}</p> : null}
                                                    {(showDetails && property.id === showPropertyDetails) ? <p className="card-text"><b>Service Fees - </b> {property.serviceFee}$ per night</p> : null}
                                                    {(showDetails && property.id === showPropertyDetails) ? <p className="card-text"><b>cleaning Fees - </b> {property.cleaningFee}$ per night</p> : null}

                                                </div>
                                                <div className="col-md-2 pt-3">

                                                    <button onClick={() => handleMoreDetails(property)} className="btn">More Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            <br></br>
        </div>
    );
}

export default Properties;