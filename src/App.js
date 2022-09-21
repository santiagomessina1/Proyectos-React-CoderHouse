import React from "react";
import NavBar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer";
import Footer from './components/Footer'
import ItemDetailContainer from "./components/ItemDetailContainer";


import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  const message = "Envio gratis en compras superiores a $8000"
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ItemListContainer greeting={message} />
        <ItemDetailContainer />
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App


































