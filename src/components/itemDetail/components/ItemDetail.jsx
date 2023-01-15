import React from "react";
import styled from "styled-components";
import FlexWrapper from "../../flexWrapper/FlexWrapper";
import { dataObjectsItems } from "../../dataObjects/data";
import "../styles.css";
import ItemCount from "../../ContentListItem/components/ItemCount";
import WrapperTallesDetail from "./WrapperTallesDetail";
import WrapperColorDetail from "./WrapperColorDetail";
import ItemDescriptionDetail from "./ItemDescriptionDetail";
import ButtonItemAdd from "../../ContentListItem/components/ButtonItemAdd";

const StyledCardDetail = styled.div`
  background-color: #ffffff;
  height: 80%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 25px;
  box-shadow: -15px 14px 3px 6px rgba(196, 196, 196, 1);
  -webkit-box-shadow: -15px 14px 3px 6px rgba(196, 196, 196, 1);
  -moz-box-shadow: -15px 14px 3px 6px rgba(196, 196, 196, 1);
  p.name--product {
    font-size: 2rem;
    text-transform: uppercase;
  }
  span {
    font-size: 3rem;
    font-weight: bold;
    color: #cb0808;
  }
`;

const ItemDetail = () => {
  let objeto = {
    id: 1,
    nameProduct: "nike tn plus",
    imgUrl: "https://i.ebayimg.com/thumbs/images/g/L7AAAOSwRn1hQKD-/s-l300.jpg",
    price: 65000,
    stock: 8,
    sizes: [39, 41, 42, 43, 45],
    colors: ["red", "blue", "yellow", "purple"],
    textDescription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate fugiat tenetur obcaecati facere est neque enim ipsa dolore.",
  };

  return (
    <>
      <FlexWrapper
        widthProp="100%"
        heightProp="calc(100vh - 90px)"
        backgroundColorProps="white"
        flexDirectionProp={"row"}
      >
        <StyledCardDetail>
          <FlexWrapper>
            <FlexWrapper flexDirectionProp={"column"}>
              <img src={objeto.imgUrl} alt="" />
              <WrapperTallesDetail sizes={objeto.sizes}></WrapperTallesDetail>
              <WrapperColorDetail colors={objeto.colors}></WrapperColorDetail>
            </FlexWrapper>
            <FlexWrapper flexDirectionProp={"column"}>
              <FlexWrapper>
                <FlexWrapper flexDirectionProp={"column"}>
                  <p className="name--product">NOMBRE PROducto</p>
                  <span>
                    {`$${objeto.price.toFixed(2)}`}
                    {/* Precio producto */}
                  </span>
                </FlexWrapper>
                <ItemCount stock={"5"} />
              </FlexWrapper>
              <ItemDescriptionDetail
                textDescription={objeto.textDescription}
              ></ItemDescriptionDetail>
            </FlexWrapper>
          </FlexWrapper>
          <ButtonItemAdd />
        </StyledCardDetail>
      </FlexWrapper>
    </>
  );
};

export default ItemDetail;
