import React from 'react'
import {NavLink} from 'react-router-dom'

export const Menu = () => {

    const categorias = [
        
        {id: 0, name: 'Remeras', route: "/categoria/Remeras"},
        {id: 1, name: 'Buzos', route: "/categoria/Buzos"},
        {id: 2, name: 'Zapatillas', route: "/categoria/Zapatillas"},
        {id: 3, name: 'Jeans', route: "/categoria/Jeans"},

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
