import React from "react";
import styled from "styled-components";
import FlexWrapper from "../../flexWrapper/FlexWrapper";

const StyledWrapperTallesDetail = styled.div`
  h3 {
    font-size: 1.3rem;
    font-weight: 400;
  }
  div > div {
    font-weight: 300;
    font-size: 1.2rem;
    padding: 5px 10px;
    border: 2px solid black;
    color: black;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
      font-weight: 500;
    }
    &:active {
      background-color: black;
      color: white;
      border: 2px solid white;
    }
  }
`;

const WrapperTallesDetail = ({ sizes }) => {
  return (
    <StyledWrapperTallesDetail>
      <h3>Talles</h3>
      <FlexWrapper gapProp={"5px"}>
        {sizes.map((size) => (
          <div key={size}>{size}</div>
        ))}
      </FlexWrapper>
    </StyledWrapperTallesDetail>
  );
};

export default WrapperTallesDetail;
