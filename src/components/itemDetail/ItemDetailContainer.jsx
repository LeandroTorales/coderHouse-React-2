import React, { useEffect, useState } from "react";
import ItemDetail from "./components/ItemDetail";
import { getPromiseSingleItem } from "./promiseObject/promise";

const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);

  
  useEffect(() => {
    getPromiseSingleItem().then((respuesta) => {
      return setProduct(respuesta);
    });
  }, [product]);

  return (
    <>
      <ItemDetail
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
