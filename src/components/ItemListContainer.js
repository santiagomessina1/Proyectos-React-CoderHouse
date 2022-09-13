import React from 'react'
import { ItemList } from './ItemList'
import { products } from '../assets/products'
import { customizedFetch } from '../utils/customizedFetch'
import { useEffect, useState } from 'react'
const ItemListContainer = ({ greeting }) => {

  const [listProducts, setListProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    customizedFetch(products)
      .then(res => {
        setLoading(false)
        setListProducts(res)

      })
  }, [])

  return (
    <>
      <section className='banner'>
        <h1 className='title'>¡Bienvenidos a Blue Label!</h1>
        <h2 className='subTitle'>{greeting} </h2>
      </section>

      <section className='products'>
        {loading ?
        <div className="spinnerInside"><div className="spinner"></div></div>
          :
          <ItemList listProducts={listProducts} />
        }
      </section>


    </>
  )
}

export default ItemListContainer