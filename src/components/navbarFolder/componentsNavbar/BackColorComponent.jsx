import React from "react";
import styled from "styled-components";

const StyledBackColor = styled.div`
  position: absolute;
  background-color: #f30c0c;
  top: -2000px;

  &.activeBackground {
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    transition: all 0.6s;
    .activePromise{
        display: none;
    }
  }
`;

const BackColorComponent = ({ propClicked }) => {
  return (
    <>
      <StyledBackColor
        className= {propClicked ? "activeBackground" : ""}
      ></StyledBackColor>
    </>
  );
};

export default BackColorComponent;
