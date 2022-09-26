import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import CartWidget from './CartWidget';


function ItemCount() {
    const [count, setCount] = useState(1);
    let stock = count;
    const onAdd = () => {
        if (stock >= 10) {
            toast("Puedes agregar un maximo de 10 productos")
        }
        else {
            setCount(count + 1)
        }
    }

    const onSubstract = () => {
        if (stock <= 1) {
            toast("Por favor, ingresa una cantidad valida")
        }
        else {
            setCount(count - 1)
        }
    }
    const addToCart = () => {
        if (stock === 1) {
            toast("Se agregó un producto")
        }
        else {
            toast("Se agregaron " + parseInt(count) + " productos")
        }
    }


    return (
        <>
            <div className='add'>

                <div className='values'>
                    <button className='decrease' onClick={onSubstract}> <FaArrowLeft/></button>
                    <span className='counter' stock={5}>{count}</span>
                    <button className='increase' onClick={onAdd}><FaArrowRight/></button>
                    <Toaster />
                </div>
                <button className='addToCart' onClick={addToCart}> <CartWidget/> Agregar al carrito</button>
                <Toaster />
            </div>
        </>
    );
}


export default ItemCount
























