import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { HiOutlineHeart } from "react-icons/hi";
import { HiHeart } from "react-icons/hi";

import { CartContext } from "../Context/CartContext";
import { FavoriteContext } from "../Context/FavoritesContext";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Toaster } from "react-hot-toast";

const ItemDetail = ({ productDetail }) => {
  const { addToCart } = useContext(CartContext);
  const { addToFavorite, removeProduct } = useContext(FavoriteContext);
  const [changeFavBtn, setChangeFavBtn] = useState(false);
  const [changeBtn, setChangeBtn] = useState(false);
  const onAdd = (qty) => {
    setChangeBtn(true);
    addToCart(productDetail, qty);
  };

  return (
    <>
      <hr />
      <div className="container-details-products">
        <div className="product-image">
          <Carousel className="ImgProducts" width={500} showStatus={false}>
            <div className="ImgProducts">
              <img
                src={productDetail.image}
                alt={productDetail.title}
                className="product-pic"
              />
            </div>
            <div className="ImgProducts">
              <img
                src={productDetail.image2}
                alt={productDetail.title}
                className="product-pic"
              />
            </div>
          </Carousel>
        </div>

        <div className="product-details">
          <section>
            <div className="heart">
              {changeFavBtn ? (
                <div>
                  <span>
                    {" "}
                    <HiHeart
                      className="liked"
                      onClick={() => {
                        setChangeFavBtn(!changeFavBtn);
                        removeProduct(productDetail.id);
                      }}
                    />
                  </span>
                </div>
              ) : (
                <div>
                  <span>
                    {" "}
                    <HiOutlineHeart
                      className="disliked"
                      onClick={() => {
                        setChangeFavBtn(!changeFavBtn);
                        addToFavorite(productDetail);
                      }}
                    />
                  </span>
                </div>
              )}
            </div>
            <h1 className="title"> {productDetail.title}</h1>
            <div className="price">
              <span>${productDetail.price}</span>
            </div>
          </section>

          <div className="qty">
            {changeBtn ? (
              <div>
                <Link to="/cart">
                  <h4 className="goToCart">Ir al Carrito</h4>
                </Link>
                <h4 className="inCart">¡Producto agregado!</h4>
              </div>
            ) : (
              <div className="itemCount">
                <ItemCount stock={10} initial={1} onAdd={onAdd} />
                <Toaster position="top-right" reverseOrder={false} />
              </div>
            )}
          </div>

          <div className="details">
            <p>{productDetail.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
