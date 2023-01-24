import React from "react";
import styled from "styled-components";

const StyledItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 500px;
  width: 350px;
  background-color: white;
  color: black;
  text-shadow: 2px 2px 2px white;
  border: 3px solid black;
  margin-top: 10px;
  img {
    object-fit: cover;
    height: 305px;
    width: 100%;
  }

  div {
    p {
      text-align: center;
      font-size: 1.6rem;
      text-transform: uppercase;
      font-weight: 500;
    }
    span {
      font-size: 2.2rem;
      font-weight: bold;
    }
  }
  .link--detail {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    &:link {
      text-decoration: none;
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
