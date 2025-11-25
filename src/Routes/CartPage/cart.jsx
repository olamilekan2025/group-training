import React from "react";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

function CartPage() {
  const { cart, removeFromCart, increaseQty, removeItem, clearCart } = useCart();

 
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="cart-wrapper">
    <div className="cart-page">
         <div className="cart-empty">
          {cart.length === 0 && <p className="empty">No items in cart</p>}
       {cart.length === 0 && <Link to="/shop" className="backToShop">Back to Shop</Link>}
      </div>
      <h2>Your Cart</h2>

     
    
     

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          {/* IMAGE */}
          <img src={item.image} alt={item.name} className="cart-item-image" />

          <div className="cart-item-details">
            <h4>{item.name}</h4>

            <p className="item-price">Price: ₦{item.price.toLocaleString()}</p>

            

          </div>

          <div className="cart-button">
            <div className="quantity-controls">
              <button onClick={() => removeFromCart(item.id)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>

           
            <button
              className="delete-btn"
              onClick={() => removeItem(item.id)}
            >
              Remove Item
            </button>
          </div>
        </div>
      ))}

      
      {cart.length > 0 && (
        <div className="cart-total-box">
          <h3>Total Price: ₦{totalPrice.toLocaleString()}</h3>
          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
    </div>
  );
}

export default CartPage;
