import React, { useState } from "react";

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>Email ID</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" name="email" />
                <label>Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" name="password" />
                <input type="checkbox" name="becomehost" value="becomehost"></input>
                <label>Become a host</label><br></br>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default Login; 