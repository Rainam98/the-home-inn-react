import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(false);
    // let history = useHistory();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const input = { emailId: email, password: pass};
        fetch("user/login", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            body : JSON.stringify(input),
            method: 'POST'
        })
            .then(res => {
                console.log(res.ok)
                if(!res.ok){
                    setError(true);
                    setEmail('');
                    setPass('');
                }else{
                    return res.json()
                }
            })
            .then((data) => {

                localStorage.setItem("user", data);
                localStorage.setItem("isHost", data.isHost);
                setError(false)
                navigate("/home");

            });
    }

    return (
        <div className="login-container" onSubmit={handleSubmit}>
            {(error) === true ? <h2 className="error">You have entered wrong credentials</h2> : null }
            <h2>Login</h2>
            <form className="login-form">
                <label>Email ID</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@gmail.com" name="email" />
                <label>Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" name="password" />
                <p> Not a User ? <span><Link to="/signup"><label>SignUp</label></Link></span> </p>
                <br></br>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default Login; 