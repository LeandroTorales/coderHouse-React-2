import React from "react";
import styled from "styled-components";

const StyledItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 550px;
  width: 300px;
  background-color: white;
  color: black;
  text-shadow: 2px 2px 2px white;
  border: 2px solid black;
  margin-top: 10px;
  img {
    object-fit: cover;
    height: 200px;
    width: 100%;
  }
  div {
    p {
      font-size: 1.6rem;
      text-transform: uppercase;
      font-weight: 500;
    }
    span {
      font-size: 2.2rem;
      font-weight: bold;
    }
  }
`;

const StyledItemCard = ({ children }) => {
  return (
    <>
      <StyledItemStyled>{children}</StyledItemStyled>
    </>
  );
};

export default StyledItemCard;
