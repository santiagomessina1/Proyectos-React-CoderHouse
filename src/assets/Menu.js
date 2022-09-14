import React from 'react'

export const Menu = () => {

    const categorias = [
        {id: 0, name: 'Home'},
        {id: 1, name: 'Mujer'},
        {id: 2, name: 'Hombre'},
        {id: 4, name: 'Contacto'}
        ] 
  return (
    <>
    {
        categorias.map((categoria)=>{
          return(<li className="nav-item" key={categoria.id} >
          <a className="nav-link  link--3" href="">{categoria.name}</a>
        </li>)
          
        })
      }
    </>
    
  )
}
