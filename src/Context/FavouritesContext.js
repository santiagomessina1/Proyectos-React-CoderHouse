import React, {createContext, useState} from 'react'

export const FavouritesContext = createContext(null)

const FavoritesProvider = ({children}) => {

  const [wishList, setWishList] = useState(false)
  const [favorite, setFavorite] = useState([])

 
  const addToFavorite = () =>{
    setWishList(!wishList)
    
   }

 const deleteToFavorite = () =>{
  setWishList(!wishList)
 }

  const clearFavorite = () => {
    setFavorite([])
  }




  
  return (
    <FavouritesContext.Provider 
      value={{addToFavorite,
              deleteToFavorite, 
              clearFavorite,
              wishList,
              favorite
              }}>

        {children}
    </FavouritesContext.Provider>
  )
}

export default FavoritesProvider