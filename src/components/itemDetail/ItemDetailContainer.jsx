import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
import { getPromiseSingleItem } from "./promiseObject/promise";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  let { id } = useParams();

  const getItem = async () => {
    let respuesta = await getPromiseSingleItem(id);
    return setProduct(respuesta);
  };

  useEffect(() => {
    getItem();
  }, [id]);

  return (
    <>
      <ItemDetail
        id={product.id}
        imgUrl={product.imgUrl}
        sizes={product.sizes}
        colors={product.colors}
        nameProduct={product.nameProduct}
        price={product.price}
        stock={product.stock}
        textDescription={product.textDescription}
      />
    </>
  );
};

export default ItemDetailContainer;
