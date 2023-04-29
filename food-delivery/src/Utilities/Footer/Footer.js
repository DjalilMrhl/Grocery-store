import './Footer.scss'
import React from 'react'
import { Fa500Px, FaLocationArrow, FaPhoneAlt, FaStar }from 'react-icons/fa'
import logo from '../../assets/logo.png'

function Footer() {
  return (
    <footer className="footer" id="footer">
        <div className="footer--container">
            <div className="header">
                <div className="content">
                    <h2>Fresh Vegetables & Fruits at your doorstep</h2>
                    <p>We deliver fresh vegetables and fruits at your doorstep. We deliver fresh vegetables and fruits at your doorstep.</p>
                </div>
            </div>
            <div className="informations">
                <div className="contact-info">
                    <img src={logo} alt="" />
                    <p><FaLocationArrow/> 123 main street, Your city.</p>
                    <p><FaPhoneAlt/> 12345678</p>
                </div>
                <div className="services">
                    <h5>Customer Services</h5>
                    <ul>
                        <li>FAQ & Help</li>
                        <li>Order Tracking</li>
                        <li>Order History</li>
                        <li>Shipping & Delivery</li>
                        <li>Advanced search</li>
                        <li>My account</li>
                    </ul>
                </div>
                <div className="links">
                    <h5>Useful links</h5>
                    <ul>
                        <li>News</li>
                        <li>Privacy Policy</li>
                        <li>Disclamer</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <div className="titles">
                    <p><Fa500Px/>PROMPT DELIUVERY<br/>flat fee from $60</p>
                    <p><FaStar/>FRESHNESS GUARANTEED<br/>View Menu</p>
                    <p><FaPhoneAlt/>+12345678<br/>Contact Us</p>
                </div>
                <span>© 2023 Grocery. All rights reserved.</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer