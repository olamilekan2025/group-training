import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdMenu } from "react-icons/md";
import { FaTimes, FaAngleDown, FaAngleUp, FaShoppingCart } from "react-icons/fa";
import {useCart} from "../Context/CartContext"
import "./Navbar.css";

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    const aboutRef = useRef(null);

    const { cart } = useCart(); 
    const cartCount = cart.reduce((total, item) => total + item.qty, 0);

    const handleToggleMenu = () => {
        setIsMobile(prev => !prev);
        if (isMobile) setOpenDropdown(false);
    };

    const handleLinkClick = () => {
        setIsMobile(false);
        setOpenDropdown(false);
    };

    const handleDropdownClick = () => {
        setOpenDropdown(prev => !prev);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (aboutRef.current && !aboutRef.current.contains(event.target)) {
                setOpenDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="Navigation">

            <div className="wrapper">
                <Link to="/" className="logo-link">
                    <svg>
                        <text x="50%" y="50%" dy=".35em" textAnchor="end">
                            JH WORLD
                        </text>
                    </svg>
                </Link>

               
            </div>

            <div className={isMobile ? "navbar active" : "navbar"}>
                <NavLink to="/" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                

                <NavLink to="/services" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink>
                <NavLink to="/shop" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Shop</NavLink>
                <NavLink to="/blog" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Blog</NavLink>
                <NavLink to="/faq" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Faq</NavLink>
                 {/* Cart Icon */}
                <NavLink to="/cart" className="cart-link"   onClick={() => setIsMobile(false)}>
                    <FaShoppingCart />
                    {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                </NavLink>
            </div>

            <div className="togglemenu" onClick={handleToggleMenu}>
                {isMobile ? <FaTimes style={{ color: "#fff" }} /> : <MdMenu style={{ color: "#fff" }} />}
            </div>

        </div>
    );
}

export default Navbar;
