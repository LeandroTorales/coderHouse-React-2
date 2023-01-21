import React from "react";
import styled from "styled-components";

const StyledBackColor = styled.div`
  position: absolute;
  background-color: #9797978c;
  left: -2000px;

  &.activeBackground {
    top: 90px;
    left: 0;
    width: 100%;
    height: 100vh;
    transition: all 0.6s;
    .activePromise {
      display: none;
    }
  }
`;

const BackColorComponent = ({ propClicked, handleClickFunc }) => {
  return (
    <>
      <StyledBackColor
        onClick={() => handleClickFunc()}
        className={propClicked ? "activeBackground" : ""}
      ></StyledBackColor>
    </>
  );
};

export default BackColorComponent;
