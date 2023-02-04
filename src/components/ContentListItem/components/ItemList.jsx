import React from "react";
import FlexWrapper from "../../flexWrapper/FlexWrapper";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <>
      <FlexWrapper gapProp={"10px"} wrapProp={"wrap"}>
        {products.map((item) => (
          <Item
            product={item}
            key={item.nameProduct + item.id}
            id={item.id}
            nameProduct={item.nameProduct}
            imgUrl={item.imgUrl}
            price={item.price.toFixed(2)}
          />
        ))}
      </FlexWrapper>
    </>
  );
};

export default ItemList;
