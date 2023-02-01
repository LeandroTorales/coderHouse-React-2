import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../dataObjects/firebase";

const productsCollection = collection(db, "products");

export const getPromiseItems = async () => {
  const querySnapshot = await getDocs(productsCollection);
  const dataDocs = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataDocs;
};

export const getByCategoryItems = async (categoryId) => {
  const consulta = query(
    productsCollection,
    where("category", "==", Number(categoryId))
  );
  const querySnapshot = await getDocs(consulta);
  const dataDocs = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataDocs;
};
