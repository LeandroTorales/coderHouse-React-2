import React from "react";
import styled from "styled-components";

const StyledItemDescriptionDetail = styled.p`
  font-size: 1.6rem;
  min-height: 25px;
  max-height: 800px;
  max-width: 850px;
  min-width: 230px;
  text-align: center;
  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ItemDescriptionDetail = ({ textDescription }) => {
  return (
    <StyledItemDescriptionDetail>{textDescription}</StyledItemDescriptionDetail>
  );
};

export default ItemDescriptionDetail;
