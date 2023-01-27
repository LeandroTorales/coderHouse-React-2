import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { cartContexto } from "../../context/CartContext";
import { dataObjectsItems } from "../dataObjects/data";
import FlexWrapper from "../flexWrapper/FlexWrapper";
import CartItemCard from "./components/CartItemCard";

const StyledCartItems = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: white;
  width: 100%;
  height: auto;
  padding-top: 2rem;
`;

const CartDetailContainer = () => {
  const { cart, addItem, addCounterItem, getTotalItemsOfCart } =
    useContext(cartContexto);

  return (
    <>
      <StyledCartItems>
        {dataObjectsItems.map((item) => (
          <CartItemCard
            key={item.id}
            id={item.id}
            imgUrl={item.imgUrl}
            nameProduct={item.nameProduct}
            price={item.price}
            stock={item.stock}
            product={item.product}
          />
        ))}
      </StyledCartItems>
    </>
  );
};

export default CartDetailContainer;
