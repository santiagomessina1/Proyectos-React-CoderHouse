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
          <a className="navbar-brand text-light " href="">Blue <span className="rojo">Label</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              
              {
                categorias.map((categoria)=>{
                  return(<li className="nav-item">
                  <a key={categoria.id} className="nav-link text-light link--3" href="">{categoria.name}</a>
                </li>)
                  
                })
              }
              <li className="nav-item">
                <a className="nav-link text-light link--3" href=""><CartWidget /> </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

