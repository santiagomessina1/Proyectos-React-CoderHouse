import React from 'react'
import { useState, useEffect } from 'react'
import { products } from '../assets/products'
import { customizedFetch } from '../utils/customizedFetch'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
   
    const [productDetail, setProductDetail] = useState({})
    const [loader, setLoader] = useState(true)
    useEffect(() =>{
        setLoader(true)
        customizedFetch(products, 1)
            .then(res => {
                setLoader(false)
                setProductDetail(res)
            })
    }, [])

  return (
    <>
        {   loader ?
            <div className="spinnerInside"><div className="spinner"></div></div>
            :
            <ItemDetail productDetail={productDetail}/>
        }
        
    </>
  )
}

export default ItemDetailContainer