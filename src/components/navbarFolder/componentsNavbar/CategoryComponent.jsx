import React from "react";
import styled from "styled-components";

const StyledCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  padding: 0px 5px;
  transition: all 0.5s;
  &:hover {
    border: 1px solid white;
    border-radius: 15px;
    padding: 0px 15px;
  }
  @media (max-width: 1150px) {
    font-size: 1.2rem;
  }
  @media (max-width: 900px) {
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const StyledDivQuery = styled.div`
  @media (max-width: 768px) {
    div:last-child {
      display: none;
    }
  }

  @media (min-width: 768px) {
    div:first-child {
      display: none;
    }
  }
`;

const CategoryComponent = ({ NameCategory, handleClickFunc }) => {
  return (
    <>
      <StyledDivQuery>
        <StyledCategory onClick={() => handleClickFunc()}>
          {NameCategory}
        </StyledCategory>
        <StyledCategory>
          {NameCategory}
          {/* Link desktop */}
        </StyledCategory>
      </StyledDivQuery>
    </>
  );
};

export default CategoryComponent;
