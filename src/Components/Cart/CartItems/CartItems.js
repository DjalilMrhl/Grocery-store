import React, { useContext } from "react";
import "./CartItems.scss";
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa'
import { BsTrash } from 'react-icons/bs'
import { CartContext, Color } from '../../../Context/context'
import { useNavigate } from "react-router";

function CartItems() {

    const {cartItems, cartTotalPrice, increaseQuantity, decreaseQuantity, removefromCart} = useContext(CartContext)
    const {setActive} = useContext(Color)
    const handleClick = () => {
      setActive(2)
      navigate('/cart/shipping')
    }
    const navigate = useNavigate()

  return (
    cartItems.length > 0?
    <><table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
        {cartItems.map((item, index) => (
          <tr key={index}>
            <td>
              <img src={item.thumbnail} alt="" />
              <div className="content">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </td>
            <td>
              <div className="quantity">
                <FaPlusSquare onClick={() => increaseQuantity(item)} />
                <span>{item?.cartQuantity}</span>
                <FaMinusSquare onClick={() => item?.cartQuantity > 1 && decreaseQuantity(item)} />
              </div>
            </td>
            <td>$ {item?.price}</td>
            <td>{(item?.price * item?.cartQuantity).toFixed(2)}</td>
            <td><BsTrash onClick={()=> removefromCart(item)} /></td>
          </tr>
        ))}
        </tbody>
      </table>
      <div className="wrapper">
          <button onClick={handleClick}>Next</button>
          <span>Total: $ {cartTotalPrice.toFixed(2)}</span>
        </div></> :
    <h2 className="empty">cart is Empty</h2>
  );
}

export default CartItems;
