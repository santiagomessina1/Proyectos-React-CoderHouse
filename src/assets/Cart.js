import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowDown } from "react-icons/fa"
import { CartContext } from '../Context/CartContext'
import CartItem from '../components/CartItem'

const Cart = () => {

    const cartContext = useContext(CartContext);

    const { cart, removeProduct, cleanCart, totalPrice, totalQuantity } = cartContext;

    return (
        <>

            <hr />
            < h1 className='cartTitle'> Carrito de compras</h1 >

            <section className="list-cart-container">

                {cart ? (cart.map(product => {
                    return (<CartItem key={product.id}
                        product={product}
                        removeProduct={removeProduct}

                    />

                    );
                }))
                    : <p>Cargando productos</p>
                }
                {cart.length ? (
                    <>
                        <section className="container">
                            <article>
                                <div className="summary">

                                    <ul>
                                        <li>
                                            Cantidad de productos:  <span>{totalQuantity()}</span>
                                        </li>
                                        <li>
                                            Subtotal <span>${totalPrice()}</span>
                                        </li>
                                        <li className='shipping'>
                                            Envio <span>
                                                {
                                                    totalPrice() < 8000 ?
                                                        <span>$1200</span> :
                                                        <span> Gratis</span>
                                                }
                                            </span>
                                        </li>

                                        <li className="total">
                                            Total <span>${totalPrice()}</span>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                            <section className="checkout">
                                <div>
                                    <div className=".checkout-btns">
                                        <button className='clearCart' onClick={cleanCart}>Vaciar carrito</button>
                                        <button className='checkOut'>Check Out</button>
                                    </div>
                                </div>
                            </section>


                        </section>
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



