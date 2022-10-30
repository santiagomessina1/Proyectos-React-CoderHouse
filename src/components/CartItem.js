import React from "react";
import { VscClose } from "react-icons/vsc";

const CartItem = ({ product, removeProduct }) => {
  return (
    <>
      <section className="itemsCart">
        <section className="itemsInCart">
          <div className="items">
            <img src={product.image} alt={product.title} className="imgItem" />
          </div>
          <div className="itemsContent">
            <p>{product.title}</p>
            <div className="quantities">
              <p>{product.category}</p>
              <p className="itemPrice">${product.price} </p>
              <p className="itemQty">Qty: {product.qty}</p>
              <p className="itemTotal">Total: ${product.price * product.qty}</p>
              <button
                onClick={() => removeProduct(product.id)}
                className="removeItem"
              >
                <VscClose />
              </button>
            </div>
            
          </div>
        </section>
      </section>
    </>
  );
};

export default CartItem;
