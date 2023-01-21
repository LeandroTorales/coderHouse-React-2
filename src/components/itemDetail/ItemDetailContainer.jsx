import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
import { getPromiseSingleItem } from "./promiseObject/promise";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  let { id } = useParams();
  console.log("id:", id);

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
        product={product}
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
