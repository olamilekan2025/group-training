import React from "react";
import { FiMapPin } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-wrapper">

       
        <div className="footer-info">
            <h3>Office</h3>
          <div className="address">
            <h3><FiMapPin style={{background:"#fff", width:"40px", height:"35px",padding:"10px",borderRadius:"50px",color:"#4D61FF"}} /><a href="https://maps.google.com" target="_blank" rel="noopener">
              25 AYEKALE, OSOGBO, OSUN STATE, Lagos.
            </a></h3>
            
          </div>

          <div className="tel">
            <h3><FaPhoneAlt style={{background:"#fff", width:"40px", height:"35px",padding:"10px",borderRadius:"50px",color:"#4D61FF"}} /> <a href="tel:+2348149285789">+2348149285789</a> <a href="tel:+2347074052462">+2347074052462</a></h3>
           
           
          </div>

          <div className="email">
            <h3><MdMarkEmailRead style={{background:"#fff", width:"40px", height:"35px",padding:"10px",borderRadius:"50px",color:"#4D61FF"}} />   <a href="mailto:jeliioladunjoye04@gmail.com">
              jeliioladunjoye04@gmail.com
            </a></h3>
          
          </div>

         
        </div>

      
        <div className="footer-New">
             <div className="social">
            <h3> Follow Us</h3>
            <a href="https://facebook.com" target="_blank">Facebook</a>
            <a href="https://twitter.com" target="_blank">Twitter</a>
            <a href="https://instagram.com" target="_blank">Instagram</a>
          </div>
        </div>

       
        <div className="footer-Shortcuts">
          <h3>Quick Links</h3>
          <Link to="/"><FaAngleRight style={{fontSize:"17px"}} />Home</Link>
          <Link to="/about"><FaAngleRight />About</Link>
          <Link to="/services"><FaAngleRight />Services</Link>
        </div>

        
        <div className="footer-workHours">
          <h3>Working Hours</h3>
          <p>Mon – Fri: 8:00am – 6:00pm</p>
          <p>Saturday: 9:00am – 4:00pm</p>
          <p>Sunday: Closed</p>
        </div>

      </div>
    </>
  );
}

export default Footer;
