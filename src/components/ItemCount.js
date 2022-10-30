import React from "react";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function ItemCount({ initial, stock, onAdd }) {
  const [qty, setQty] = useState(initial);

  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div className="count">
      <div>
        <button
          className="decrease"
          onClick={() => addProduct(-1)}
          disabled={qty === initial ? true : null}
        >
          <FaArrowLeft />
        </button>
        <span>{qty}</span>
        <button
          className="increase"
          onClick={() => addProduct(+1)}
          disabled={qty === stock ? true : null}
        >
          <FaArrowRight />
        </button>
      </div>

      <button
        className="addToCart favAddToCart"
        onClick={() => {
            onAdd(qty);
        }}
        disabled={stock === 0 ? true : null}
      >
        Añadir al carrito
      </button>
    </div>
  );
}

export default ItemCount;
