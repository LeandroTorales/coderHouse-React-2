import React from "react";
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
`;

const ButtonItemAdd = ({ borderRadiusProp, product }) => {
  const { addItem } = useContext(cartContexto);

  let navigate = useNavigate();

  const onAddToCart = () => {
    addItem(product);
    setTimeout(() => {
      alert(`Agregaste al carrito un ${product.nameProduct}`);
      navigate(-1);
    }, 2500);
  };

  return (
    <>
      <StyledButton borderRadiusProp={borderRadiusProp} onClick={onAddToCart}>
        Añadir al carrito
      </StyledButton>
    </>
  );
};

export default ButtonItemAdd;
