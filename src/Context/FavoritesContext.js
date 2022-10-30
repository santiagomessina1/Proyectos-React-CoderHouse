import React, { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

export const FavoriteContext = createContext(null);

const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = useState(() => {
    try {
      const favsInLocalStorage = localStorage.getItem("favProducts");
      return favsInLocalStorage ? JSON.parse(favsInLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("favProducts", JSON.stringify(favorite));
  }, [favorite]);

  const favExist = (id) => favorite.find((prod) => prod.id === id);

  const addToFavorite = (item) => {
    if (favExist(item.id)) {
      toast.error("El producto ya esta en favoritos");
    } else {
      setFavorite([...favorite, item]);
    }
  };
  const removeProduct = (id) => {
    setFavorite(favorite.filter((prod) => prod.id !== id));
  };

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
