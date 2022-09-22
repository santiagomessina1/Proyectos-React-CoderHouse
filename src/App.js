import React from "react";
import NavBar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer";
import Footer from './components/Footer'
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartWidget from "./components/CartWidget";
import ItemDetail from "./components/ItemDetail";


const App = () => {
  const message = "Envio gratis en compras superiores a $8000"
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer greeting={message} /> } />
          <Route path="/categoria/:categoryId" element={ <ItemListContainer greeting={message} /> }/>
          <Route path="/producto/: productId" element={ <ItemDetailContainer /> }/>
          <Route path="/cart" element={ <CartWidget/> } />   
        </Routes>
        <ItemDetailContainer />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App


































