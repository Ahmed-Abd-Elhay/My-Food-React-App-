import React, { useContext } from 'react';
import "./Css/cart.css";
import { FoodContext } from '../Context/foodContext';
import removeIcon from "../Components/Assets/remove-icon.png";
import { Link } from 'react-router-dom';


const Cart = () => {

    const { removeFromCart, allProduct, cartItems, totalItemsCost } = useContext(FoodContext);

    return (

        <div className='cart-items'>
            <div className="main-format">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {allProduct.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className="format main-format">
                            <img src={e.image} alt="" className='product-icon' />
                            <p>{e.name}</p>
                            <p>${e.price}</p>
                            <button className="quantity">{cartItems[e.id]}</button>
                            <p>${e.price * cartItems[e.id]}</p>
                            <img className='remove-icon'
                                onClick={() => { removeFromCart(e.id) }}
                                src={removeIcon} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="cart-down">
                <div className="cart-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cart-total-item">
                            <p>Subtatal</p>
                            <p>${totalItemsCost()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-item">
                            <p>Shipping Cost</p>
                            <p>${totalItemsCost() > 0 ? (totalItemsCost() * (7 / 100)).toFixed(2) : 0}</p>
                        </div>
                        <hr />
                        <div className="cart-total-item">
                            <h3>Total</h3>
                            <p>${totalItemsCost() + (totalItemsCost() * (7 / 100))}</p>
                        </div>
                    </div>
                    <Link to="/order-info" className='link'>
                        <button>PROCEED TO CHECKOUT</button>
                    </Link>
                </div>
                <div className="cart-ptomocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="promo-box">
                        <input type="text" placeholder='Promo Code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Cart;



