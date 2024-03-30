import React, { useState } from 'react';
import "./Css/login.css";
import validateEmail from '../Components/Assets/validEmali';

const LoginSign = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (name !== "" && name.length > 2 && validateEmail(email) && email !== "" && password !== "" && password.length > 8) {
            alert(" Congratulations you have been successfully logged in \n Thank you.");
            setName("");
            setEmail("");
            setPassword("");
        } else {
            alert(" Your Name and Your Email is Requierd\n The Password must be more than 8 Character.");
        }
    };

    return (
        <div className='sign-up'>
            <div className="container">
                <h1>Sign Up</h1>
                <div className="fildes">
                    <input type="text" placeholder='Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input type="email" placeholder='Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="password" placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="login-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By Countiuing, i agree to the terms of use & privacy policy</p>
                </div>
                <button onClick={handleSubmit} >Sign Up</button>
                <div className="sign-up-login">Already have an account? <span>Login</span></div>
            </div>
        </div>
    )
}

export default LoginSign;