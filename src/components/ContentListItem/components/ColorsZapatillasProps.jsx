import React, { Children } from "react";
import styled from "styled-components";

const StyledComponentColors = styled.div`
  border: 1px solid black;
  color: black;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.propsColor};
  /* background-color: ${(props) => props.backgroundColorColoresZapasMAP} */
  &:hover {
    border: 2px solid black;
    cursor: pointer;
  }
`;

const ColorsZapatillasProps = ({ propsColor }) => {
  return (
    <StyledComponentColors propsColor={propsColor}></StyledComponentColors>
  );
};

export default ColorsZapatillasProps;
