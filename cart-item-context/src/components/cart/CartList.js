import React from "react";
import { useCart } from "../../contexts/cart-context";

const CartList = () => {
  const { cartItems, removeCart } = useCart();
  return (
    <div className="cart_items-wrapper">
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <div key={item.id} className="cart_items">
            <img src={item.url} alt="" className="cart_items-img" />
            <button
              className="cart_items-button"
              onClick={() => removeCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
    </div>
  );
};

export default CartList;
