import { db } from "../../dataObjects/firebase";
import { doc, getDoc } from "firebase/firestore";

export const getPromiseSingleItem = async (queryParam) => {
  const docRef = await doc(db, "products", queryParam);
  const snapshot = await getDoc(docRef);
  return { ...snapshot.data(), id: snapshot.id };
};
