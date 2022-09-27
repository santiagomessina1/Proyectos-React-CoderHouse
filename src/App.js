import React from "react";
import NavBar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer";
import Footer from './components/Footer'
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import Cart from './assets/Cart'


const App = () => {
  const message = "Envio gratis en compras superiores a $8000"
  return (
    <>

        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer greeting={message} /> } />
          <Route path="/categoria/:category" element={ <ItemListContainer greeting={message} /> }/>
          <Route path="/producto/:id" element={ <ItemDetailContainer /> }/>
          <Route path="/cart" element={ <Cart/> } />   
        </Routes>
        <Footer />
        

      
    </>
  )
}

export default App


































