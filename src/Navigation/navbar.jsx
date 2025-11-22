import React, { useState, useRef, useEffect } from 'react'

import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import { MdMenu } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);

    const aboutRef = useRef(null);



    const handleToggleMenu = () => {
        setIsMobile(prev => !prev);
        if (isMobile) setOpenDropdown(false);
    };


    const handleLinkClick = () => {
        setIsMobile(false);
        setOpenDropdown(false);
    };

    const handleDropdownClink = () => {
        setOpenDropdown(prev => !prev);
    }


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                aboutRef.current &&
                !aboutRef.current.contains(event.target)
            ) {
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
	<svg>
		<text x="50%" y="50%" dy=".35em" textAnchor="end">
			JH WORLD
		</text>
	</svg>
</div>

            <div className={isMobile ? "navbar active" : "navbar"}>
                <NavLink to="/" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>

                <div className="aboutDropdown" ref={aboutRef}  >
                    <div
                        className="dropdown-title"
                        onClick={handleDropdownClink}
                    >
                        <h3 className='flex items-center gap-1'>About   {openDropdown ? <FaAngleUp style={{ fontSize: "10px" }} /> : <FaAngleDown style={{ fontSize: "10px" }} />}</h3>


                    </div>

                    <div className={openDropdown ? "dropdown-menu show" : "dropdown-menu"}>
                        <NavLink to="/about/company" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Company</NavLink>
                        <NavLink to="/about/team" onClick={handleLinkClick}>Team</NavLink>
                        <NavLink to="/about/history" onClick={handleLinkClick}>History</NavLink>
                    </div>
                </div>

                <NavLink to="/services" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink>
                <NavLink to="/product" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Product</NavLink>
                <NavLink to="/blog" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Blog</NavLink>
                <NavLink to="/faq" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Faq</NavLink>
            </div>

            <div className="togglemenu" onClick={handleToggleMenu}>
                {isMobile ? <FaXmark style={{ color: "#fff" }} /> : <MdMenu style={{ color: "#fff" }} />}
            </div>
        </div>
    )
}

export default Navbar;

