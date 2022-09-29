import React from 'react'
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial);
    const [inCart, setInCart] = useState(false)
    // let stock = count
    // const addToCart = () =>setInCart(!inCart)
    // const onAdd = () => setCount(count + 1)
    // const onSubstract = () => setCount(count - 1)

    const addToCart = () =>{
        onAdd(count)
        setCount(1)
    }


    return (
        <>
            <div className='add'>
                <div className='values'>
                    <button disabled={stock >= 10}  className='decrease' onClick={()=> count <stock && setCount((prevState) => prevState + 1)} > <FaArrowLeft /></button>
                    <span className='counter' stock={5}>{count}</span>
                    <button  disabled={count === stock && true}  className='increase' onClick={()=> count <stock && setCount((prevState) => prevState + 1)}     ><FaArrowRight />  </button>
                    <button className='increase' onClick={()=> addToCart(count)}>Agregar al carrito</button>

                    <Toaster />
                </div>
            </div>
        </>
    );
}


export default ItemCount
























