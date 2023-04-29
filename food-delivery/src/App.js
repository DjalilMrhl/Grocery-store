import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Auth, Cart, Product, Contact, Home } from "./Pages";
import { Footer, NavBar, NotFound } from "./Utilities";
import { CartItems, Checkout, Login, Payment, Register, Shipping } from "./Components";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />}>
            <Route index element={<CartItems />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="payment" element={<Payment />} />
            <Route path="confirmation" element={<Checkout />} />
          </Route>
          <Route path="/auth" element={<Auth />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
