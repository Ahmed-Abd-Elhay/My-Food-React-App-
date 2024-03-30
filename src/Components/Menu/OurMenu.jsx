import React, { useContext } from 'react';
import "./our-menu.css";
import Item from "../Item/Item";
import { FoodContext } from '../../Context/foodContext';

const OurMenu = (props) => {
    const { allProduct } = useContext(FoodContext);

    return (
        <div className='our-menu'>

            <div className="item-container" >
                {allProduct.map((item, index) => {

                    if (props.active === "all") {

                        return (
                            <Item key={index}
                                id={item.id}
                                image={item.image}
                                name={item.name}
                                price={item.price} />
                        );

                    } else if (props.active === item.category) {

                        return <Item key={index}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            price={item.price} />

                    } else {
                        return null;
                    }
                }
                )}
            </div>

        </div>
    );
}

export default OurMenu;
