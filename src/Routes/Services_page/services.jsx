import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

import { FaRegHandPointRight } from "react-icons/fa";
import img from "../../assets/tt1-1 code.jpg";
import "./Services.css";
import OurServices from "./OurServices";

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

  return (
    <>

      <div className="services-startBusiness">
        <p className="plan" data-aos="fade-up">Plan to Start a Business?</p>

        <div className="services-cards-wrapper">

          <div className="card" data-aos="fade-up">
            <h3>Time Efficiency</h3>
            <p>
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi, lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>

          <div className="card advice" data-aos="fade-up">
            <h3>Authentic Advice</h3>
            <p>
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi, lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>

          <div className="card" data-aos="fade-up">
            <h3>Personal Approach</h3>
            <p>
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi, lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>

        </div>
      </div>

     
      <OurServices />

      <div className="DevelopmentCenter">
        
        <div className="development-image" data-aos="fade-up">
          <img src={img} alt="Business development" />
        </div>

        <div className="development-text" data-aos="fade-down">
          <h2>Business Development Center</h2>
          <p>
            Xtra is redefining the marketplace for business purchases by making
            it dramatically easier for buyers to discover, learn more about,
            compare and buy the products and services they need to run and grow
            their businesses — primarily through the capacity building of
            intermediary service providers.
          </p>

          <Link to="/" className="get-started-btn">

            Get Started
          </Link>
        </div>

      </div>
    </>
  );
}

export default Services;

