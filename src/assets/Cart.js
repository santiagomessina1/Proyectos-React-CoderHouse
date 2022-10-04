import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowDown } from "react-icons/fa"
import { CartContext } from '../Context/CartContext'
import CartItem from '../components/CartItem'

const Cart = () => {

    const cartContext = useContext(CartContext);

    const { cart, deleteCartById, deleteCart } = cartContext;

    return (

        <>
            <hr />
            < h1 className='cartTitle'> Carrito de compras</h1 >

            <section className="list-cart-container">

                {cart ? (cart.map(product => {
                    return (<CartItem key={product.id}
                        product={product}
                        deleteCartById={deleteCartById}
                        
                    />
                    
                    );
                }))
                    : <p>Cargando productos</p>
                }
                {cart.length ? (
                    <>
                        
                        <div className='cartBtns'>
                            <div className="totalAmount">
                                

                            </div>
                            <button
                                className="clearCart"
                                onClick={deleteCart}
                            >Vaciar Carrito</button>
                            <button
                                className="buyBtn"
                            >Finalizar compra</button>
                        </div>
                    </>)
                    : <section className='cartView'>
                        
                        <h2>¡Oops tu carrito esta vacio!</h2>
                        <h4>Agrega tus productos haciendo click aqui abajo</h4>
                        <h4> <FaArrowDown /></h4>

                        <Link to="/">
                            <img src="https://st2.depositphotos.com/47577860/46938/v/450/depositphotos_469389406-stock-illustration-buy-ecommerce-empty-cart-icon.jpg" alt="" />
                        </Link>
                    </section >
                }

                
            </section>





        </>
    )
}

export default Cart



