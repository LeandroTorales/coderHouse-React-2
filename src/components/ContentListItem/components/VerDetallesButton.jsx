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
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #444040;
    color: white;

    font-size: 1.2rem;
  }
`;

const VerDetallesButton = () => {
  return <StyledButtonVerDetalle>Ver detalles</StyledButtonVerDetalle>;
};

export default VerDetallesButton;
