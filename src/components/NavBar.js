import React from "react";
import CartWidget from "./CartWidget";
import logo from '../logo.png';
import {Menu} from "../assets/Menu"
import {Link, NavLink} from 'react-router-dom'
function NavBar({categorias}) {

  return (
    <>

      <header className="headerInicio">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
          <Link className="cart" ><CartWidget /></Link>

            <img src={logo} alt="" className="logo"/>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <Menu />
              </ul>
            </div>
          </div>
        </nav>
      </header>

    </>
  );
}

export default NavBar;

