import React, { useContext } from "react";
import FavoriteItem from "../components/FavoriteItem";
import { FavoriteContext } from "../Context/FavoritesContext";
import { Link } from "react-router-dom";

const Favorites = () => {
  const favoriteContext = useContext(FavoriteContext);
  const { removeProduct, cleanFavorite, favorite } = favoriteContext;
  return (
    <>
      <section className="list-fav-container">
      <h1 className="favsTitle"> Favoritos</h1>
        <div className="productsInFav">
          {favorite ? (
           favorite.map((productDetail) => {
             return (
               <FavoriteItem
                 key={productDetail.id}
                 productDetail={productDetail}
                 removeProduct={removeProduct}
               />
             );
           })
         ) : (
            <p>Cargando productos</p>
          )}
        </div>
        {favorite.length ? (
          <>
            <div className="favBtns">
              <button className="clearFav" onClick={cleanFavorite}>
                Vaciar Lista de Favoritos
              </button>
            </div>
          </>
        ) : (
          <section className="favorites-section">
            <div>
              
              <h3>Guarda tus items favoritos</h3>
              <h6>
                ¿Queres guardar los productos que mas te gustan? Hace click en
                el corazon que se encuentra en el detalle de cada producto y se
                mostrará aqui.
              </h6>
              <Link to="/" className="seeMore">
                Ver ahora
              </Link>
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default Favorites;
