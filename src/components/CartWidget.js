
import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { CartContext } from '../Context/CartContext'
const CartWidget = () => {

  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

 
  
  return (
    
    <div>
      {
        cart.length === 0 ?
        <div><FaShoppingCart className='shoppingCart' /></div> :
        <div>   <FaShoppingCart className='shoppingCart'/> <span className='total-qty'>{cart.length}</span></div>
      }

    </div>

  )
}

export default CartWidget



