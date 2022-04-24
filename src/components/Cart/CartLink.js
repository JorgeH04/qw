import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";

export default function CartLink() {
  const { cartItems } = React.useContext(CartContext);

  return (
    <div className="cart-link-container">
      <Link to="/cart"><span class="icon-shopping-bag"></span>   <span class="number">  {cartItems}   </span></Link>
    </div>
  );
}




