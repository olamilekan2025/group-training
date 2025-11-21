import React, { useState, useEffect } from "react";
import { HiArrowSmUp } from "react-icons/hi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import "./ScrollToTop.css";

function MessageAndScroll() {
  const [showScroll, setShowScroll] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      
    <div className="ScroolMoverlay">
        {openMessage && (
        <div className="msg-popup">
         <form className="forms" action="https://usebasin.com/f/84226a19c723" method="POST">
           
            <h3>Send Us a Message</h3>

            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>

            <button className="send-btn">Send Message</button>

            <button
              className="close-btn"
              onClick={() => setOpenMessage(false)}
            >
              Close
            </button>
         
         </form>
        </div>
      )}

     
      <div
        className="msg-btn"
        onClick={() => setOpenMessage(!openMessage)}
      >
        <IoChatbubbleEllipsesOutline size={20} />
      </div>

     
      {showScroll && (
        <div className="scroll-btn" onClick={scrollToTop}>
          <HiArrowSmUp size={20} />
        </div>
      )}
    </div>
    </>
  );
}

export default MessageAndScroll;
