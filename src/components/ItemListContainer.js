import React from 'react'
 
const ItemListContainer = ({greeting}) => {
    
  return (
    
    <section className='banner'>
        <h1 className='title'>¡Bienvenidos a Blue Label!</h1>
        <h2 className='subTitle'>{greeting} </h2>
    </section>
  )
}

export default ItemListContainer