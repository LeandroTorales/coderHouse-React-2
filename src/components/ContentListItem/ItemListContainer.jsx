import React, { useEffect, useState } from "react";
import { getPromiseItems } from "./dataObjects/promise";
import ItemList from "./components/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getPromiseItems().then((respuesta) => {
      return setProducts(respuesta);
    });
  }, []);

  return (
    <>
      <ItemList products={products}/>
    </>
  );
};

export default ItemListContainer;
