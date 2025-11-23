import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShopStyle from "../../Dummy-Products/ShopStyle";
import { FaNairaSign } from "react-icons/fa6";
import "./Shop.css";

function Shop({ addToCart }) {
  const navigate = useNavigate();

  const tabs = [
    "All Packages",
    "New Arrivals",
    "Premium",
    "Featured",
    "Exclusive",
    "Limited",
    "Trending",
  ];

  const [activeTab, setActiveTab] = useState("All Packages");
  const [sliderStyle, setSliderStyle] = useState({});
  const tabsRef = useRef([]);

 
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  
  const handleMouseDown = (e) => {
    isDown = true;
    scrollRef.current.classList.add("dragging");
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    scrollRef.current.classList.remove("dragging");
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current.classList.remove("dragging");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

 
  useEffect(() => {
    const currentTab = tabsRef.current[tabs.indexOf(activeTab)];
    if (currentTab) {
      setSliderStyle({
        width: `${currentTab.offsetWidth}px`,
        left: `${currentTab.offsetLeft}px`,
      });
    }
  }, [activeTab]);

 
  const filteredPackages =
    activeTab === "All Packages"
      ? ShopStyle.slice(0, 6)
      : (() => {
          const map = {
            "New Arrivals": { cat: "new", limit: 6 },
            "Premium": { cat: "premium", limit: 2 },
            "Featured": { cat: "featured", limit: 6 },
            "Exclusive": { cat: "exclusive", limit: 6 },
            "Limited": { cat: "limited", limit: 6 },
            "Trending": { cat: "trending", limit: 3 },
          };
          const { cat, limit } = map[activeTab];
          return ShopStyle.filter((item) => item.category === cat).slice(
            0,
            limit
          );
        })();

  const handleCardClick = (id) => {
    navigate(`/shopDetails/${id}`);
  };

  return (
    <div className="shop-container">

     
      <div
        className="tabs-wrapper"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="tabs">
          {tabs.map((tab, idx) => (
            <button
              key={tab}
              ref={(el) => (tabsRef.current[idx] = el)}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
          <span className="slider" style={sliderStyle}></span>
        </div>
      </div>

     
      <div className="package-grid">
        {filteredPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="package-card"
            onClick={() => handleCardClick(pkg.id)}
          >
            <img src={pkg.imageUrl[0]} alt={pkg.name} />
            <h3>{pkg.name}</h3>
            <div className="price"><p>{ pkg.price.toFixed(2)}</p></div>

            <button
              className="add-cart"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(pkg);
              }}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;

