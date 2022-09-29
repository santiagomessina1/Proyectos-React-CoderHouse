import React, {useState} from 'react'
import { Link } from 'react-router-dom'
const WishList = () => {



  return (
    <>
        <hr />
        <section className='favorites-section'>
            <h1>Tus productos favoritos</h1>
            <h3>Guarda tus items favoritos</h3>
            <h6>¿Queres guardar los productos que mas te gustan? Hace click en el corazon que se encuentra en el detalle de cada producto y se mostrará aqui.</h6>
            <Link to="/" className='seeMore'>Ver ahora</Link>
        </section>
    
    
    </>
  )
}

export default WishList
