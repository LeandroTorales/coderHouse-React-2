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

  const handleClick = () => {
    setClicked(!click);
  };

  return (
    <>
      <StyledContainerHeader>
        <Link to="/" className="link--react__router">
          <TitleComponentNavbar />
        </Link>
        <ContainerNavCategories propClicked={click}>
          <Link to="/" element="" className="link--react__router">
            <CategoryComponent
              handleClickFunc={handleClick}
              NameCategory="Home"
              key={"home"}
            />
          </Link>

          <Link to="/products" className="link--react__router">
            <CategoryComponent
              handleClickFunc={handleClick}
              NameCategory="Productos"
              key={"products"}
            />
          </Link>

          <Link to="/products/1" className="link--react__router">
            <CategoryComponent
              handleClickFunc={handleClick}
              NameCategory="Zapatillas"
              key={"zapatillas"}
            />
          </Link>

          <Link to="/products/2" className="link--react__router">
            <CategoryComponent
              handleClickFunc={handleClick}
              NameCategory="Abrigos"
              key={"abrigos"}
            />
          </Link>

          <Link to="/contacto" className="link--react__router">
            <CategoryComponent
              handleClickFunc={handleClick}
              NameCategory="Contacto"
              key={"contacto"}
            />
          </Link>

          <Link
            to="/preguntasFrecuentes"
            element=""
            className="link--react__router"
          >
            <CategoryComponent
              NameCategory="Preguntas frecuentes"
              key={"preguntas frecuentes"}
            />
          </Link>
        </ContainerNavCategories>
        <ButtonHamburguesa handleClickFunc={handleClick} propClicked={click} />
        <Link to="/cart">
          <CartWidget />
        </Link>
        <BackColorComponent propClicked={click} handleClickFunc={handleClick} />
      </StyledContainerHeader>
    </>
  );
};

export default NavBar;
