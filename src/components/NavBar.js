import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  const categorias = [
    {id: 0, name: 'Home'},
    {id: 1, name: 'Productos'},
    ] 

  return (
    <header className="headerInicio">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <span className="navbar-brand text-light " >Blue <span className="rojo">Label</span>
          </span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              
              {
                categorias.map((categoria)=>{
                  return(<li className="nav-item" key={categoria.id} >
                  <span className="nav-link text-light link--3" href="">{categoria.name}</span>
                </li>)
                  
                })
              }
              <li className="nav-item">
                <span className="nav-link text-light link--3" ><CartWidget /></span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

