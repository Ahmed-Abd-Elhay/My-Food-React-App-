import React, { useState } from 'react';
import "./Css/menu.css";
import OurMenu from '../Components/Menu/OurMenu';

const Menu = () => {

    const [active, setActive] = useState("all");

    return (
        <>
            <div className='menu'>
                <div className='land'>
                    <h1>Our Menu</h1>
                </div>

                <div className="container">

                    <div className="buttons">

                        <button className={active === "all" ? "active" : ''}
                            onClick={() => setActive("all")}
                        >
                            All
                        </button>
                        <button className={active === "Meal" ? "active" : ''}
                            onClick={() => setActive("Meal")}
                        >
                            Meals
                        </button>
                        <button className={active === "Desserts" ? "active" : ''}
                            onClick={() => setActive("Desserts")}
                        >
                            Desserts
                        </button>

                    </div>

                    <div className="item-container">

                        <OurMenu active={active} />

                    </div>

                </div>

            </div>

        </>
    );
}

export default Menu;
