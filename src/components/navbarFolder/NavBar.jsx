import React, { useState } from "react";
import styled from "styled-components";
import CategoryComponent from "./componentsNavbar/CategoryComponent";
import TitleComponentNavbar from "./componentsNavbar/TitleComponentNavbar";
import ContainerNavCategories from "./componentsNavbar/ContainerNavCategories";
import CartWidget from "./componentsNavbar/CartWidget";
import { Link } from "react-router-dom";
import "./styles.css";
import ButtonHamburguesa from "./componentsNavbar/ButtonHamburguesa";
import BackColorComponent from "./componentsNavbar/BackColorComponent";

const StyledContainerHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90px;
  background: #000;
  color: white;
  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
`;

const NavBar = () => {
  const [click, setClicked] = useState(false);
  console.log(click);

  const handleClick = () => {
    setClicked(!click);
  };

  return (
    <>
      <StyledContainerHeader>
        <TitleComponentNavbar />
        <ContainerNavCategories
          handleClickFunc={handleClick}
          propClicked={click}
        >
          <Link path="/" element="" className="link--react__router">
            <CategoryComponent NameCategory="Home" key={"home"} />
          </Link>

          <Link path="/" element="" className="link--react__router">
            <CategoryComponent NameCategory="Zapatillas" key={"zapatillas"} />
          </Link>

          <Link path="/" element="" className="link--react__router">
            <CategoryComponent NameCategory="Abrigos" key={"abrigos"} />
          </Link>

          <Link path="/" element="" className="link--react__router">
            <CategoryComponent NameCategory="Contacto" key={"contacto"} />
          </Link>

          <Link path="/" element="" className="link--react__router">
            <CategoryComponent
              NameCategory="Preguntas frecuentes"
              key={"preguntas frecuentes"}
            />
          </Link>
        </ContainerNavCategories>
        <ButtonHamburguesa handleClickFunc={handleClick} propClicked={click} />
        <CartWidget />
        <BackColorComponent propClicked={click} />
      </StyledContainerHeader>
    </>
  );
};

export default NavBar;
