// import React, { useState } from "react"; 
// import { useParams, useNavigate } from "react-router-dom";
// import ShopStyle from "../../Dummy-Products/ShopStyle";
// import { FaLongArrowAltLeft } from "react-icons/fa";
// import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
// import { useCart } from "../../Context/CartContext";
// import "./ShopDetails.css";

// function ShopDetails({ addToCart }) {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const pkg = ShopStyle.find((item) => item.id === parseInt(id));

//    const { addToCart } = useCart();

//   const [activeImage, setActiveImage] = useState(
//     pkg ? pkg.imageUrl[0] : null
//   );

//   const [openDesc, setOpenDesc] = useState(false);

//   if (!pkg) {
//     return (
//       <p style={{ textAlign: "center", marginTop: "50px" }}>
//         Package not found!
//       </p>
//     );
//   }

//   return (
//     <div className="details-wrapper">

//       {/* LEFT SECTION */}
//       <div className="left-column">
//         <div className="main-image-box">
//           <img src={activeImage} alt="preview" className="main-image" />
//         </div>

//         <div className="thumbnail-box">
//           {pkg.imageUrl.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt=""
//               className={`thumbnail ${activeImage === img ? "active-thumb" : ""}`}
//               onClick={() => setActiveImage(img)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* RIGHT SECTION */}
//       <div className="right-column">

//         <button className="back-btn" onClick={() => navigate("/shop")}>
//           <FaLongArrowAltLeft style={{ fontSize: "20px" }} />
//         </button>

//         <h2 className="product-name">{pkg.name}</h2>

//         <p className="prices">Price: ₦{pkg.price.toFixed(2)}</p>

//         <p className={pkg.instock ? "stock" : "out-of-stock"}>
//           {pkg.instock ? "In Stock" : "Out of Stock"}
//         </p>

//         {/* DROPDOWN */}
//         <div className="dropdown-section">
//           <div className="dropdown-header" onClick={() => setOpenDesc(!openDesc)}>
//             <h3>Description</h3>
//             <span className="arrow">
//               {openDesc ? <IoIosArrowUp /> : <IoIosArrowDown />}
//             </span>
//           </div>

//           {openDesc && (
//             <div className="dropdown-content">
//               <p className="description">{pkg.description}</p>
//             </div>
//           )}
//         </div>

//         {/* ADD TO CART BUTTON */}
//         <button
//           className="add-cart-btn"
//           onClick={() => addToCart(pkg)}
//         >
//           Add To Cart
//         </button>

//       </div>
//     </div>
//   );
// }

// export default ShopDetails;





import React, { useState } from "react"; 
import { useParams, useNavigate } from "react-router-dom";
import ShopStyle from "../../Dummy-Products/ShopStyle";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useCart } from "../../Context/CartContext";
import "./ShopDetails.css";

function ShopDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pkg = ShopStyle.find((item) => item.id === parseInt(id));

  const { addToCart } = useCart(); // <-- use context only

  const [activeImage, setActiveImage] = useState(
    pkg ? pkg.imageUrl[0] : null
  );

  const [openDesc, setOpenDesc] = useState(false);

  if (!pkg) {
    return (
      <p style={{ textAlign: "center", marginTop: "50px" }}>
        Package not found!
      </p>
    );
  }

  return (
    <div className="details-wrapper">

      {/* LEFT SECTION */}
      <div className="left-column">
        <div className="main-image-box">
          <img src={activeImage} alt="preview" className="main-image" />
        </div>

        <div className="thumbnail-box">
          {pkg.imageUrl.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className={`thumbnail ${activeImage === img ? "active-thumb" : ""}`}
              onClick={() => setActiveImage(img)}
            />
          ))}
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="right-column">

        <button className="back-btn" onClick={() => navigate("/shop")}>
          <FaLongArrowAltLeft style={{ fontSize: "20px" }} />
        </button>

        <h2 className="product-name">{pkg.name}</h2>

        <p className="prices">Price: ₦{pkg.price.toFixed(2)}</p>

        <p className={pkg.instock ? "stock" : "out-of-stock"}>
          {pkg.instock ? "In Stock" : "Out of Stock"}
        </p>

        {/* DROPDOWN */}
        <div className="dropdown-section">
          <div className="dropdown-header" onClick={() => setOpenDesc(!openDesc)}>
            <h3>Description</h3>
            <span className="arrow">
              {openDesc ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </div>

          {openDesc && (
            <div className="dropdown-content">
              <p className="description">{pkg.description}</p>
            </div>
          )}
        </div>

        {/* ADD TO CART BUTTON */}
        <button
          className="add-cart-btn"
          onClick={() => addToCart(pkg)}
        >
          Add To Cart
        </button>

      </div>
    </div>
  );
}

export default ShopDetails;
