import React, { useEffect, useState } from "react";
import { getByCategoryItems, getPromiseItems } from "./promise";
import ItemList from "./components/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  let categoryParams = undefined;

  /*   console.log('categoryParams:', categoryParams)
   */

  const getItems = async () => {
    if (!categoryParams) {
      let respuesta = await getPromiseItems();
      return setProducts(respuesta);
    } else {
      let respuesta = await getByCategoryItems(categoryParams);
      return setProducts(respuesta);
    }
  };

  useEffect(() => {
    getItems();
  }, [products]);

  return (
    <>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
