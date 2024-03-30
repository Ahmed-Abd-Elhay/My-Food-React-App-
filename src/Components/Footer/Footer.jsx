import React from 'react';
import "./footer.css";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import instgramIcon from "../Assets/instagram-icon.png";
import pintrastIcon from "../Assets/pinterest-icon.png";
import whatsapIcon from "../Assets/whatsa.png";

const Footer = () => {
    return (

        <div className='footer'>
            <div className="footer-logo">
                <NavLink className='link' to="/">
                    My Food
                </NavLink>
            </div>

            <ul className="footer-links">
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
                <NavLink className='link' to="/login">
                    <li>
                        Sign In
                    </li>
                </NavLink>
            </ul>

            <div className="footer-social">
                <div className="icons">
                    <img src={instgramIcon} alt="" />
                </div>
                <div className="icons">
                    <img src={pintrastIcon} alt="" />
                </div>
                <div className="icons">
                    <img src={whatsapIcon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - By<span> Abd-Elhay </span> - All Right Reserved.</p>
            </div>
        </div>

    )
}

export default Footer;

