import React from 'react'
import {Link, NavLink} from 'react-router-dom'
export const Menu = () => {

    const categorias = [
        {id: 0, name: 'Home',  route: "/Home"},
        {id: 1, name: 'Mujer', route: "/categoria/Mujer"},
        {id: 2, name: 'Hombre', route: "/categoria/Hombre"},
        {id: 4, name: 'Contacto', route: "/Contacto"}
        ] 
  return (
    <>
    {
        categorias.map((categoria)=>{
          return(<li className="nav-item" key={categoria.id} >
          <Link className="nav-link  link--3" to={categoria.route}>{categoria.name}</Link>
        </li>)
          
        })
      }
    </>
    
  )
}
