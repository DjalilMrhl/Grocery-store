import React, { useContext } from "react";
import "./Payment.scss";
import { useNavigate } from 'react-router-dom'
import { Color } from "../../../Context/context";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../Redux/Slices/cartSlice";

function Payment() {

  const dispatch = useDispatch()
  const {setActive} = useContext(Color)
  
  const navigate = useNavigate()
  const makePayment = ()=> {
     navigate("/cart/confirmation")
     dispatch(clearCart)
  }
  const handleClickBack = ()=> {
    navigate("/cart/shipping")
    setActive(2)
  }

  return (
    <div className="payment" id="payment">
      <h3>Contact informations</h3>
      <div>
        <label>Email
          <input name="email" type="email"/>
        </label>
        <label>Phone
          <input name="phoneNumber" type="Number"/>
        </label>
      </div>
      <div className="btns">
        <button onClick={handleClickBack}>Back</button>
        <button onClick={makePayment}>Place Order</button>
      </div>
    </div>
  );
}

export default Payment;
