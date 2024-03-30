import React from 'react';
import "./related-items.css";
import Item from "../Item/Item";
import allPtoduct from "../Assets/PupularDeshes";
import { Link } from 'react-router-dom';

const RelatedItems = (props) => {
    return (
        <div className='related-items'>
            <h1>Related Meals</h1>
            <hr />
            <div className="related-item">

                {allPtoduct.map((item, index) => {


                    // if (props.category === item.category) {


                    return <Item
                        key={index}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                    />
                    // } else {
                    //     return null;
                    // }

                })}
            </div>

            <Link to="/menu" className='link'>
                <button className='more'>Expolre More</button>
            </Link>
        </div>
    )
}

export default RelatedItems;