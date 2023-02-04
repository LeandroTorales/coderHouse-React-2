import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const cartContexto = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orderIdState, setOrderIdState] = useState(undefined);
  const [counter, setCounter] = useState(0);
  const [purchaseProducts, setPurchaseProducts] = useState([]);
const [getOrder, setGetOrder] = useState(undefined);
  const addCounterItem = (number) => {
    setCounter(number);
  };

  /* Button addToCart */
  const addItem = (item) => {
    const productFind = cart.find((product) => product.index === item.index);

    const index = cart.findIndex(elem => elem.index === item.index);
    
    if (productFind) {
      let cartCopy = [...cart];
      const objDelete= cartCopy.splice(index, 1, {...productFind, counter: counter + productFind.counter });
      return setCart(cartCopy);
    } else {
      return setCart([...cart, { ...item, counter: counter }]);
    }
    
  };

  /* Se ocupa de reducir a un numero la cantidad de productos */
  const getTotalItemsOfCart = () => {
    if (!cart.length || cart.length === 0) return;
    let arrMapCounter = [];
    const mapCartCounter = () =>
      cart.map((item) => arrMapCounter.push(item.counter));
    mapCartCounter();
    return arrMapCounter.reduce((a, b) => a + b, 0);
  };

  const removeItemCart = (id) => {
    const filterCart = setCart(cart.filter((item) => item.id !== id));
    return filterCart;
  };

  const clearCart = () => {
    setCart([]);
    setCounter(0);
    setOrderIdState(undefined)
  };

  const value = {
    cart,
    addItem,
    addCounterItem,
    getTotalItemsOfCart,
    removeItemCart,
    clearCart,
    setOrderIdState,
    orderIdState,
    setPurchaseProducts,
    purchaseProducts,
    getOrder,
    setGetOrder
  };

  return (
    <>
      <cartContexto.Provider value={value}>{children}</cartContexto.Provider>
    </>
  );
};

export default CartContext;
