import React from 'react';
import "./item.css";

import star from "../Assets/star-image.png";
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <div className='item'>
            <img className='photo' src={props.image} alt="imagee" />

            <Link className='link' to={`/plates/plate-id=${props.id}`}>
                <h3>{props.name}</h3>
            </Link>
            <div className="stars">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
            </div>
            <div className="price">
                <p className="new-price">${props.price}</p>
                <Link to={`/plates/plate-id=${props.id}`}>
                    <button>Buy Now</button>
                </Link>
            </div>

        </div>
    );
};

export default Item;


