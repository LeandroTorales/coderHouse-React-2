// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIPaotmt30jXA8oS3hSyrAnHvclVlogIU",
  authDomain: "reactproyectecommerce.firebaseapp.com",
  projectId: "reactproyectecommerce",
  storageBucket: "reactproyectecommerce.appspot.com",
  messagingSenderId: "92386676551",
  appId: "1:92386676551:web:16d56e256dc74945188662",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const productsCollection = collection(db, "products");
export const orderCollection = collection(db, "orders");
