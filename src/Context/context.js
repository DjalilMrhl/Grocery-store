import React, { createContext, useState } from 'react'


const Color = createContext()
const ShippingForm = createContext()

function Context({children}) {

const [active, setActive] = useState(1)
const [form, setForm] = useState({
  date: localStorage.getItem('date')? JSON.parse(localStorage.getItem('date')): "",
  address: localStorage.getItem('address')? JSON.parse(localStorage.getItem('address')): "",
  zipCode: localStorage.getItem('zipCode')? JSON.parse(localStorage.getItem('zipCode')): "",
  email: localStorage.getItem('email')? JSON.parse(localStorage.getItem('email')): "",
  phonNumber: localStorage.getItem('phonNumber')? JSON.parse(localStorage.getItem('phonNumber')): "",
})

  return (
    <ShippingForm.Provider value={{form, setForm}}>
    <Color.Provider value={{active, setActive}}>
        {children}
    </Color.Provider>
    </ShippingForm.Provider>
  )
}

export {Context,Color,ShippingForm}