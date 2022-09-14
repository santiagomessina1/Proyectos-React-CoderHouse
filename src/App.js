import React from "react";
import NavBar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer";
import Footer from './components/Footer'

const App = () =>{
  const message = "Envio gratis en compras superiores a $8000"
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={message}/>
      <Footer />
    </>
  )
} 

export default App


































