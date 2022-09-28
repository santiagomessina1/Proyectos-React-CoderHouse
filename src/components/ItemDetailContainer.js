import React from 'react'
import { useState, useEffect } from 'react'
import { products } from '../assets/products'
import { customizedFetch } from '../utils/customizedFetch'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [productDetail, setProductDetail] = useState({})
    const [loader, setLoader] = useState(true)

    useEffect(() =>{
        setLoader(true)
        customizedFetch(products, parseInt(id))
            .then(res => {
                setLoader(false)
                setProductDetail(res)
            })
    }, [id])

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