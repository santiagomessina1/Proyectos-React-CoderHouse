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
    // const addToCart = () =>setInCart(!inCart)
    const onAdd = () => setCount(count + 1)
    const onSubstract = () => setCount(count - 1)


    return (
        <>
            <div className='add'>
                <div className='values'>
                    <button disabled={stock <= 1} className='decrease' onClick={onSubstract}> <FaArrowLeft /></button>
                    <span className='counter' stock={5}>{count}</span>
                    <button disabled={stock >= 10} className='increase' onClick={onAdd}><FaArrowRight /></button>
                    <Toaster />
                </div>
            </div>
        </>
    );
}


export default ItemCount
























