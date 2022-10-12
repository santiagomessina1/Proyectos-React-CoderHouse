import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowDown } from "react-icons/fa"
import { CartContext } from '../Context/CartContext'
import { BsArrowBarLeft } from "react-icons/bs"
import CartItem from '../components/CartItem'
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import { db } from '../Firebase/firebase';

const Cart = () => {

    const cartContext = useContext(CartContext);
    const { cart, removeProduct, cleanCart, totalPrice, totalQuantity, } = cartContext;

    // const comprador = {
    //     nombre: "Juan",
    //     apellido: "Perez",
    //     email:"juanperez@gmail.com"
    //   };

    //   const finalizarCompra = ()=>{
    //     const ventasCollection = collection(db,"sells");
    //     addDoc(ventasCollection, {
    //       comprador,
    //       items: cart,
    //       date: serverTimestamp(),
    //       total: totalPrice(),

    //     })
    //     .then(result=>{
    //       console.log(result.id);
    //       cleanCart();
    //     })
    //   }

    return (
        <>


            < h1 className='cartTitle'> Carrito de compras</h1 >

            <section className="list-cart-container">
                <div className="productsInCart">

                    {cart ? (cart.map(product => {
                        return (<CartItem key={product.id}
                            product={product}
                            removeProduct={removeProduct}

                        />

                        );
                    }))
                        : <p>Cargando productos</p>
                    }
                    <div className='backToHome'>
                        <Link to="/" > <BsArrowBarLeft />Seguir comprando</Link>

                    </div>
                </div>
                {cart.length ? (
                    <>
                        <section className="container-summary">

                            <article>
                                <div className="summary">

                                    <ul>
                                        <li>
                                            Total:
                                        </li>
                                        <hr />
                                        <li>
                                            Items: {totalQuantity()}<span> ${totalPrice()} </span>
                                        </li>
                                        <li>
                                            Subtotal: <span>${totalPrice()}</span>
                                        </li>
                                        <li className='shipping'>
                                            Envio standard
                                        </li>
                                        <hr />

                                        <li className="total">
                                            Total <span>${totalPrice()}</span>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                            <section className="checkout">
                                <Link className='checkOut' to="/CheckoutForm">Check Out</Link>
                                <button className='clearCart' onClick={cleanCart}>Vaciar carrito</button>

                            </section>

                        </section>

                    </>)

                    : <section className='emptyCart'>
                        <div className="cartView">
                            <h2>¡Oops tu carrito esta vacio!</h2>
                            <h4>Agrega tus productos haciendo click aqui abajo</h4>
                            <h4> <FaArrowDown /></h4>

                            <Link to="/">
                                <img src="https://st2.depositphotos.com/47577860/46938/v/450/depositphotos_469389406-stock-illustration-buy-ecommerce-empty-cart-icon.jpg" alt="" />
                            </Link>
                        </div>

                    </section >
                }

            </section>

        </>
    )
}

export default Cart


