import Cart from "./assets/Cart";
import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Favorites from "./assets/Favorites";
import CartProvider from "./Context/CartContext";
import CheckoutForm from "./components/CheckoutForm";
import FavoriteProvider from "./Context/FavoritesContext";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const message = "Envio gratis en compras superiores a $8000";
  return (
    <>
      <CartProvider>
        <FavoriteProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={message} />}
            />
            <Route
              path="/categoria/:category"
              element={<ItemListContainer greeting={message} />}
            />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Favoritos" element={<Favorites />} />
            <Route path="/Checkout" element={<CheckoutForm />} />
          </Routes>
          <Footer />
        </FavoriteProvider>
      </CartProvider>
    </>
  );
};

export default App;
