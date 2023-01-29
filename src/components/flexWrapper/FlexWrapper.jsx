import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.widthProp};
  flex-wrap: ${(props) => props.wrapProp};
  flex-direction: ${(props) => props.flexDirectionProp};
  gap: ${(props) => props.gapProp};
  height: ${(props) => props.heightProp};
  background-color: ${(props) => props.backgroundColorProps};
  margin-top: ${(props) => props.marginTopProps};
`;

const FlexWrapper = ({
  children,
  flexDirectionProp,
  gapProp,
  wrapProp,
  widthProp,
  heightProp,
  backgroundColorProps,
  marginTopProps,
  classNameProp,
}) => {
  return (
    <StyledWrapper
      flexDirectionProp={flexDirectionProp}
      gapProp={gapProp}
      wrapProp={wrapProp}
      widthProp={widthProp}
      heightProp={heightProp}
      backgroundColorProps={backgroundColorProps}
      marginTopProps={marginTopProps}
      className={classNameProp}
    >
      {children}
    </StyledWrapper>
  );
};

export default FlexWrapper;
