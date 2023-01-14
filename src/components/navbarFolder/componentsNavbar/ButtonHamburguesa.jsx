import React from "react";
import styled from "styled-components";
import { BiMenu } from "react-icons/bi";

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
  .open {
    color: black;
    background-color: white;
    transition: all 0.5s;
    border-radius: 10px;
  }
  svg {
    font-size: clamp(1rem, 2.6rem, 3rem);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const ButtonHamburguesa = ({ propClicked, handleClickFunc }) => {
  return (
    <>
      <StyledButton
        onClick={() => {
          handleClickFunc();
        }}
      >
        <BiMenu className={`${propClicked ? "open" : ""}`} />
      </StyledButton>
    </>
  );
};

export default ButtonHamburguesa;
