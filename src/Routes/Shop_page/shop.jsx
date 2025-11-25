import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShopStyle from "../../Dummy-Products/ShopStyle";
import "./Shop.css";
import { useCart } from "../../Context/CartContext";

function Shop() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

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

  const filteredPackages =
    activeTab === "All Packages"
      ? ShopStyle.slice(0, 6)
      : (() => {
          const map = {
            "New Arrivals": { cat: "new", limit: 6 },
            Premium: { cat: "premium", limit: 2 },
            Featured: { cat: "featured", limit: 6 },
            Exclusive: { cat: "exclusive", limit: 6 },
            Limited: { cat: "limited", limit: 6 },
            Trending: { cat: "trending", limit: 3 },
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
      {/* NORMAL STATIC BUTTON TABS */}
      <div className="tabs-wrapper no-scroll">
        <div className="tabs no-animation">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
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

            <div className="price">
              <p>{pkg.price.toFixed(2)}</p>
            </div>

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
