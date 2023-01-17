import React from "react";
import styled from "styled-components";
import FlexWrapper from "../../flexWrapper/FlexWrapper";
import "../styles.css";
import ItemCount from "../../ContentListItem/components/ItemCount";
import WrapperTallesDetail from "./WrapperTallesDetail";
import WrapperColorDetail from "./WrapperColorDetail";
import ItemDescriptionDetail from "./ItemDescriptionDetail";
import ButtonItemAdd from "../../ContentListItem/components/ButtonItemAdd";

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
    height: 95%;
    width: 90%;
    div:first-of-type {
      gap: 2px;
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
    width: 100%;
    justify-content: space-evenly;
    height: calc(100% - 50px);
    @media (max-width: 768px) {
      gap: 10px;
    }
    > div:last-of-type {
      align-items: flex-start;
    }
    div img {
      height: auto;
      width: 300px;
      object-fit: contain;
      border: 1px solid black;
      @media (max-width: 425px) {
        width: 215px;
      }
    }
  }
`;

const ItemDetail = ({
  id,
  imgUrl,
  nameProduct,
  price,
  sizes,
  colors,
  stock = 0,
  textDescription,
}) => {
  return (
    <>
      <FlexWrapper
        widthProp="100%"
        heightProp="calc(100vh - 90px)"
        backgroundColorProps="white"
        flexDirectionProp={"row"}
      >
        <StyledCardDetail>
          <FlexWrapper wrapProp={"wrap"} flexDirectionProp={"row-reverse"}>
            <FlexWrapper flexDirectionProp={"column"} gapProp={"15px"}>
              <FlexWrapper gapProp={"15px"}>
                <FlexWrapper flexDirectionProp={"column"}>
                  <p className="name--product">{nameProduct}</p>
                  <span>{`$${price}`}</span>
                </FlexWrapper>
                <ItemCount stock={stock} />
              </FlexWrapper>
              <ItemDescriptionDetail
                textDescription={textDescription}
              ></ItemDescriptionDetail>
            </FlexWrapper>
            <FlexWrapper
              flexDirectionProp={"column"}
              gapProp={"15px"}
              alignItemsProp={"flex-start"}
            >
              <img src={imgUrl} alt="" />
              <WrapperTallesDetail id={id}></WrapperTallesDetail>
              <WrapperColorDetail id={id}></WrapperColorDetail>
            </FlexWrapper>
          </FlexWrapper>
          <ButtonItemAdd borderRadiusProp={"0px 0px 25px 25px;"} />
        </StyledCardDetail>
      </FlexWrapper>
    </>
  );
};

export default ItemDetail;
