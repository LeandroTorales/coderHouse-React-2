import React, { useEffect, useState } from "react";
import { getByCategoryItems, getPromiseItems } from "./promise";
import ItemList from "./components/ItemList";
import { useParams } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  let { categoryId } = useParams();

  const getItems = async () => {
    if (categoryId === undefined) {
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
      {products.length === 0 ? (
        <div className="spinner-container">
          <SpinnerCircular size={100} />
          <h2>Cargando productos...</h2>
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};

export default ItemListContainer;
