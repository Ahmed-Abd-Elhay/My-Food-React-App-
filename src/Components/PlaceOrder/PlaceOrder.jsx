import React, { useContext } from 'react';
import "./place-order.css";
import { FoodContext } from '../../Context/foodContext';

const PlaceOrder = () => {

    const { totalItemsCost } = useContext(FoodContext);


    return (
        <div className='place-order'>

            <div className="cart-down">

                <div className="delivery">
                    <h2>delivery information</h2>

                    <div className="info-container">
                        <div >
                            <input type="text" placeholder='First Name' />
                            <input type="text" placeholder='Last Name' />
                        </div>
                        <input type="email" placeholder='Email Address' />
                        <input type="text" placeholder='Street' />
                        <div >
                            <input type="text" placeholder='City' />
                            <input type="text" placeholder='State' />
                        </div>
                        <div >
                            <input type="text" placeholder='Zip Code' />
                            <input type="text" placeholder='Country' />
                        </div>
                        <input type="password" placeholder='Password' />
                    </div>
                </div>

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
                    <button>PROCEED TO PAYMENT</button>
                </div>
            </div>

        </div>




    );
}

export default PlaceOrder;
