import React, { useEffect, useState } from "react";

function AddProperty() {
  const [inputValues, setInputValue] = useState({
    img: "",
    title: "",
    description: "",
    city: "",
    state: "",
    country: "",
    nightlyFee: "",
    serviceFee: "",
    cleaningFee: "",
    amenities: "",
    bedrooms: "",
    guests: "",
    availabilityFrom: "",
    availabilityTo: "",
  });

  const [validation, setValidation] = useState({
    img: "",
    title: "",
    description: "",
    city: "",
    state: "",
    country: "",
    nightlyFee: "",
    serviceFee: "",
    cleaningFee: "",
    amenities: "",
    bedrooms: "",
    guests: "",
    availabilityFrom: "",
    availabilityTo: "",
  });

  //handle submit updates
  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }

  const checkValidation = () => {
    let errors = validation;

    //img validation
    if (!inputValues.img) {
        errors.img = "This field is required";
    } else {
        errors.img = "";
    }

    //title validation
    if (!inputValues.title.trim()) {
      errors.title = "This field is required";
    } else {
      errors.title = "";
    }
    
    //description validation
    if (!inputValues.description.trim()) {
      errors.description = "This field is required";
    } else {
      errors.description = "";
    }

    //city validation
    if (!inputValues.city.trim()) {
        errors.city = "This field is required";
    } else {
        errors.city = "";
    }

    //state validation
    if (!inputValues.state.trim()) {
        errors.state = "This field is required";
    } else {
        errors.state = "";
    }

    //country validation
    if (!inputValues.country.trim()) {
        errors.country = "This field is required";
    } else {
        errors.country = "";
    }
    
    //nightlyFee validation
    if (!inputValues.nightlyFee.trim()) {
        errors.nightlyFee = "This field is required";
    } else {
        errors.nightlyFee = "";
    }

    //serviceFee validation
    if (!inputValues.serviceFee.trim()) {
        errors.serviceFee = "This field is required";
    } else {
        errors.serviceFee = "";
    }

    //cleaningfee validation
    if (!inputValues.cleaningFee.trim()) {
        errors.cleaningFee = "This field is required";
    } else {
        errors.cleaningFee = "";
    }

    //amenities validation
    if (!inputValues.amenities.trim()) {
        errors.amenities = "This field is required";
    } else {
        errors.amenities = "";
    }

    //bedrooms validation
    if (!inputValues.bedrooms.trim()) {
        errors.bedrooms = "This field is required";
    } else {
        errors.bedrooms = "";
    }

    //guests validation
    if (!inputValues.guests.trim()) {
        errors.guests = "This field is required";
    } else {
        errors.guests = "";
    }

    //availabilityFrom validation
    if (!inputValues.availabilityFrom.trim()) {
        errors.availabilityFrom = "This field is required";
    } else {
        errors.availabilityFrom = "";
    }

    //availabilityTo validation
    if (!inputValues.availabilityTo.trim()) {
        errors.availabilityTo = "This field is required";
    } else {
        errors.availabilityTo = "";
    }

    setValidation(errors);
  };

  useEffect(() => {
    checkValidation();
  }, [inputValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="sign-up-form">
        <form id="registrationForm" action="/" method="POST" onSubmit={handleSubmit}>

            <div className="form-control">
                <label>Property Images</label>
                <input
                type="file"
                name="img"
                id="img"
                accept="image/jpg"
                onChange={(e) => handleChange(e)}
                value={inputValues.title}
                />
                {validation.title && <p>{validation.title}</p>}
            </div>
          
            <div className="form-control">
                <label>Property title</label>
                <input
                type="text"
                name="title"
                id="title"
                placeholder="Property title"
                onChange={(e) => handleChange(e)}
                value={inputValues.title}
                />
                {validation.title && <p>{validation.title}</p>}
            </div>
          
            <div className="form-control">
                <label>Description</label>
                <input
                type="text"
                name="description"
                id="description"
                placeholder="Please give a brief summary of your property"
                onChange={(e) => handleChange(e)}
                value={inputValues.description}
                />
                {validation.description && <p>{validation.description}</p>}
            </div>
            
            <div className="form-control">
                <label>Property Location</label>
                <input
                type="text"
                name="city"
                id="city"
                placeholder="City"
                onChange={(e) => handleChange(e)}
                value={inputValues.city}
                />
                {validation.city && <p>{validation.city}</p>}
            </div>

            <div className="form-control">
                <label>Per Night Fee</label>
                <input
                type="number"
                name="nightlyFee"
                id="nightlyFee"
                placeholder="in USD"
                onChange={(e) => handleChange(e)}
                value={inputValues.nightlyFee}
                />
                {validation.nightlyFee && <p>{validation.nightlyFee}</p>}
            </div>

            <div className="form-control">
                <label>Service Fees</label>
                <input
                type="number"
                name="serviceFee"
                id="serviceFee"
                placeholder="in USD"
                onChange={(e) => handleChange(e)}
                value={inputValues.serviceFee}
                />
                {validation.serviceFee && <p>{validation.serviceFee}</p>}
            </div>

            <div className="form-control">
                <label>cleaning Fees</label>
                <input
                type="number"
                name="cleaningFee"
                id="cleaningFee"
                placeholder="in USD"
                onChange={(e) => handleChange(e)}
                value={inputValues.cleaningFee}
                />
                {validation.cleaningFee && <p>{validation.cleaningFee}</p>}
            </div>

            <div className="form-control">
                <label>Amenities</label>
                <input
                type="text"
                name="amenities"
                id="amenities"
                placeholder="List all the amenities your property can provide."
                onChange={(e) => handleChange(e)}
                value={inputValues.amenities}
                />
                {validation.amenities && <p>{validation.amenities}</p>}
            </div>

            <div className="form-control">
                <label>Bedrooms</label>
                <input
                type="number"
                name="bedrooms"
                id="bedrooms"
                placeholder=""
                onChange={(e) => handleChange(e)}
                value={inputValues.bedrooms}
                />
                {validation.bedrooms && <p>{validation.bedrooms}</p>}
            </div>

            <div className="form-control">
                <label>Guests</label>
                <input
                type="number"
                name="guests"
                id="guests"
                placeholder=""
                onChange={(e) => handleChange(e)}
                value={inputValues.guests}
                />
                {validation.guests && <p>{validation.guests}</p>}
            </div>

            <div className="form-control">
                <label>Availabile from</label>
                <input
                type="date"
                name="availabilityFrom"
                id="availabilityFrom"
                onChange={(e) => handleChange(e)}
                value={inputValues.availabilityFrom}
                />
                {validation.availabilityFrom && <p>{validation.availabilityFrom}</p>}
            </div>

            <div className="form-control">
                <label>Availabile till</label>
                <input
                type="date"
                name="availabilityTo"
                id="availabilityTo"
                onChange={(e) => handleChange(e)}
                value={inputValues.availabilityTo}
                />
                {validation.availabilityTo && <p>{validation.availabilityTo}</p>}
            </div>

            <button type="submit" id="submit-button">submit</button>

        </form>
      </div>
    </div>
  );
}

export default AddProperty;
