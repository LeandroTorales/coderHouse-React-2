import React from "react";
import styled from "styled-components";

const StyledItemCardOrder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  gap: 15px;
  border: 1px solid black;
  background-color: white;
  padding: 20px 0px;

  .date--id__container--flex {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0px 20px;
    span {
      font-size: 1.2rem;
    }

    .idOrder {
      font-size: 1rem;
    }
  }

  .date--container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .products--container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0px 20px;
    p {
      font-size: 1.5rem;
    }
    .products--single--container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 10px;
    }
    .product--single {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
      border: 1px solid black;
      font-size: 1.3rem;
      text-transform: uppercase;
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        width: 400px;
        border-bottom: 1px solid black;
      }
    }

    .priceYTotal--container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      p {
        font-size: 1.5rem;
      }
      span {
        font-size: 2rem;
      }
    }
  }
`;

const StyledLineDivisory = styled.div`
  height: 2px;
  width: 100%;
  background-color: #e2e2e2;
`;

const OrdersItemsCard = ({ date, idOrder, items, total, product }) => {
  const reduceTotalPrice = () => {
    let arrMapCounter = [];
    const mapItemsCounter = () =>
      items.map((item) => arrMapCounter.push(item.counter));
    mapItemsCounter();
    return arrMapCounter.reduce((a, b) => a + b, 0);
  };

  return (
    <>
      <StyledItemCardOrder>
        <div className="date--id__container--flex">
          <div className="date--container">
            <p>Fecha de compra:</p>
            <span>{date.fecha}</span>
            <span>{date.hora}</span>
          </div>
          <span className="idOrder">Orden de compra: {idOrder}</span>
        </div>
        <StyledLineDivisory />

        <div className="products--container">
          <div className="products--single--container">
            <h2>Compraste: </h2>
            {items.map((e) => (
              <div className="product--single">
                <div>
                  <span>{e.nameProduct}</span>
                  <p>${e.price.toFixed(2)}</p>
                </div>
                <p>cantidad: {e.counter}</p>
              </div>
            ))}
          </div>

          <div className="priceYTotal--container">
            <p>Cantidad de productos comprados: {reduceTotalPrice()}</p>
            <span>Precio final: {total}</span>
          </div>
        </div>
      </StyledItemCardOrder>
    </>
  );
};

export default OrdersItemsCard;
