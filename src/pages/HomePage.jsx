import React from "react";
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
        </div>
      </StyledHomePage>
      <ItemListContainer />
    </>
  );
};

export default HomePage;
