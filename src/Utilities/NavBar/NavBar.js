import React, { useState, useContext } from "react";
import "./NavBar.scss";
import logo from "../../assets/logo.png";
import { Dropdown } from "react-bootstrap";
import { FaCartPlus, FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {data as products} from "./../../data.js"
import { CartContext } from "../../Context/context";

function NavBar() {

  const [menu, setMenu] = useState(false)
  const navigate = useNavigate()
  const categories = [...new Set(products.map(item=> item.category))]
  

  const {cartTotalQuantity} = useContext(CartContext)

  return (
    <nav className="nav">
      <div className="nav--container">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav>
          <input type="text" />
          <ul>
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  Categories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {categories?.map((cat, index)=>
                  <Dropdown.Item key={index} onClick={()=> {navigate("/")
                  window.scrollTo(0,1100)
                }}>{cat}</Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="btns">
          <div className="wrapper">
            <FaCartPlus onClick={()=> navigate('/cart')}/>
            {cartTotalQuantity > 0 && <span>{cartTotalQuantity}</span>}
          </div>
          <FaUserAlt onClick={()=> setMenu(prev=> !prev)} onBlur={()=> setMenu(false)}/>
  {menu &&<ul>
            <li><Link to='/auth/login' onClick={()=> setMenu(prev=> !prev)}>Login</Link></li>
            <li><Link to='/auth/register' onClick={()=> setMenu(prev=> !prev)}>Register</Link></li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
