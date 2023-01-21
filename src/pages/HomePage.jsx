import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ItemListContainer from "../components/ContentListItem/ItemListContainer";

const StyledHomePage = styled.div`
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div:first-of-type {
    position: absolute;
    background-color: black;
    width: 100%;
    height: calc(100vh - 90px);
    opacity: 50%;
    z-index: -1;
    background-image: url(https://wallpapercave.com/wp/wp3734524.jpg);
    background-clip: border-box;
    background-origin: border-box;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 25px;
    text-align: center;
    gap: 10px;
    h4 {
      font-size: 3rem;
      color: white;
      text-shadow: 2px 2px 2px black;
      text-transform: uppercase;
    }
    p {
      font-size: 1.4rem;
      color: white;
      text-shadow: 2px 2px 2px black;
    }
    a{
          font-size: 1.4rem;
    background-color: white;
    border-radius: 10px;
    padding: 5px 15px;
    color: black;
    text-decoration: none;
    transition: all .5s;
    &:hover{
            font-size: 1.6rem;
    background-color: black;
    border-radius: 10px;
    padding: 7px 17px;
    color: white;

    }
    }
  }
`;

const HomePage = () => {
  return (
    <>
      <StyledHomePage>
        <div></div>
        <div>
          <h4>Bienvenido al lugar de lujo de un deportista</h4>
          <p>
            En esta pagina encontrarás los articulos mas buscados del mercado
            por los collecionistas de zapatillas y camperas puffer. Vendemos
            todo 100% original.
          </p>
          <Link to="/products">
            <h2>VER MÁS</h2>
          </Link> 
        </div>
      </StyledHomePage>
      
    </>
  );
};

export default HomePage;
