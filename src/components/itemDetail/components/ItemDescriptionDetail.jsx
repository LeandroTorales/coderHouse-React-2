import React from "react";
import styled from "styled-components";

const StyledItemDescriptionDetail = styled.p`
  font-size: 2rem;
`;

const ItemDescriptionDetail = ({ textDescription }) => {
  return (
    <StyledItemDescriptionDetail>{textDescription}</StyledItemDescriptionDetail>
  );
};

export default ItemDescriptionDetail;
