import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
const FavoriteItem = ({ productDetail, removeProduct }) => {

    return (
    <>
      <section className="products">
          <div className="card-product">
            <div className="container">
              <div className="card">
                <img src={productDetail.image} alt="" className="itemImage" />
                <div className="card-body">
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
                      <FaHeart className="disliked" onClick={removeProduct}/>
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
