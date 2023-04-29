import { useNavigate } from "react-router";
import "./Shipping.scss";
import React, { useContext } from "react";
import { Color, ShippingForm } from "../../../Context/context";

function Shipping() {

  const navigate = useNavigate()

  const {form, setForm} = useContext(ShippingForm)

  const handleChange = (e)=> {
    setForm(prev=> {
      return {...prev, [e.target.name]: e.target.value}
    })
  }
  const handleSubmit = (e)=> {
    e.preventDefault()
    navigate('/cart/payment')
  }

  const {setActive} = useContext(Color)
  const handleClickNext = () => {
    setActive(3)
  }
  const handleClickBack = () => {
    setActive(1)
    navigate('/cart')
  }

  return (
    <div className="shipping" id="shipping">
      <form onSubmit={handleSubmit}>
        <h3>Select Delivery date</h3>
          <input type="date" name="date" value={form.date} max="2023-12-31" onChange={handleChange} required/>
          <h3>Your address</h3>
          <input name="address" value={form.address} type="text" onChange={handleChange} required/>
          <h3>Code postal</h3>
          <input name="zipCode" value={form.zipCode} type="number" onChange={handleChange} required/>
          <div className="btns">
            <button onClick={handleClickBack}>Back</button>
            <button onClick={handleClickNext}>Next</button>
          </div>
      </form>
    </div>
  );
}

export default Shipping;
