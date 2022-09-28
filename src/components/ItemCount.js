import React from 'react'
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'; 

function ItemCount() {
    const [count, setCount] = useState(1);
    const [inCart, setInCart] = useState(false)
    let stock = count
    const addToCart = () =>setInCart(!inCart)
    const onAdd = () => setCount(count + 1)
    const onSubstract = () => setCount(count - 1)
        

    return (
        <>
        {
            inCart ? 
            <div>
                <Link to="/cart" ><h4 className='goToCart'>Ir al Carrito</h4></Link>
                <h4 className='inCart'>¡Producto agregado!</h4>
            </div>:
            <div className='add'>

                <div className='values'>
                    <button disabled={stock <= 1} className='decrease' onClick={onSubstract}> <FaArrowLeft/></button>
                    <span className='counter' stock={5}>{count}</span>
                    <button disabled={stock >= 10} className='increase' onClick={onAdd}><FaArrowRight/></button>
                    <Toaster />
                </div>
                <button className='addToCart' id='addToCart' onClick={addToCart}> <CartWidget/> Agregar al carrito</button>
                <Toaster />
            </div>
        }
            
        </>
    );
}


export default ItemCount
























