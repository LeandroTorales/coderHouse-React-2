import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

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
  let navigate = useNavigate();

  const productSendToCart = () => {
    console.log("product:", product);
  };

  return (
    <>
      <StyledButton
        borderRadiusProp={borderRadiusProp}
        onClick={productSendToCart}
      >
        <div onClick={() => navigate(-1)}>Añadir al carrito</div>
      </StyledButton>
    </>
  );
};

export default ButtonItemAdd;
