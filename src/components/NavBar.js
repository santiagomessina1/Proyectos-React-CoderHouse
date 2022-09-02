import React from "react";

function NavBar() {
  return (
    <header className="headerInicio">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand text-light " href="#">Blue <span className="rojo">Label</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              
              <li className="nav-item">
                <a className="nav-link text-light link--3" href="./paginas/precios.html">Home</a>
                
              </li>
              <li className="nav-item">
                <a className="nav-link text-light link--3" href="./paginas/actividades.html">Products</a>
              </li>
  
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

