import React from "react";
import NavBar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount"
const App = () =>{
  const message = "Envio gratis en todos los productos"
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={message}/>
      <ItemCount />

    </>
  )
} 

export default App


































