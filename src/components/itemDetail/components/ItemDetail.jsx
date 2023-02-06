import React from "react";
import styled from "styled-components";
import FlexWrapper from "../../flexWrapper/FlexWrapper";
import "../styles.css";
import ItemCount from "../../itemCounter/ItemCount";
import WrapperTallesDetail from "./WrapperTallesDetail";
import WrapperColorDetail from "./WrapperColorDetail";
import ItemDescriptionDetail from "./ItemDescriptionDetail";
import ButtonItemAdd from "../../ContentListItem/components/ButtonItemAdd";
import { SpinnerCircular } from "spinners-react";

const StyledCardDetail = styled.div`
  background-color: #ffffff;
  height: 90%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
  border-radius: 25px;
  border: 1px solid black;
  box-shadow: -15px 14px 3px 6px rgba(196, 196, 196, 1);
  -webkit-box-shadow: -15px 14px 3px 6px rgba(196, 196, 196, 1);
  -moz-box-shadow: -15px 14px 3px 6px rgba(196, 196, 196, 1);
  @media (max-width: 768px) {
    height: 98%;
    width: 90%;

    div:first-child {
    }
  }

  p.name--product {
    font-size: 2rem;
    text-transform: uppercase;
    @media (max-width: 425px) {
      font-size: 1.5rem;
    }
  }
  span {
    font-size: 3rem;
    font-weight: bold;
    color: #cb0808;
    @media (max-width: 768px) {
      font-size: 2.3rem;
    }
    @media (max-width: 425px) {
      font-size: 1.8rem;
    }
  }
  > div {
    height: calc(100% - 50px);
    @media (max-width: 768px) {
      gap: 10px;
    }

    .imgDivContainer {
      width: 50%;
      @media (max-width: 768px) {
        width: 75%;
      }
    }
    div img {
      height: 200px;
      width: 200px;
      object-fit: contain;
      border: 1px solid black;
      @media (max-width: 425px) {
        width: 95%;
      }
    }
  }
`;

const StyledOutOfStock = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  color: #f30000;
  text-shadow: 1px 1px 2px black;
  text-align: center;
  margin-bottom: 10px;
`;

const ItemDetail = ({
  id,
  imgUrl,
  nameProduct,
  price,
  noStock = 0,
  stockDinamic,
  textDescription,
  product,
}) => {
  return (
    <>
      {product.length == 0 ? (
        <div className="spinner-container">
          <SpinnerCircular size={100} />
          <h2>Cargando...</h2>
        </div>
      ) : (
        <FlexWrapper
          widthProp="100%"
          heightProp="calc(100vh - 90px)"
          backgroundColorProps="white"
          flexDirectionProp={"row"}
        >
          <StyledCardDetail>
            <FlexWrapper wrapProp={"wrap"} flexDirectionProp={"row-reverse"}>
              <FlexWrapper
                flexDirectionProp={"column"}
                gapProp={"15px"}
                widthProp=" 50%"
              >
                <FlexWrapper gapProp={"15px"}>
                  <FlexWrapper flexDirectionProp={"column"}>
                    <p className="name--product">{nameProduct}</p>
                    <span>{`$${price}`}</span>
                  </FlexWrapper>

                  {stockDinamic == noStock ? (
                    ""
                  ) : (
                    <ItemCount stock={stockDinamic} />
                  )}
                </FlexWrapper>
                <ItemDescriptionDetail
                  textDescription={textDescription}
                ></ItemDescriptionDetail>
              </FlexWrapper>
              <div className="imgDivContainer">
                <FlexWrapper
                  flexDirectionProp={"column"}
                  gapProp={"5px"}
                  alignItemsProp={"flex-start"}
                >
                  <img src={imgUrl} alt="" />
                  <WrapperTallesDetail
                    id={id}
                    marginLeftProp="2rem"
                  ></WrapperTallesDetail>
                  <WrapperColorDetail
                    id={id}
                    marginLeftProp="2rem"
                  ></WrapperColorDetail>
                </FlexWrapper>
              </div>
            </FlexWrapper>

            {stockDinamic == 0 ? (
              <StyledOutOfStock>
                Este producto esta fuera de Stock.
              </StyledOutOfStock>
            ) : (
              <ButtonItemAdd
                borderRadiusProp={"0px 0px 25px 25px;"}
                product={product}
              />
            )}
          </StyledCardDetail>
        </FlexWrapper>
      )}
    </>
  );
};

export default ItemDetail;
