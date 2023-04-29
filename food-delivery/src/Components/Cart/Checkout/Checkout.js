import React from "react";
import "./Checkout.scss";
import { useNavigate } from "react-router";

function Checkout() {
  const navigate = useNavigate();

  return (
    <div className="checkout">
      <h2>Checkout Successfull</h2>
      <button onClick={() => navigate("/")}>Go to Homepage</button>
    </div>
  );
}

export default Checkout;
