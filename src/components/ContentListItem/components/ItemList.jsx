import React from "react";
import FlexWrapper from "../../flexWrapper/FlexWrapper";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <>
      <FlexWrapper gapProp={"25px"} wrapProp={"wrap"}>
        {products.map((item) => (
          <Item
            key={item.nameProduct + item.id}
            id={item.id}
            nameProduct={item.nameProduct}
            imgUrl={item.imgUrl}
            price={item.price.toFixed(2)}
            stock={item.stock}
            sizes={item.sizes}
            colors={item.colors}
          />
        ))}
      </FlexWrapper>
    </>
  );
};

export default ItemList;
