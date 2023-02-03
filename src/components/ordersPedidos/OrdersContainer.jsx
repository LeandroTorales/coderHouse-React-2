import React, { useEffect } from "react";
import { useContext } from "react";
import { getDocs } from "firebase/firestore";
import { orderCollection } from "../dataObjects/firebase";
import { cartContexto } from "../../context/CartContext";

const OrdersContainer = () => {
const { purchaseProducts, setPurchaseProducts, getOrder } = useContext(cartContexto);
console.log('getOrder:', getOrder)

  const getOrderItemsFirebase = async () => {
  const snapshot = await getDocs(orderCollection);
      const dataDocs = snapshot.docs.map((doc) => ({ ...doc.data(), idOrder: doc.id }));
      return setPurchaseProducts(dataDocs);
};
 
    useEffect(() => {
        getOrderItemsFirebase();
  }, [getOrder]);

    return <>
        {
            purchaseProducts.map(product => <h2>{product.total}</h2>)
        }
    </>;
}

export default OrdersContainer;