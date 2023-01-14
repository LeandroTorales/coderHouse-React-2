import React from "react";
import styled from "styled-components";
import FlexWrapper from "../../flexWrapper/FlexWrapper";
import ButtonItem from "./ButtonItem";
import ItemCount from "./ItemCount";
import StyledItem from "./StyledItemCard";

const StyledLineDivisory = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e2e2e2;
`;

const StyledWrapperTalles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2rem;
  gap: 5px;
  h3 {
    font-size: 1rem;
    font-weight: 400;
  }
  div > div {
    font-weight: 300;
    font-size: 1.2rem;
    padding: 5px;
    &:hover {
      border: 2px solid black;
      color: black;
      transition: all 0.2s;
      cursor: pointer;
      font-weight: 500;
      border-radius: 5px;
    }
  }
`;

const StyledWrapperColor = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2rem;
  gap: 5px;
  h3 {
    font-size: 1rem;
    font-weight: 400;
  }
  div > div {
    border: 1px solid black;
    color: black;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: grey;
    /* background-color: ${(props) => props.backgroundColorColoresZapasMAP} */
    &:hover {
      border: 2px solid black;
      cursor: pointer;
    }
  }
`;

const Item = ({ imgUrl, nameProduct, price, sizes, colors, stock }) => {
  return (
    <>
      <StyledItem>
        <img src={`${imgUrl}`} alt={nameProduct} />
        <StyledLineDivisory></StyledLineDivisory>
        <FlexWrapper flexDirectionProp={"column"} gapProp={"10px"}>
          <p>{nameProduct}</p>
          <span>${price}</span>
          <ItemCount stock={stock} />
        </FlexWrapper>
        <StyledLineDivisory></StyledLineDivisory>
        <StyledWrapperTalles flexDirectionProp={"column"}>
          <h3>Talles</h3>
          <FlexWrapper gapProp={"2px"}>
            {sizes.map((size) => (
              <div>{size}</div>
            ))}
          </FlexWrapper>
        </StyledWrapperTalles>
        <StyledWrapperColor flexDirectionProp={"column"}>
          <h3>Colores</h3>
          <FlexWrapper gapProp={"5px"}>
            {colors.map((color) => (
              <div></div>
            ))}
          </FlexWrapper>
        </StyledWrapperColor>
        <ButtonItem />
      </StyledItem>
    </>
  );
};

export default Item;
