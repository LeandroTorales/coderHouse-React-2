import React, { useEffect } from "react";
import { useContext } from "react";
import { getDocs, orderBy, query } from "firebase/firestore";
import { orderCollection } from "../dataObjects/firebase";
import { cartContexto } from "../../context/CartContext";
import OrdersItemsCard from "./components/OrdersItemsCard";
import "./styles.css";

const OrdersContainer = () => {
  const { purchaseProducts, setPurchaseProducts, getOrder } =
    useContext(cartContexto);
  console.log("purchaseProducts:", purchaseProducts);

  const getOrderItemsFirebase = async () => {
    const queryPersonalizada = query(orderCollection, orderBy("date", "desc"));
    const snapshot = await getDocs(queryPersonalizada);
    const dataDocs = snapshot.docs.map((doc) => ({
      ...doc.data(),
      idOrder: doc.id,
    }));
    return setPurchaseProducts(dataDocs);
  };

  useEffect(() => {
    getOrderItemsFirebase();
  }, [getOrder]);

  return (
    <>
      <div className="container--orders">
        {purchaseProducts.map((product) => (
          <OrdersItemsCard
            key={product.idOrder}
            date={product.date}
            idOrder={product.idOrder}
            items={product.items}
            total={product.total}
            product={product}
          />
        ))}
      </div>
    </>
  );
};

export default OrdersContainer;
