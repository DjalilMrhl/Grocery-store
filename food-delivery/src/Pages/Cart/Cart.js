import React, { useContext } from "react";
import { Outlet } from 'react-router-dom'
import "./Cart.scss";
import { FaCartArrowDown, FaCheckDouble, FaPaypal, FaShippingFast } from "react-icons/fa";
import { Color } from "../../Context/context";

function Cart() {

  const {active} = useContext(Color)

  return (
    <section className="cart" id="cart">
      <h1>Your Cart</h1>
      <div className="cart--container">
        <nav>
          <div className={active===1?"label activeLink":"label"}><FaCartArrowDown/><p>My Cart</p></div>
          <div className={active===2?"label activeLink":"label"}><FaShippingFast/><p>Shipping Info</p></div>
          <div className={active===3?"label activeLink":"label"}><FaPaypal/><p>Payment</p></div>
          <div className={active===4?"label activeLink":"label"}><FaCheckDouble/><p>Confirmation</p></div>
        </nav>
        <Outlet/>
      </div>
    </section>
  );
}

export default Cart;
