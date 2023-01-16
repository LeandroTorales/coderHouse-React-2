import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ColorsZapatillasProps from "../../ContentListItem/components/ColorsZapatillasProps";
import FlexWrapper from "../../flexWrapper/FlexWrapper";
import { getPromiseSingleItem } from "../promiseObject/promise";

const StyledWrapperColorDetail = styled.div`
  h3 {
    font-size: 1.3rem;
    font-weight: 400;
  }
  div {
    gap: 10px;
    
  }
`;

const WrapperColorDetail = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    getPromiseSingleItem().then((respuesta) => {
      return setColors(respuesta.colors);
    });
  }, [colors]);

  return (
    <StyledWrapperColorDetail>
      <h3>Colores</h3>
      <FlexWrapper gapProp={"5px"}>
        {colors.map((color) => (
          <ColorsZapatillasProps propsColor={color} key={color} />
        ))}
      </FlexWrapper>
    </StyledWrapperColorDetail>
  );
};

export default WrapperColorDetail;
