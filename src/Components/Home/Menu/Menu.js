import './Menu.scss'
import React, { useState, useContext } from 'react'
import { BiShow } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import {data as products} from './../../../data.js'
import { CartContext } from '../../../Context/context'


function Menu() {

  const {setProduct} = useContext(CartContext)
  const [name, setName] = useState('All Products')
  const [category, setCategory] = useState([])
  const navigate = useNavigate()  
  
  

  const handleClick = (e) => {
    setName(e.target.name)
    setCategory(products.filter(item=> item.category.toLowerCase() === e.target.name.toLowerCase()))
  }

  return (
    <section className="menu" id="menu">
        <div className="menu--container">
            <h3>{name}</h3>
            <aside>
                <button name='All Products' onClick={handleClick}>All Products</button>
                <button name='Vegetables' onClick={handleClick}>Vegetables</button>
                <button name='Fruits' onClick={handleClick}>Fruits</button>
                <button name='Seafood' onClick={handleClick}>Seafood</button>
            </aside>
            <div className="cards">
              {name==='All Products'?products.map(item =>
              <div className="card" key={item.id}>
                <img src={item.thumbnail} alt="" onClick={()=> {
                          navigate(`/products/${item.id}`)
                          setProduct(item)
                          localStorage.setItem('product',JSON.stringify(item))
                        }}/>
                <p>$ {item.price}</p>
                <h5>{item.title}</h5>
                <div className="icons">
                <BiShow className="icon" onClick={()=> {
                          navigate(`/products/${item.id}`)
                          setProduct(item)
                          localStorage.setItem('product',JSON.stringify(item))
                        }}/>
                </div>
              </div>):
              category.map(item =>
              <div className="card" key={item.id}>
                <img src={item.thumbnail} alt="" onClick={()=> {
                          navigate(`/products/${item.id}`)
                          setProduct(item)
                          localStorage.setItem('product',JSON.stringify(item))
                        }}/>
                <p>$ {item.price}</p>
                <h5>{item.title}</h5>
                  <BiShow className="icon" onClick={()=> {
                          navigate(`/products/${item.id}`)
                          setProduct(item)
                          localStorage.setItem('product',JSON.stringify(item))
                        }}/>
              </div>)}
              </div>
        </div>
    </section>
  )
}

export default Menu
