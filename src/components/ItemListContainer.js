import React from "react";
import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const queryDB = getFirestore();
    const queryCollection = collection(queryDB, "products");
    if (category) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", category)
      );
      getDocs(queryFilter)
        .then((res) =>
          setListProducts(
            res.docs.map((product) => ({ id: product.id, ...product.data() }))
          )
        )
        .then(() => setLoading(false))
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    } else {
      getDocs(queryCollection)
        .then((res) => {
          setListProducts(
            res.docs.map((product) => ({ id: product.id, ...product.data() }))
          );
        })
        .then(() => setLoading(false))
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    }

    return () => {
      setLoading(true);
      setListProducts([]);
    };
  }, [category]);

  return (
    <>
      <section className="banner">
        <h1 className="title">¡Bienvenidos a Clone&M!</h1>
        <h2 className="subTitle">{greeting} </h2>
      </section>

      <section className="products">
        {loading ? (
          <div className="spinnerInside">
            <div className="spinner"></div>
          </div>
        ) : (
          <ItemList listProducts={listProducts} />
        )}
      </section>
    </>
  );
};

export default ItemListContainer;
