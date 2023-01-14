import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  text-align: center;
  color: white;
  text-transform: capitalize;
  margin-left: 10px;
  gap: 5px;
  color: #eeeeee;
  text-shadow: -3px -1px 2px #816f09;
  font-size: 1.6rem;
  font-weight: 700;
  span {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 1.2rem;
    span {
      font-size: 1.6rem;
    }
  }
`;

const TitleComponentNavbar = () => {
  return (
    <StyledTitle>
      Sneakers<span>SPORTS</span>
    </StyledTitle>
  );
};

export default TitleComponentNavbar;
