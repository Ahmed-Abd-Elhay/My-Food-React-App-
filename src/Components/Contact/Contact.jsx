import React, { useState } from 'react';
import "./contact.css";
import locationIcon from "../Assets/location-icon.png";
import phoneIcon from "../Assets/phone-icon.png";
import emailIcon from "../Assets/email-photo.jpeg";
import validateEmail from '../Assets/validEmali';

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (name !== "" && name.length > 2 && validateEmail(email) && email !== "" && message !== "" && message.length > 10) {
            alert(" We Received Your Message Successfully \n Thank you.");
            setName("");
            setEmail("");
            setMessage("");
        } else {
            alert(" Your Name and Your Email is Requierd\n The Message must be more than 10 Character.");
        }
    }

    return (
        <div className='contact'>
            <h1>Contact Us</h1>

            <div className="container">

                <div className="info">
                    <h3>Contact Info</h3>
                    <div className="address">
                        <img src={locationIcon} alt="" />
                        <p>23 street abo karam Cairo First Floor</p>
                    </div>
                    <div className="phone">
                        <img src={phoneIcon} alt="" />
                        <p>01234567891</p>
                    </div>
                    <div className="email">
                        <img src={emailIcon} alt="" />
                        <p>My-Food@gmail.com</p>
                    </div>
                </div>
                <div className="get-in-toch">
                    <h3>Get in Toch With Us</h3>
                    <form action="">
                        <input value={name} type="text" placeholder='Name'
                            onChange={(e) => setName(e.target.value)} />
                        <input value={email} type="email" placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)} />

                        <textarea value={message} cols="30" rows="10" placeholder='Message'
                            onChange={(e) => setMessage(e.target.value)}></textarea>

                        <input className='button' type="submit" value="Send Message"
                            onClick={handleSubmit} />
                    </form>
                </div>

            </div>


        </div>
    );
}

export default Contact;
