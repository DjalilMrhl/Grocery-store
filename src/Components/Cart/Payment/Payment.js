import React, { useContext } from "react";
import "./Payment.scss";
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Color, ShippingForm } from "../../../Context/context";
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

const stripePromise = loadStripe("pk_test_51MtWkhBx5TEHq8kdA9k3PEeq0HYl7R0FovVIPQisKQkkolftDlWp8LijISiLesoWTC9s0k5yDN90UEasbf0bU2cp000XV2XJYL")

function Payment() {

  const cartItems = useSelector(state=> state.cart.cartItems)
  const makePayment= async(e)=> {
    const stripe = await stripePromise
    const requestBody = {
      shippingDetails: {...form},
      products: cartItems.map(({id, cartQuantity})=> ({id, cartQuantity})),
    }
    const {id} = axios.post("https://strapi-kp0a.onrender.com/api/orders", requestBody)
    stripe.redirectToCheckout({
      sessionId: id
    })
  }
  const {form, setForm} = useContext(ShippingForm)
  const {setActive} = useContext(Color)

  const handleChange = (e)=> {
    setForm(prev=> {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const navigate = useNavigate()
  const handleClickBack = ()=> {
    navigate("/cart/shipping")
    setActive(2)
  }

  return (
    <div className="payment" id="payment">
      <h3>Contact informations</h3>
      <div>
        <label>Email
          <input name="email" type="email" onChange={handleChange}/>
        </label>
        <label>Phone
          <input name="phoneNumber" type="Number" onChange={handleChange}/>
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
