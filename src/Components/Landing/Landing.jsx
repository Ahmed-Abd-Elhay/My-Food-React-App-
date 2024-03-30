import React from 'react';
import "./landing.css";
import foodImage from "../Assets/background-Koshari-0.png";
import { Link } from 'react-scroll';

const Landing = () => {
    return (
        <div className='landing'>
            <div className="info">
                <span>Food Delivery</span>
                <h1>My Food</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt distinctio perferendis consequatur,
                    quae eius mollitia rem reiciendis
                </p>
                <Link
                    to="popular"
                    spy={true}
                    offset={50 - 60}
                    duration={500}
                >
                    <button>Delivery Now</button>
                </Link>
            </div>

            <div className='main-info'>
                <p className="cart-info">One of the Best Egypthion Food </p>

                <div className="main-image">
                    <img src={foodImage} alt="" />
                </div>

                <p className="info-name">Koshari</p>
            </div>
        </div>
    )
}

export default Landing;
