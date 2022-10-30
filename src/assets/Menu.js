import React from "react";
import { NavLink } from "react-router-dom";

export const Menu = () => {
  const categorias = [
    { id: 0, name: "Remeras", route: "/categoria/Remeras" },
    { id: 1, name: "Buzos", route: "/categoria/Buzos" },
    { id: 2, name: "Zapatillas", route: "/categoria/Zapatillas" },
    { id: 3, name: "Jeans", route: "/categoria/Jeans" },
    { id: 4, name: "Accesorios", route: "/categoria/Accesorios" },
    { id: 5, name: "Ropa Deportiva", route: "/categoria/Ropa Deportiva" },
    { id: 6, name: "Shorts", route: "/categoria/Shorts" },
    { id: 7, name: "Medias", route: "/categoria/Medias" },
  ];

  return (
    <>
      {categorias.map((categoria) => {
        return (
          <li className="nav-item" key={categoria.id}>
            <NavLink className="nav-link  link--3" to={categoria.route}>
              {categoria.name}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
