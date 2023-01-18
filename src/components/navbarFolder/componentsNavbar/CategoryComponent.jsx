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
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CategoryComponent = ({ NameCategory }) => {
  return (
    <>
      <StyledCategory>
        {NameCategory}
        {/* <Link to={hrefLink}>{children}fafafa</Link> */}
      </StyledCategory>
    </>
  );
};

export default CategoryComponent;
