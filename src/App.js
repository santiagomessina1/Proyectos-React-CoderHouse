import React from "react";

import NavBar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer";


const App = () =>{
  const message = "Envio gratis en todos los productos"
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={message}/>
    </>
  )
} 

export default App


































