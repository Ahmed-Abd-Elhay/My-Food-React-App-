import React from 'react';
import "./new-dishes.css";
import newDeshes from "../Assets/NewDeshes";
import Item from "../Item/Item";

const NewDishes = () => {
    return (
        <div className='new-dishes'>
            <h1>New Dishes</h1>

            <div className="new-dishes-container">

                {newDeshes.map((item, index) =>

                    <Item key={index}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        price={item.price} />
                )}

            </div>
        </div>
    );
}

export default NewDishes;
