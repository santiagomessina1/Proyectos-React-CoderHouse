import React from 'react'
import { useState, useEffect } from 'react'
import { products } from '../assets/products'
import { customizedFetch } from '../utils/customizedFetch'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
   
    const [listProducts, setListProucts] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() =>{
        setLoader(true)
        customizedFetch(products)
            .then(res => {
                setLoader(false)
                setListProucts(res)
            })
    }, [])

  return (
    <>
        {loader ?
            <div className="spinnerInside"><div className="spinner"></div></div>
            :
            <ItemDetail listProducts={listProducts}/>
        }
        
    </>
  )
}

export default ItemDetailContainer