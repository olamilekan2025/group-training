import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";
import { HiArrowSmUp } from "react-icons/hi";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <div className="top">
        <button onClick={scrollToTop}>
          <HiArrowSmUp style={{ color: "#fff", fontSize: "20px" }} />
        </button>
      </div>
    )
  );
}

export default ScrollToTop;
