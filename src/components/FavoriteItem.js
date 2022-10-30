import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GrTrash } from "react-icons/gr";
import { CartContext } from "../Context/CartContext";
import { Toaster } from "react-hot-toast";
import ItemCount from "./ItemCount";

const FavoriteItem = ({ productDetail, removeProduct }) => {
  const { addToCart } = useContext(CartContext);
  const onAdd = (qty) => addToCart(productDetail, qty);

  return (
    <>
      <section className="products">
        <div className="fav-product">
          <div className="container">
            <div className="FavCard">
              <img src={productDetail.image} alt="" className="favItemImage" />

              <div className="card-body">
                <GrTrash
                  className="deleteToFav"
                  onClick={() => removeProduct(productDetail.id)}
                />

                <div className="row">
                  <div className="card-title">
                    <h4> {productDetail.title} </h4>
                    <h3>$ {productDetail.price} </h3>
                  </div>
                  <hr />
                  <div className="view-btn">
                    <Link to={`/producto/${productDetail.id}`}>
                      Ver mas detalles
                    </Link>
                  </div>
                  <div className="favorite">
                    <ItemCount stock={10} initial={1} onAdd={onAdd}/>
                    <Toaster position="top-right" reverseOrder={false} />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FavoriteItem;
