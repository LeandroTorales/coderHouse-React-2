import { getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { productsCollection } from "../dataObjects/firebase";

export const getPromiseItems = async () => {
  const queryPersonalizada = query(productsCollection, orderBy("index"), limit(4));
  const querySnapshot = await getDocs(queryPersonalizada);
  const dataDocs = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataDocs;
};

export const getByCategoryItems = async (categoryId) => {
  const consulta = query(productsCollection, where("category", "==", Number(categoryId)));
  const querySnapshot = await getDocs(consulta);
  const dataDocs = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataDocs;
};
