import React from 'react';
import "./popular.css";
import Item from '../Item/Item';
import popularDeshes from "../Assets/PupularDeshes";

const Popular = () => {
    return (
        <div className='popular'>

            <h1>Popular Dishes</h1>

            <div className="popular-container">

                {popularDeshes.map((item, index) =>

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

export default Popular;