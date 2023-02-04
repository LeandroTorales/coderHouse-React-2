// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getFirestore, writeBatch } from "firebase/firestore";
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

/* Funcion para exportar los datos de los objetos a firebase/firestore */
export const exportData = async () => {
  const batch = writeBatch(db);
  const productsArr = [
    {
      id: 1,
      nameProduct: "nike tn plus",
      imgUrl: "https://i.ebayimg.com/thumbs/images/g/L7AAAOSwRn1hQKD-/s-l300.jpg",
      textDescription:
        "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual",
      price: 65000,
      stock: 8,
      sizes: [39, 41, 42, 43, 45],
      colors: ["red", "blue", "yellow", "purple"],
      category: 1,
    },
    {
      id: 2,
      nameProduct: "nike tn plus",
      imgUrl: "https://i.ebayimg.com/thumbs/images/g/U3EAAOSwHdtjfYn0/s-l300.jpg",
      price: 59999,
      stock: 15,
      sizes: [39, 40, 41, 42],
      colors: ["red", "blue", "violet", "yellow", "purple"],
      category: 1,
    },
    {
      id: 3,
      nameProduct: "nike tn plus advanced",
      imgUrl: "https://http2.mlstatic.com/D_NQ_NP_774114-MLA53120075411_012023-W.jpg",
      price: 75000,
      stock: 4,
      sizes: [41, 42, 43, 44, 45],
      colors: ["red", "blue", "violet", "yellow", "purple"],
      category: 1,
    },
    {
      id: 4,
      nameProduct: "nike tn plus tiger",
      imgUrl:
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/015/914/products/air-max-plus-og-sunset-21-9b6266032f88d5291e16082395027956-1024-1024.jpg",
      price: 85000,
      stock: 2,
      sizes: [41, 42, 43],
      colors: ["orange", "yellow"],
      category: 1,
    },
    {
      id: 5,
      nameProduct: "nike air tn plus tuned iii",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0660/4990/0788/products/WhatsAppImage2022-06-20at10.13.35AM.jpg?v=1662398751&width=533",
      price: 95000,
      stock: 6,
      sizes: [40, 41, 42, 43, 44, 45],
      colors: ["red", "blue", "violet", "yellow"],
      category: 1,
    },
    {
      id: 6,
      nameProduct: "campera nike rompevientos",
      imgUrl:
        "https://media.solodeportes.com.ar/media/catalog/product/cache/a0bd03cb38235cf9ca6c3c8cbea4afc1/c/a/campera-rompeviento-nike-windrunner-blanca-510020da0001084-1.jpg",
      price: 75000,
      stock: 5,
      sizes: ["M", "L", "XL", "XXL"],
      colors: ["red", "blue", "violet", "yellow"],
      category: 2,
    },
    {
      id: 7,
      nameProduct: "campera nike puffer",
      imgUrl:
        "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/015/914/products/windrunner-21-c742405eea01361c7216564499333310-640-0.webp",
      price: 105000,
      stock: 15,
      sizes: ["M", "L", "XL", "XXL"],
      colors: ["red", "blue", "violet", "yellow"],
      category: 2,
    },
    {
      id: 8,
      nameProduct: "tnf puffer",
      imgUrl: "https://http2.mlstatic.com/D_NQ_NP_881689-MLA51358248145_082022-W.jpg",
      price: 120000,
      stock: 20,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["red", "blue", "violet", "yellow"],
      category: 2,
    },
  ];

  for (const product of productsArr) {
    product.index = product.id;
    delete product.id;

    const docRef = doc(productsCollection);
    batch.set(docRef, product);
  }
  const commit = await batch.commit();
  return commit;
};
