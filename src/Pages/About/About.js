import './About.scss'
import React from 'react'
import img1 from '../../assets/about1.jpg'
import img2 from '../../assets/about2.jpg'

function About() {
  return (
    <section className="about" id="about">
        <h1>About Us</h1>
        <div className="about--container">
            <div>
                <div className="desc">
                    <h1>Our Story</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem distinctio amet sapiente! Dolorem temporibus voluptatum debitis voluptas laborum voluptatibus minima, enim omnis autem quaerat cumque, nostrum pariatur, reiciendis consectetur.</p>
                </div>
                <img src={img1} alt="" />
            </div>
            <div>
                <img src={img2} alt="" />
                <div className="desc">
                    <h1>Who We Are ?</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, nihil nisi ipsa deleniti eaque illum fugiat tempora sapiente, vero eligendi, quisquam laboriosam amet. Maxime nulla cumque nostrum eveniet tempora optio.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About