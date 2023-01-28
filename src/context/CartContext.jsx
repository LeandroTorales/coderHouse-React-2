import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const cartContexto = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);


  const [counter, setCounter] = useState(0);

  const addCounterItem = (number) => {
    setCounter(number);
  };

  /* Button addToCart */
  const addItem = (item) => {
    setCart([...cart, { ...item, counter: counter }]);
  };

  

  /* Se ocupa de reducir a un numero la cantidad de productos */
  const getTotalItemsOfCart = () => {
    if (!cart.length || cart.length == 0) return;
    let arrMapCounter = [];
    const mapCartCounter = () =>
      cart.map((item) => arrMapCounter.push(item.counter));
    mapCartCounter();
    return arrMapCounter.reduce((a, b) => a + b, 0);
  };

  const removeItemCart = () => {};

  const clearCart = () => {
    setCart([]);
    setCounter(0);
  };

  const value = { cart, addItem, addCounterItem, getTotalItemsOfCart };

  return (
    <>
      <cartContexto.Provider value={value}>{children}</cartContexto.Provider>
    </>
  );
};

export default CartContext;
