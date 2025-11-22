import React from "react";
import { FiMapPin } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-wrapper">

     
      <div className="footer-info">
        <h3>Office</h3>

        <div className="item-row">
          <FiMapPin className="footer-icon" />
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
            25 AYEKALE, OSOGBO, OSUN STATE, Nigeria.
          </a>
        </div>

        <div className="item-row">
          <FaPhoneAlt className="footer-icon" />
          <div className="tel-links">
            <a href="tel:+2348149285789">+2348149285789</a>
            <a href="tel:+2347074052462">+2347074052462</a>
          </div>
        </div>

        <div className="item-row">
          <MdMarkEmailRead className="footer-icon" />
          <a href="mailto:jeliioladunjoye04@gmail.com">
            jeliioladunjoye04@gmail.com
          </a>
        </div>
      </div>

     
      <div className="footer-New">
        <h3>Follow Us</h3>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>

      
      <div className="footer-Shortcuts">
        <h3>Quick Links</h3>
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/services">Services</Link>
      </div>

      {/* Working Hours */}
      <div className="footer-workHours">
        <h3>Working Hours</h3>
        <p>Mon – Fri: 8:00am – 6:00pm</p>
        <p>Saturday: 9:00am – 4:00pm</p>
        <p>Sunday: Closed</p>
      </div>

    </footer>
  );
}

export default Footer;
