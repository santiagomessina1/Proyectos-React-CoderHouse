import React from 'react'
import {NavLink} from 'react-router-dom'
export const Menu = () => {

    const categorias = [
        
        {id: 0, name: 'Mujer', route: "/categoria/Mujer"},
        {id: 1, name: 'Hombre', route: "/categoria/Hombre"},

        ] 
  return (
    <>
    {
        categorias.map((categoria)=>{
          return(<li className="nav-item" key={categoria.id} >
          <NavLink className="nav-link  link--3" to={categoria.route}>{categoria.name}</NavLink>
        </li>)
          
        })
      }
    </>
    
  )
}
