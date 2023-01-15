import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
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

const ButtonItemAdd = () => {
  return (
    <>
      <StyledButton>Añadir al carrito</StyledButton>
    </>
  );
};

export default ButtonItemAdd;
