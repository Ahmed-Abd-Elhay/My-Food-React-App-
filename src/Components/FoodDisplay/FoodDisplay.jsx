import React, { useContext } from 'react';
import "./food-display.css";
import starImage from "../Assets/star-image.png";
import { FoodContext } from '../../Context/foodContext';

const FoodDisplay = (props) => {
    const { dishe } = props;

    const { addToCart } = useContext(FoodContext);

    return (
        <div className='food-display'>
            <div className="food-display-left">
                <div className="image-list">
                    <img src={dishe.image} alt="" />
                    <img src={dishe.image} alt="" />
                    <img src={dishe.image} alt="" />
                    <img src={dishe.image} alt="" />
                </div>
                <div className="image-display">
                    <img className='main-image' src={dishe.image} alt="" />
                </div>
            </div>

            <div className="food-display-right">
                <h1>{dishe.name}</h1>
                <div className="info">
                    <div className="price">
                        ${dishe.price}
                    </div>
                    <div className="right-star">
                        <img src={starImage} alt="" />
                        <img src={starImage} alt="" />
                        <img src={starImage} alt="" />
                        <img src={starImage} alt="" />
                        <img src={starImage} alt="" />
                        <p>(150)</p>
                    </div>
                </div>

                <div className="description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur alias deleniti omnis asperiores, nihil quae eos ipsam
                    iure aspernatur sint quidem magni laboriosam.
                </div>
                <button onClick={() => addToCart(dishe.id)}>ADD TO CART</button>
            </div>
        </div>

    );
}

export default FoodDisplay;
