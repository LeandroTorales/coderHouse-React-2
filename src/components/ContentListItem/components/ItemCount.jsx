import React, { useState } from "react";
import styled from "styled-components";

const StyledCount = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  button {
    border: 1px solid;
    border-radius: 4px;
    width: 30px;
    height: 30px;
    background-attachment: inherit;
    background-clip: content-box;
    background-color: #d1d0d07a;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 300;
    text-align: center;
  }
`;

const ItemCount = ({ stock }) => {
  let propStock = stock;

  const [stockState, setStockState] = useState(propStock);

  const restaStock = () => setStockState(stockState - 1);
  const sumarStock = () => setStockState(stockState + 1);

  const handleClick = (operation) => {
    if (stockState === 1 && operation === restaStock) return;
    return operation();
  };

  return (
    <>
      <StyledCount>
        <button onClick={() => handleClick(restaStock)}>-</button>
        <span className="span__count">{stockState}</span>
        <button onClick={() => handleClick(sumarStock)}>+</button>
      </StyledCount>
    </>
  );
};

export default ItemCount;
