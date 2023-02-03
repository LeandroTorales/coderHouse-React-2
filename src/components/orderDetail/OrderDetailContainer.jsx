import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../dataObjects/firebase";
import { cartContexto } from "../../context/CartContext";

const OrderDetailContainer = () => {

    const {getOrder, setGetOrder} = useContext(cartContexto)
    
    const { orderId } = useParams();

    const getOrderSingleItem = async () => {
        const docRef = doc(db, "orders",  orderId);
        const snapshot = await getDoc(docRef);
       return setGetOrder({ ...snapshot.data(), idOrder: snapshot.id });
    }

    useEffect(() => {
        getOrderSingleItem();
    }, [orderId]);
 
    return <>
        <h2>Tu id de comprobante es: { orderId}</h2>
    </>;
};

export default OrderDetailContainer;
