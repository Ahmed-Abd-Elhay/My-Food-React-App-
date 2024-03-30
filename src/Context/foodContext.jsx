import React, { createContext, useState } from "react";
import allProduct from "../Components/Assets/data";

export const FoodContext = createContext(null);

const defaultNumber = () => {
    let cartNumber = {};

    for (let i = 0; i < allProduct.length + 1; i++) {
        cartNumber[i] = 0;
    }
    return cartNumber;
}

const FoodContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(defaultNumber());
    console.log(cartItems);

    const addToCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    }

    const totalItemsCost = () => {
        let totalAmount = 0;

        for (let item in cartItems) {

            if (cartItems[item] > 0) {

                let cartFind = allProduct.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * cartFind.price;

            }
        };
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;

        for (let item in cartItems) {

            if (cartItems[item] > 0) {

                totalItem += cartItems[item];

            }
        };
        return totalItem;
    };

    const contextValue = { allProduct, cartItems, addToCart, removeFromCart, totalItemsCost, getTotalCartItems };

    return (
        <FoodContext.Provider value={contextValue}>
            {props.children}
        </FoodContext.Provider>
    );
};

export default FoodContextProvider;
