import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const initialState = { cart: [] };

function cartReducer(state, action) {
  switch (action.type) {
    case "SET_CART":
      return { ...state, cart: action.payload };

    case "ADD_TO_CART":
      const existing = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === existing.id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    case "DECREASE_QTY":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? { ...item, qty: item.qty - 1 }
              : item
          )
          .filter((item) => item.qty > 0),
      };

    case "INCREASE_QTY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, qty: item.qty + 1 }
            : item
        ),
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "CLEAR_CART":
      return { ...state, cart: [] };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // ✅ Load cart safely (runs only on client)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cart");
      if (saved) {
        dispatch({
          type: "SET_CART",
          payload: JSON.parse(saved),
        });
      }
    }
  }, []);

  // ✅ Save cart to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  }, [state.cart]);

  const addToCart = (product) =>
    dispatch({ type: "ADD_TO_CART", payload: product });

  const removeFromCart = (id) =>
    dispatch({ type: "DECREASE_QTY", payload: id });

  const increaseQty = (id) =>
    dispatch({ type: "INCREASE_QTY", payload: id });

  const removeItem = (id) =>
    dispatch({ type: "REMOVE_ITEM", payload: id });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        removeFromCart,
        increaseQty,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext<CartContext>(CartContext);
