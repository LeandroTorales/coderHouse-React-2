import React from "react";
import styled from "styled-components";
import "../styles.css";

const StyledNav = styled.nav`
  gap: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 300;

  a {
    display: block;
  }
  @media (min-width: 768px) {
    position: initial;
  }
  &.active {
    display: flex;
    position: absolute;
    height: 100vh;
    width: clamp(50%, 70%, 100%);
    top: 90px;
    z-index: 1;
    left: 0;
    right: 0;
    text-align: center;
    border-radius: 0% 0% 40% 0%;
    transition: all 0.6s ease-in-out;
    background-color: rgb(0, 0, 0);
    -webkit-transition: all 0.6s ease-in-out;
    -moz-transition: all 0.6s ease-in-out;
    -ms-transition: all 0.6s ease-in-out;
    -o-transition: all 0.6s ease-in-out;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    -webkit-border-radius: 0% 0% 40% 0%;
    -moz-border-radius: 0% 0% 40% 0%;
    -ms-border-radius: 0% 0% 40% 0%;
    -o-border-radius: 0% 0% 40% 0%;

    a {
      color: white;
      text-shadow: 2px 2px 2px black;
      transition: all 0.6s;
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
`;

const ContainerNavCategories = ({ children, propClicked }) => {
  return (
    <StyledNav className={`links ${propClicked ? "active" : ""}`}>
      {children}
    </StyledNav>
  );
};

export default ContainerNavCategories;
