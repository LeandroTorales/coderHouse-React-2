import React from 'react'
import styled from 'styled-components'

const StyledTallesMapDiv = styled.div`font-weight: 300;
    font-size: 1.2rem;
    padding: 5px 10px;
    border: 2px solid black;
    color: black;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
      font-weight: 500;
    }
    &:active {
      background-color: black;
      color: white;
      border: 2px solid white;
    }
`

const TallesMapDiv = ({size}) => {
  return (
    <StyledTallesMapDiv>{size}</StyledTallesMapDiv>
  )
}

export default TallesMapDiv