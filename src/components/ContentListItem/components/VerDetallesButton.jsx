import React from "react";
import styled from "styled-components";

const StyledButtonVerDetalle = styled.button`
  background-color: #cecece;
  width: 100%;
  height: 30px;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  border-bottom: 1px solid #000000;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #444040;
    color: white;

    font-size: 1.2rem;

    border-bottom: 1px solid #ffffff;
  }
`;

const VerDetallesButton = () => {
  return <StyledButtonVerDetalle>Ver detalles</StyledButtonVerDetalle>;
};

export default VerDetallesButton;
