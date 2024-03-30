import React, { useContext, useState } from 'react';
import "./header.css";
import cartIcon from '../Assets/cart-icon.png';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { FoodContext } from '../../Context/foodContext';


const Header = () => {

    const [burgerClass, setBurgerClass] = useState("overflow");
    const [closeIcon, setCloseIcon] = useState("icon");

    const { getTotalCartItems } = useContext(FoodContext);

    function updateIcon() {
        if (burgerClass === "overflow") {
            setBurgerClass("overflow checked");
            setCloseIcon("icon close");
        } else {
            setBurgerClass("overflow");
            setCloseIcon("icon");
        }
    }

    return (
        <div className='header'>
            <div className="logo">
                <NavLink className='link' to="/">
                    My Food
                </NavLink>
            </div>

            <ul className="links">
                <NavLink className='link' to="/" >
                    <li>
                        Home
                    </li>
                </NavLink>
                <NavLink className='link' to="/menu" >
                    <li>
                        Menu
                    </li>
                </NavLink>
                <Link
                    to='about'
                    spy={true}
                    offset={50 - 100}
                    duration={500}
                >
                    <NavLink className='link' to="/">
                        <li>
                            About
                        </li>
                    </NavLink>
                </Link>
                <Link
                    to='review'
                    spy={true}
                    offset={50 - 120}
                    duration={500}
                >
                    <NavLink className='link' to="/">
                        <li>
                            Review
                        </li>
                    </NavLink>
                </Link>
                <Link
                    to='contact'
                    spy={true}
                    offset={50 - 120}
                    duration={500}
                >
                    <NavLink className='link' to="/">
                        <li>
                            Contact
                        </li>
                    </NavLink>
                </Link>
            </ul>

            <div className="signin-card">
                <NavLink to="/login">
                    <button>
                        Sign In
                    </button>
                </NavLink>

                <div className="card-icon">
                    <NavLink to="/cart">
                        <img src={cartIcon} alt="" />
                    </NavLink>
                    <NavLink to="/cart">
                        <div className="cart-number">{getTotalCartItems()}</div>
                    </NavLink>
                </div>

                <div className="burger-icon">
                    <div className={closeIcon} onClick={updateIcon} >
                        <div className='first'></div>
                        <div className='second'></div>
                        <div className='last'></div>
                    </div>
                    <div className={burgerClass}>
                        <ul className="burger-links" >

                            <NavLink className='link' to="/" >
                                <li onClick={() => {
                                    setBurgerClass("overflow");
                                    setCloseIcon("icon");
                                }}>
                                    Home
                                </li>
                            </NavLink>

                            <NavLink className='link' to="/menu" >
                                <li onClick={() => {
                                    setBurgerClass("overflow");
                                    setCloseIcon("icon");
                                }}>
                                    Menu
                                </li>
                            </NavLink>

                            <Link className='link'
                                to='about'
                                spy={true}
                                offset={50 - 100}
                                duration={500}
                            >
                                <NavLink className='link' to="/">
                                    <li onClick={() => {
                                        setBurgerClass("overflow");
                                        setCloseIcon("icon");
                                    }}>
                                        About
                                    </li>
                                </NavLink>
                            </Link>

                            <Link className='link'
                                to='review'
                                spy={true}
                                offset={50 - 100}
                                duration={500}
                            >
                                <NavLink className='link' to="/">
                                    <li onClick={() => {
                                        setBurgerClass("overflow");
                                        setCloseIcon("icon");
                                    }}>
                                        Review
                                    </li>
                                </NavLink>
                            </Link>

                            <Link className='link'
                                to='contact'
                                spy={true}
                                offset={50 - 100}
                                duration={500}
                            >
                                <NavLink className='link' to="/">
                                    <li onClick={() => {
                                        setBurgerClass("overflow");
                                        setCloseIcon("icon");
                                    }}>
                                        Contact
                                    </li>
                                </NavLink>
                            </Link>

                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Header;
