import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: ${(props) => props.wrapProp};
  flex-direction: ${(props) => props.flexDirectionProp};
  gap: ${(props) => props.gapProp};
`;

const FlexWrapper = ({ children, flexDirectionProp, gapProp, wrapProp }) => {
  return (
    <StyledWrapper
      flexDirectionProp={flexDirectionProp}
      gapProp={gapProp}
      wrapProp={wrapProp}
    >
      {children}
    </StyledWrapper>
  );
};

export default FlexWrapper;
