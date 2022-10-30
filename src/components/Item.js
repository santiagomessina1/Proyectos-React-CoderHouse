import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <section className="products">
      <div className="card-product">
        <div className="container">
          <div className="card">
            <img
              src={product.image}
              alt={product.title}
              className="itemImage"
            />
            <div className="card-body">
              <div className="row">
                <div className="card-title">
                  <Link to={`/producto/${product.id}`}>
                    <h4> {product.title} </h4>
                  </Link>

                  <h3>$ {product.price} </h3>
                </div>
                <hr />
                <div className="view-btn">
                  <Link to={`/producto/${product.id}`}>Ver mas detalles</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;
