import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FlexWrapper from "../../flexWrapper/FlexWrapper";
import StyledItemCard from "./StyledItemCard";
import VerDetallesButton from "./VerDetallesButton";

const StyledLineDivisory = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e2e2e2;
`;

const Item = ({ imgUrl, nameProduct, price, id }) => {
  return (
    <>
      <StyledItemCard key={id}>
        <img src={`${imgUrl}`} alt={nameProduct} />
        <StyledLineDivisory></StyledLineDivisory>
        <FlexWrapper flexDirectionProp={"column"}>
          <p>{nameProduct}</p>
          <span>${price}</span>
        </FlexWrapper>
        <StyledLineDivisory></StyledLineDivisory>

        <FlexWrapper
          flexDirectionProp={"column"}
          widthProp={"100%"}
          marginTopProps="5px"
        >
          <Link to={`/product/${id}`} className="link--detail">
            <VerDetallesButton />
          </Link>
        </FlexWrapper>
      </StyledItemCard>
    </>
  );
};

export default Item;
