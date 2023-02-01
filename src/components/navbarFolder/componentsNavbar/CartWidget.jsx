/* Aca icono de carrito con numero de productos en forma de notificacion absolute hardcodeado */
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { TiShoppingCart } from "react-icons/ti";
import styled from "styled-components";
import { cartContexto } from "../../../context/CartContext";
import "../styles.css";

const StyledNotificationCart = styled.span`
  color: white;
  background-color: #dd0808;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  text-shadow: 2px 2px 2px black;
  text-align: center;
  position: absolute;
  margin-bottom: 25px;
  margin-left: 30px;
  &.active {
    display: none;
  }
`;

const StyledButtonCart = styled.button`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 15px;
`;

const CartWidget = () => {
  const [itemsCart, setItemsCart] = useState(0);

  const { getTotalItemsOfCart, cart } = useContext(cartContexto);

  const verifItemsCart = () => {
    if (itemsCart === 0) return "active";
    return "";
  };

  useEffect(() => {
    if (cart.length === 0) return setItemsCart(0);

    return setItemsCart(getTotalItemsOfCart());
  }, [cart]);

  return (
    <>
      <StyledButtonCart>
        <TiShoppingCart className={`cart__icon`} />
        <StyledNotificationCart className={verifItemsCart()}>
          {itemsCart}
        </StyledNotificationCart>
      </StyledButtonCart>
    </>
  );
};

export default CartWidget;
