import React, { useEffect, useState } from "react";
import { useNavigate} from 'react-router-dom';

function SignUp() {

  const [error, setError] = useState(false);
  // let history = useHistory();
  const navigate = useNavigate();
  const [inputValues, setInputValue] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    password: "",
    confirmPassword: "",
    isHost:false,
  });

  const [validation, setValidation] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    password: "", 
    confirmPassword: "",
  });

  //handle submit updates
  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }

  const checkValidation = () => {
    let errors = validation;

    //first Name validation
    if (!inputValues.fName.trim()) {
      errors.fName = "This field is required";
    } else {
      errors.fName = "";
    }
    
    //last Name validation
    if (!inputValues.lName.trim()) {
      errors.lName = "This field is required";
    } else {
      errors.lName = "";
    }

    // email validation
    const emailCond =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    if (!inputValues.email.trim()) {
      errors.email = "This field is required";
    } else if (!inputValues.email.match(emailCond)) {
      errors.email = "Please input a valid email address";
    } else {
      errors.email = "";
    }

    // mobile number validation
    if (!inputValues.phone) {
      errors.phone = "This field is required";
    } else {
      errors.phone = "";
    }


    // gender validation
    if (!inputValues.gender) {
      errors.gender = "This field is required";
    } else {
      errors.gender = "";
    }

    // dob validation
    if (!inputValues.dob) {
      errors.dob = "This field is required";
    } else {
      errors.dob = "";
    }


    //password validation
    const cond1 = "/^(?=.*[a-z]).{6,20}$/";
    const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
    const cond3 = "/^(?=.*[0-9]).{6,20}$/";
    const password = inputValues.password;
    if (!password) {
      errors.password = "This field is required";
    } else if (password.length < 6) {
      errors.password = "Password must be longer than 6 characters";
    } else if (password.length >= 20) {
      errors.password = "Password must shorter than 20 characters";
    } else if (!password.match(cond1)) {
      errors.password = "Password must contain at least one lowercase";
    } else if (!password.match(cond2)) {
      errors.password = "Password must contain at least one capital letter";
    } else if (!password.match(cond3)) {
      errors.password = "Password must contain at least a number";
    } else {
      errors.password = "";
    }

    //matchPassword validation
    if (!inputValues.confirmPassword) {
      errors.confirmPassword = "Please confirm your passwords";
    } else if (inputValues.confirmPassword !== inputValues.Password) {
      errors.confirmPassword = "Password does not match confirmation password";
    } else {
      errors.password = "";
    }

    setValidation(errors);
  };

  useEffect(() => {
    checkValidation();
  }, [inputValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = { firstName:inputValues.fName, lastName:inputValues.lName, gender:inputValues.gender, dob:inputValues.dob,
      password:inputValues.password, emailId:inputValues.email, mobileNo:inputValues.phone, isHost: inputValues.isHost };
      fetch("usersignup", {
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }, 
          body : JSON.stringify(input),
          method: 'POST'
      })
          .then(res => res.json())
          .then((data) => {
            if(data === "There was an issue adding the user. Please try again later!!"){
                setError(true);
            }else{
                localStorage.setItem("user", data);
                localStorage.setItem("isHost", data.isHost);
                setError(false)
                navigate("/home");
            }
          });
  };

  return (
    <div>
      <div className="sign-up-form">
        <form id="registrationForm" action="/" method="POST" onSubmit={handleSubmit}>
        {(error) === true ? <h2 className="error">There was some error in signup. Please try again</h2> : null }
          <div className="form-control">
            <label>First Name</label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="First Name"
              onChange={(e) => handleChange(e)}
              value={inputValues.fName}
            />
            {validation.fName && <p>{validation.fName}</p>}
          </div>
          
          <div className="form-control">
            <label>Last Name</label>
            <input
              type="text"
              name="lName"
              id="lName"
              placeholder="Last Name"
              onChange={(e) => handleChange(e)}
              value={inputValues.lName}
            />
            {validation.lName && <p>{validation.lName}</p>}
          </div>
          
          <div className="form-control">
            <label>Email ID</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email ID"
              onChange={(e) => handleChange(e)}
              value={inputValues.email}
            />
            {validation.email && <p>{validation.email}</p>}
          </div>

          <div className="form-control">
            <label>Mobile Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="XXX-XXX-XXXX"
              onChange={(e) => handleChange(e)}
              value={inputValues.phone}
            />
            {validation.phone && <p>{validation.phone}</p>}
          </div>

          <div className="form-control">
            <label>Gender</label>
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              id="male"
              onChange={(e) => handleChange(e)}
              value={inputValues.gender}
            />
            <label>Female</label>
            <input
              type="radio"
              name="gender"
              id="female"
              onChange={(e) => handleChange(e)}
              value={inputValues.gender}
            />
            {validation.gender && <p>{validation.gender}</p>}
          </div>

          <div className="form-control">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              id="dob"
              onChange={(e) => handleChange(e)}
              value={inputValues.dob}
            />
            {validation.dob && <p>{validation.dob}</p>}
          </div>

          <div className="form-control">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => handleChange(e)}
              value={inputValues.password}
              required
            />
            {validation.password && <p>{validation.password}</p>}
          </div>

          <div className="form-control">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={(e) => handleChange(e)}
              value={inputValues.confirmPassword}
              required
            />
          </div>

          <input type="checkbox" name="becomehost" value={inputValues.isHost}  onChange={(e) => handleChange(e)}></input>
          <label>Become a host</label>

          <button type="submit" id="submit-button">
            submit
          </button>
          
          <span className="form-input-login">
            Already have an account? Login <a href="/">here</a>
          </span>

        </form>
      </div>
    </div>
  );
}

export default SignUp;
