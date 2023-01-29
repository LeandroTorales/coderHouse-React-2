import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { cartContexto } from "../../context/CartContext";
import CartItemCard from "./components/CartItemCard";

const StyledCartItems = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: white;
  width: 100%;
  height: auto;
  padding-top: 2rem;
  border-bottom: 2px solid black;
  h2 {
    text-transform: uppercase;
  }
  .clear--cart__button{
    position: absolute;
    background: #eb3131;
    color: white;
    padding: 5px 25px;
    border-radius: 0px 0px 0px 10px;
    top: 90px;
    right: 0;
    text-align: center;
    border: none;
    text-transform: uppercase;
    font-size: 1.2rem;
  }
`;

const StyledCartResume = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  flex-direction: column;
  margin: 25px;
  div {
    font-size: 1.3rem;
    span {
      margin-left: 3px;
      font-size: 1.6rem;
    }
  }
  button {
    color: white;
    background: #035a69;
    outline: none;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px 20px;
    transition: all 0.5s;
    font-size: clamp(0.9rem, 1.7vw, 1.5rem);
    &:hover {
      color: black;
      cursor: pointer;
      transform: scale(1.2);
      background-color: #56f056;
    }
  }
`;

const StyledRedirectOnEmptyCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: black;
  height: calc(100vh - 90px);
  padding: 0px 10px;
  h2 {
    color: white;
    text-transform: uppercase;
    font-size: clamp(1.3rem, 6vw, 2rem);
    text-align: center;
    text-decoration: underline;
  }
  a {
    text-decoration: none;
    color: white;
    background: black;
    padding: 20px 20px;
    margin-top: 25px;
    border-radius: 15px;
    outline: 2px solid white;
    font-size: clamp(0.9rem, 2vw, 1.8rem);
    font-weight: 400;
    transition: all 0.5s;
    &:hover {
      color: #000000;
      background: #ffffff;
      outline: 2px solid black;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

const CartDetailContainer = () => {
  const { cart, removeItemCart, clearCart } = useContext(cartContexto);
  console.log("cart:", cart);

  const reduceTotalPrice = () => {
    let arrMapCounter = [];
    const mapCartCounter = () =>
      cart.map((item) => arrMapCounter.push(item.counter * item.price));
    mapCartCounter();
    return arrMapCounter.reduce((a, b) => a + b, 0);
  };

  return (
    <>
      {cart.length !== 0 ? (
        <StyledCartItems>
         <button className="clear--cart__button" onClick={()=>clearCart()}>Limpiar carrito</button>
          {cart.map((item) => (
            <CartItemCard
              key={item.id}
              id={item.id}
              imgUrl={item.imgUrl}
              nameProduct={item.nameProduct}
              price={item.price}
              counter={item.counter}
              stock={item.stock}
              product={item.product}
              removeItemCart = {removeItemCart}
            />
          ))}
          <StyledCartResume>
            <div>
              Total <span>${reduceTotalPrice().toFixed(2)}</span>
            </div>
            <button>Comprar carrito</button>
          </StyledCartResume>
        </StyledCartItems>
      ) : (
        <StyledRedirectOnEmptyCart>
          <h2>No hay productos en el carrito</h2>
          <Link to="/products">Ir al catalogo de productos</Link>
        </StyledRedirectOnEmptyCart>
      )}
    </>
  );
};

export default CartDetailContainer;
