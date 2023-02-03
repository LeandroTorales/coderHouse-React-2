import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { cartContexto } from "../../../context/CartContext";

const StyledButton = styled.button`
  border-radius: ${(props) => props.borderRadiusProp};
  background-color: #75e7e79b;
  width: 100%;
  height: 50px;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    font-size: 1.4rem;
    background-color: #01d2d2;
  }
  &.active {
    cursor: not-allowed;
    background-color: #000000;
    color: white;
  }
`;

const ButtonItemAdd = ({ borderRadiusProp, product }) => {
  const { addItem } = useContext(cartContexto);

  const [disabledButtonState, setDisabledButton] = useState(true);

  let navigate = useNavigate();

  const onAddToCart = () => {
    addItem(product);
    setDisabledButton(false);
    setTimeout(() => {
      alert(`Agregaste al carrito: ${product.nameProduct}`);
      setDisabledButton(true);
      navigate(-1);
    }, 2500);
  };

  return (
    <>
      <StyledButton
        borderRadiusProp={borderRadiusProp}
        className={` ${disabledButtonState ? "" : "active"}`}
        onClick={disabledButtonState ? onAddToCart : null}
      >
        Añadir al carrito
      </StyledButton>
    </>
  );
};

export default ButtonItemAdd;
