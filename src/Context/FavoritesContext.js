import React, { createContext, useState, useEffect } from "react";

export const FavoriteContext = createContext(null);

const FavoriteProvider = ({children}) => {
  const [favorite, setFavorite] = useState([]) 


//   const isInFavorite = (id) => favorite.find((prod) => prod.id === id) ? true : false;

//   const addToFavorite = (item) => {
//     if (isInFavorite(item.id)) {
//       alert("el producto ya fue agregado");
//     } else {
//       const newProduct = { ...item };
//       setFavorite([...favorite, newProduct]);
//     }
//   };

const addToFavorite = (product) =>{
    // const favExist = favorite.find((item) => item.id === product.id)
    // if(favExist){
    //     setFavorite(alert('el producto ya esta en el carrito'))
    // }else{
      alert('producto agregado')
        setFavorite([...favorite, product])
    // }
}

  const removeProduct = (id) =>{
    setFavorite(favorite.filter((prod) => prod.id !== id));
}
   
  const cleanFavorite = () => setFavorite([]);

  
  return (
    <FavoriteContext.Provider
      value={{
        addToFavorite,
        removeProduct,
        cleanFavorite,
        favorite,
        
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
