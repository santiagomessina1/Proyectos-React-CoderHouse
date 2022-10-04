import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart, FaTrashAlt } from "react-icons/fa"

const CartItem = ({ product, deleteCartById, }) => {


  return (
    <>
      <section className='itemsCart'>
        <section className='itemsInCart'>

          <div className='items'>
            <img src={`../${product.image}`} alt="" className='imgItem' />
          </div>
          <div className="itemsContent">
            <div className='titleCart'>
              <h1>{product.title}</h1>
              <div>
                <Link ><FaHeart className='cartDisliked' /></Link>
                <button onClick={() => deleteCartById(product.id)} className="removeItem" > <FaTrashAlt /></button>
              </div>


            </div>

            <h4 className='free-shipping'>Envio gratis</h4>
            <p className='itemQty'>Cantidad: {product.qty}</p>

            <div className="quantities">
              <p className='itemPrice'>Precio: ${product.price} </p>
              <p className='itemPrice'>Total: ${product.price * product.qty} </p>
            </div>

          </div>

          <h1></h1>
        </section>
      </section>






    </>
  )
}

export default CartItem