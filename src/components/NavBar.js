import React from "react";

const NavBar = () =>{
    return(
        <header className="headerIndex">
            <nav className="navIndex">
                <h1 className="logo">Blue <span>Label</span></h1>
                <div >
                    <ul className="navigation">
                        <li>Home</li>
                        <li>Products</li>
                        <li>Shopping cart</li>
                    </ul>
                </div>
            </nav>
        </header>


        
    )
}

export default NavBar