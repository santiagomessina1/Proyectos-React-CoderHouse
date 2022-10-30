import React, { createContext, useState, useEffect } from "react";
import toast from 'react-hot-toast';
export const CartContext = createContext(null);

const CartProvider = (props) => {
  const [cart, setCart] = useState(() => {
    try {
      const productsInLocalStorage = localStorage.getItem("cartProducts");
      return productsInLocalStorage ? JSON.parse(productsInLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cart));
  }, [cart]);

  const [changeBtn, setChangeBtn] = useState(false);


  const isInCart = (id) => cart.find((prod) => prod.id === id);

  const addToCart = (item, qty) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((prod) => {
        if (prod.id === item.id) {
          const newQuantity = prod.qty + qty;
          if (newQuantity <= 10) {
            setChangeBtn(true)
            return { ...prod, qty: newQuantity }
          } else {
            toast.error("Stock maximo en el carrito.")
            setChangeBtn(false)
          }
        }
        return prod;
      });
      setCart(newCart);
      
    } else {
      const newProduct = { ...item, qty: qty };
      setCart([...cart, newProduct]);
      setChangeBtn(true)
    }
  };

  const removeProduct = (id) => setCart(cart.filter((prod) => prod.id !== id));

  const cleanCart = () => setCart([]);

  const totalPrice = () => {
    return cart.reduce(
      (acc, product) => (acc += product.price * product.qty),
      0
    );
  };

  const totalQuantity = () => {
    return cart.reduce((acc, product) => (acc += product.qty), 0);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeProduct,
        cleanCart,
        totalPrice,
        totalQuantity,
        cart,
        changeBtn
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
