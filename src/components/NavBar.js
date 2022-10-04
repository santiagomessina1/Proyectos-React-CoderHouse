import React from "react";
import CartWidget from "./CartWidget";
import logo from '../logo.png';
import { Menu } from "../assets/Menu"
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa"

function NavBar({ categorias }) {

  return (
    <>
      <header className="headerInicio">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <div className="cart-heart">
              <Link className="cart "  to='/Cart'><CartWidget /></Link>
              <Link className="heart-nav "  to='/Favoritos'><FaHeart /></Link>
            </div>
            <Link to='/'><img src={logo} alt="" className="logo" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <Menu categorias={categorias} />
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;

