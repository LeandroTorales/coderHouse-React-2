import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FlexWrapper from "../../flexWrapper/FlexWrapper";
import { getPromiseSingleItem } from "../promiseObject/promise";
import TallesMapDiv from "./TallesMapDiv";

const StyledWrapperTallesDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin-left: ${(props) => props.marginLeftProp};
  h3 {
    font-size: 1.3rem;
    font-weight: 400;
  }
  div > div {
    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 3px 6px;
    }
  }
`;

const WrapperTallesDetail = ({ id, marginLeftProp }) => {
  const [sizes, setSizes] = useState([]);

  const getItem = async () => {
    let respuesta = await getPromiseSingleItem(id);
    return setSizes(respuesta.sizes);
  };

  useEffect(() => {
    getItem();
  }, [id]);

  return (
    <>
      <StyledWrapperTallesDetail marginLeftProp={marginLeftProp}>
        <h3>Talles</h3>
        <FlexWrapper gapProp={"5px"}>
          {sizes.map((size) => (
            <TallesMapDiv key={size} size={size} />
          ))}
        </FlexWrapper>
      </StyledWrapperTallesDetail>
    </>
  );
};

export default WrapperTallesDetail;
