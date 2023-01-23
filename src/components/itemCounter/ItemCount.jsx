import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { cartContexto } from "../../context/CartContext";

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
  const propStock = Number(stock);

  const [stockState, setStockState] = useState(propStock);

  const { addCounterItem } = useContext(cartContexto);

  const restaStock = () => setStockState(stockState - 1);

  const sumarStock = () => setStockState(stockState + 1);

  const handleClick = (operation) => {
    if (stockState === 1 && operation === restaStock) return;
    if (stockState === propStock && operation === sumarStock) return;
    return operation();
  };

  useEffect(() => {
    setStockState(1);
  }, [propStock]);

  useEffect(() => {
    addCounterItem(stockState);
  }, [stockState]);

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
