import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const queryDB = getFirestore();
    const queryDoc = doc(queryDB, "products", id);
    getDoc(queryDoc)
      .then((res) => setProductDetail({ id: res.id, ...res.data() }))
      .then(() => setLoader(false))
      .catch(() => {
        setError(true);
        console.error(error);
      })
      .finally(() => setLoader(false));
  }, [id]);

  return (
    <>
      {loader ? (
        <div className="spinnerInside">
          <div className="spinner"></div>
        </div>
      ) : (
        <ItemDetail productDetail={productDetail} />
      )}
    </>
  );
};

export default ItemDetailContainer;
