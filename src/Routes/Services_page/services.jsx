import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";
import { FaWordpress } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { FaLeaf } from "react-icons/fa";
import { FaPersonMilitaryRifle } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { SlSupport } from "react-icons/sl";
import { FaRegHandPointRight } from "react-icons/fa";
import img from "../../assets/tt1-1 code.jpg";
import "./Services.css";

function Services() {
  useEffect(() => {
    Aos.init({
      offset: 120,
      duration: 700,
      easing: "ease-in-out",
      delay: 100,
      once: true,
    });
  }, []);

  // const navigate= useNavigate()
  return (
    <>
      <div className="services-startBusiness">
        <p data-aos="fade-up">Plan to Start a Business ?</p>
        <div className="services-cards-wrapper" data-aos="flip-left">
          <div className="card">
            <h3>Time Efficiency</h3>
            <p>
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi, lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
          <div className="card advice">
            <h3>Authentic Advice</h3>
            <p>
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi, lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
          <div className="card">
            <h3>Personal Approach</h3>
            <p>
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi, lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
      </div>
      <div className="ourService">
        <p>Our Service</p>
        <div className="ourService-wripper">
          <div className="wordPress">
            <div className="icon">
              <FaWordpress style={{ color: "#fff", fontSize: "30px" }} />
            </div>
            <div className="text">
              <h2>WordPress installtion</h2>
              <p>installing WordPress and pluging</p>
            </div>
          </div>
          <div className="wordPress">
            <div className="icon">
              <IoMdCheckmark style={{ color: "#fff", fontSize: "30px" }} />
            </div>
            <div className="text">
              <h2>Website Optimization</h2>
              <p>Optimizing your site speed</p>
            </div>
          </div>
          <div className="wordPress">
            <div className="icon">
              <FaLeaf style={{ color: "#fff", fontSize: "30px" }} />
            </div>
            <div className="text">
              <h2>Web Design</h2>
              <p>Photoshop layered web design</p>
            </div>
          </div>
          <div className="wordPress">
            <div className="icon">
              <FaPersonMilitaryRifle
                style={{ color: "#fff", fontSize: "30px" }}
              />
            </div>
            <div className="text">
              <h2>Security solution</h2>
              <p>increase your server security risk</p>
            </div>
          </div>
          <div className="wordPress">
            <div className="icon">
              <FaCode style={{ color: "#fff", fontSize: "30px" }} />
            </div>
            <div className="text">
              <h2>Web Development</h2>
              <p>devloping Website from wireframe</p>
            </div>
          </div>
          <div className="wordPress">
            <div className="icon">
              <SlSupport style={{ color: "#fff", fontSize: "30px" }} />
            </div>
            <div className="text">
              <h2>Unlimited Support</h2>
              <p>Supporting you with any problems</p>
            </div>
          </div>
        </div>
      </div>
      <div className="DevelopmentCenter">
        <div className="development-image">
          <img src={img} alt="" />
        </div>
        <div className="development-text">
          <h2>Business Development Center</h2>
          <p>
            Xtra is redefining the marketplace for business purchases by making
            it dramatically easier for buyers to discover, learn more about,
            compare and buy the products and services they need to run and grow
            their Businesses primarily through the capacity building of
            intermediary service.
          </p>
          <Link to="/" className="get-started-btn">
            <FaRegHandPointRight />   Get Started
          </Link>
        </div>
      </div>
    </>
  );
}

export default Services;
