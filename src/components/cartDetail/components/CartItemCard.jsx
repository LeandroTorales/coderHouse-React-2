import React from "react";
import styled from "styled-components";
import FlexWrapper from "../../flexWrapper/FlexWrapper";

import "../styles.css"


const StyledItemCardCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
 width: 100%;
  height: 200px;
  gap: 5px;
  border: 1px solid black;
 

    @media (max-width: 768px) {
      height: 450px;
      flex-direction: column;
      padding: 35px 2px 5px 2px;
      margin: 15px 0px;
      border-radius: 5px;
      .container-cantidad-productos {
        width: 100%;
        padding: 0px 5px;
      }
    
  }


  .img-container {
    height: 200px;
    width: 280px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border: 1px solid black;
    }
  }

  h2 {
    display: flex;

    width: 45%;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1rem;
  }

  .productos-seleccionados {
    text-align: center;
    font-size: 1.2rem;
  }

  .disponible-container {
    font-size: 1.4rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 5px;
  }
  .price-container {
    font-size: 2rem;
    font-weight: bolder;
    color: #a30202;
  }


`;

const StyledLineDivisory = styled.div`
  height: 100%;
  width: 2px;
  background-color: #e2e2e2;
  @media (max-width: 768px) {
    height: 2px;
    width: 100%;
  }
`;

const CartItemCard = ({
  id,
  imgUrl,
  nameProduct,
  price,
  stock,
  counter,
  product,
  removeItemCart
}) => {
  return (
    <>
      <div className="container--product">
      <div className="x--eliminate__product">
        <button onClick={() => removeItemCart(id)}>X</button>
      </div>
      <StyledItemCardCart>
        <div className="img-container">
          <img src={imgUrl} alt="img-product-cart" />
        </div>
        <StyledLineDivisory />
        <h2>{nameProduct}</h2>
        <StyledLineDivisory />
        <FlexWrapper
          flexDirectionProp={"column"}
          gapProp={"10px"}
          heightProp={"100%"}
          widthProp={"30%"}
          classNameProp={"container-cantidad-productos"}
        >
          <span className="productos-seleccionados">
            Cantidad de productos seleccionados: {counter}
          </span>
          <span className="disponible-container">
            <span>{stock}</span>Disponibles
          </span>
        </FlexWrapper>
        <StyledLineDivisory />
        <span className="price-container">${price}</span>
        </StyledItemCardCart>
      </div>
    </>
  );
};

export default CartItemCard;
