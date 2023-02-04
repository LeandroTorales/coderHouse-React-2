import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { cartContexto } from "../../context/CartContext";
import ItemDetail from "./components/ItemDetail";
import { getPromiseSingleItem } from "./promiseObject/promise";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { cart } = useContext(cartContexto);

  let { id } = useParams();

  const getItem = async () => {
    let respuesta = await getPromiseSingleItem(id);
    return setProduct(respuesta);
  };

  useEffect(() => {
    getItem();
  }, [id]);

  const productFind = cart.find((item) => item.index === product.index);

  let noStock;
  let stockDinamic;
  if (productFind) {
    noStock = 0;
   stockDinamic = product.stock - productFind.counter;
  } else {
    noStock = null;
   stockDinamic = product.stock;
  }

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
        noStock={noStock}
        stockDinamic={stockDinamic}
        textDescription={product.textDescription}
      />
    </>
  );
};

export default ItemDetailContainer;
