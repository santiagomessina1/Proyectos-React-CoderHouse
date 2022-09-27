import React from 'react'
import { Link } from 'react-router-dom'
const Cart = () => {
    return (
        <>
            <section className='cartView'>
                <h1>Carrito de compras</h1>
                <h2>¡Oops tu carrito esta vacio!</h2>
                <Link to="/">
                    <img src="https://st2.depositphotos.com/47577860/46938/v/450/depositphotos_469389406-stock-illustration-buy-ecommerce-empty-cart-icon.jpg" alt="" />
                </Link>
            </section>



        </>
    )
}

export default Cart