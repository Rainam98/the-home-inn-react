import Properties from "./Properties";
import React, { useState, useEffect } from "react";
import Footer from './Footer';
import Header from './Header';
import Sidemenu from './Sidemenu';

function Favorites() {
    const [properties, setProperties] = useState([]);
    const [userId, setUserId] = useState('');

    const email = localStorage.getItem("user");
    const userInput = { emailId: email }
    useEffect(() => {
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

                setUserId(data.userId);
                const userIdToPass = data.userId;
                console.log("State userId: " + { userId });
                console.log(userIdToPass);

                const inputdata = { userId: userIdToPass }
                const getProperties = () => {
                    fetch('favourites/view', {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        method: 'POST',
                        body: JSON.stringify(inputdata)
                    })
                        .then(res => res.json())
                        .then((data) => {
                            setProperties(data);
                        });
                }

                getProperties()

            });



    }, [])



    return (
        <div>
            <div className="wrapper">
                <Sidemenu></Sidemenu>
                <div id="content">
                    <Header></Header>
                    <div>
                        <h1 className="popular-property">Favorite Properties</h1>
                        <br></br>
                        {properties && <Properties properties={properties} isFavorite={true}></Properties>}

                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>




    );
}

export default Favorites;