import React, { useEffect, useState } from "react";
import { getByCategoryItems, getPromiseItems } from "./promise";
import ItemList from "./components/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  let { categoryId } = useParams();


  const getItems = async () => {
    if (categoryId == undefined) {
      let respuesta = await getPromiseItems();
      return setProducts(respuesta);
    } else {
      let respuesta = await getByCategoryItems(categoryId);
      return setProducts(respuesta);
    }
  };

  useEffect(() => {
    getItems();
  }, [categoryId]);

  return (
    <>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
