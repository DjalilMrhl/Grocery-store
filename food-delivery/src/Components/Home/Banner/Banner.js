import "./Banner.scss";
import React from "react";
import Slider from "react-slick";
import img1 from "../../../assets/LP-Grocery-and-supermarkets.jpeg";
import img2 from "../../../assets/bg.jpeg";
import img3 from "../../../assets/bg3.jpg";
import { Link } from "react-scroll";

function Banner() {
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider--container">
      <Slider className="slider" {...settings}>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </Slider>
      <div className="content">
        <h1>Fresh Vegetables & Fruits at your doorstep</h1>
        <p>we deliver fresh vegetables & fruits at your doorstep</p>
        <Link to="menu" spy={true} offset={-50} duration={500}>
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default Banner;
