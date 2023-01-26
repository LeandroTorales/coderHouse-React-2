import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ColorsZapatillasProps from "../../ContentListItem/components/ColorsZapatillasProps";
import FlexWrapper from "../../flexWrapper/FlexWrapper";
import { getPromiseSingleItem } from "../promiseObject/promise";

const StyledWrapperColorDetail = styled.div`
  width: 100%;
  margin-left: ${(props) => props.marginLeftProp};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  h3 {
    font-size: 1.3rem;
    font-weight: 400;
  }
  div {
    gap: 10px;
  }
`;

const WrapperColorDetail = ({ id, marginLeftProp }) => {
  const [colorsState, setColors] = useState([]);

  const getItem = async () => {
    let respuesta = await getPromiseSingleItem(id);
    return setColors(respuesta.colors);
  };

  useEffect(() => {
    getItem();
  }, [id]);

  return (
    <StyledWrapperColorDetail marginLeftProp={marginLeftProp}>
      <h3>Colores</h3>
      <FlexWrapper gapProp={"5px"}>
        {colorsState.map((color) => (
          <ColorsZapatillasProps propsColor={color} key={color} />
        ))}
      </FlexWrapper>
    </StyledWrapperColorDetail>
  );
};

export default WrapperColorDetail;
