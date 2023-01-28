import React from "react";
import styled from "styled-components";
import FlexWrapper from "../../flexWrapper/FlexWrapper";
import ItemCount from "../../itemCounter/ItemCount";

const StyledItemCardCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 75%;
  height: 200px;
  gap: 10px;
  margin: 7px 0px;
  border: 1px solid black;
  padding-right: 25px;
  @media (max-width: 1121px) {
    width: 100%;
    padding: 0px 25px;
    @media (max-width: 768px) {
      height: 450px;
      flex-direction: column;
      padding: 15px 0px;
      margin: 15px 0px;
      width: 300px;

      border-radius: 5px;
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
    height: 100%;
    width: 45%;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1rem;
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

const CartItemCard = ({
  id,
  imgUrl,
  nameProduct,
  price,
  stock,
  counter,
  product,
}) => {
  return (
    <>
      <StyledItemCardCart>
        <div className="img-container">
          <img src={imgUrl} alt="img-product-cart" />
        </div>
        <h2>{nameProduct}</h2>
        <FlexWrapper flexDirectionProp={"column"} gapProp={"10px"}>
          <ItemCount counter={counter} stock={stock} id={id} product={product} />
          <span className="disponible-container">
            <span>{stock}</span>Disponibles
          </span>
        </FlexWrapper>

        <span className="price-container">${price}</span>
      </StyledItemCardCart>
    </>
  );
};

export default CartItemCard;
