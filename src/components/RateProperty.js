import React, { useState, useEffect } from "react";
import Footer from './Footer';
import Header from './Header';
import Sidemenu from './Sidemenu';

function RateProperty() {

    const propertyTitle = localStorage.getItem("ratePropertyTitle");
    const propertyImage = localStorage.getItem("ratePropertyImage");

    const email = localStorage.getItem('user');

    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const [userId, setUserId] = useState('');
    const [propertyId, setPropertyId] = useState('');
    const [success, setSuccess] = useState(false);
    

    const handleSubmit = (e) => {
        e.preventDefault();


        const userInput = {emailId: email}
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
                    setSuccess(false);
                } else {
                    return res.json()
                }
                
            })
            .then((data) => {

                setUserId(data.userId);

            });


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
                        setSuccess(false);
                    } else {
                        return res.json()
                    }
                    
                })
                .then((data) => {
    
                    setPropertyId(data.propertyId);
    
                });

        const input = { userId: userId, propertyId: propertyId, comment: comment, rating: rating};
        fetch("review", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(input),
            
        })
            .then(res => {
                
                if (!res.ok) {
                    setSuccess(false);
                } else {
                    return res.json()
                }
            })
            .then((data) => {

                setSuccess(true);
                
                setComment('');
                setRating(0);


            });
    }

    return (
        <div>
            <div>
                <div className="wrapper">
                    <Sidemenu></Sidemenu>
                    <div id="content">
                        <Header></Header>
                        <div className="property-image">
                            <img src={propertyImage} alt="Unable to Load"></img>
                        </div>
                        <h1 className="popular-property">Add Review for {propertyTitle}</h1>
                        {(success) === true ? <h4 className="success">Your Review was added successfully!!</h4> : null }
                        <div className="review-form-container">
                        <form className="review-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="email" value={email}  className="form-control" disabled id="exampleInputEmail1" placeholder="Your Email"/>
                            </div>
                            <div className="form-group">
                                
                                <input type="text" value={propertyTitle} className="form-control" disabled id="exampleInputProperty1" placeholder="Property you are rating"/>
                            </div>
                            <div className="form-group">
                                <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="form-control" id="exampleInputComment1" placeholder="Add Comments here"/>
                            </div>
                            <div className="form-group">
                                
                                <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} step={0.1} className="form-control" id="formControlRating" max={5} placeholder="Add Ratings here"/>
                            </div>
                            <button type="submit" className="btn">Submit Review</button>
                            </form>
                            </div>
                        <br></br>
                    </div>
                </div>

                <Footer></Footer>
            </div>




        </div>

    );
}

export default RateProperty;