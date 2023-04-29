import './Categories.scss'
import React from 'react'
import img1 from '../../../assets/vegetable.png'
import img2 from '../../../assets/orange.png'
import img3 from '../../../assets/grocery.png'
import img4 from '../../../assets/house.png'

function Categories() {
  return (
    <section className="categories" id="categories">
        <div className="categories--container">
            <div>
                <img src={img1} alt="" />
                <div className="card--content">
                    <h4>vegetables at your dorstep</h4>
                    <a href='#menu'>Shop Now</a>
                </div>
            </div>
            <div>
                <img src={img2} alt="" />
                <div className="card--content">
                    <h4>vegetables at your dorstep</h4>
                    <a href='#menu'>Shop Now</a>
                </div>
            </div>
            <div>
                <img src={img3} alt="" />
                <div className="card--content">
                    <h4>vegetables at your dorstep</h4>
                    <a href='#menu'>Shop Now</a>
                </div>
            </div>
            <div>
                <img src={img4} alt="" />
                <div className="card--content">
                    <h4>vegetables at your doorstep</h4>
                    <a href='#menu'>Shop Now</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Categories