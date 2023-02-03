import "./styles.css";
import NavBar from "./components/navbarFolder/NavBar";
import ItemListContainer from "./components/ContentListItem/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer";
import CartDetailContainer from "./components/cartDetail/CartDetailContainer";
import PreguntasFrecuentesContainer from "./components/preguntasFrecuentes/PreguntasFrecuentesContainer";
import ContactoContainer from "./components/contacto/ContactoContainer";
import HomePage from "./pages/HomePage";
import CartContext from "./context/CartContext";
import OrderDetailContainer from "./components/orderDetail/OrderDetailContainer";
import OrdersContainer from "./components/ordersPedidos/OrdersContainer";

function App() {
  return (
    <>
      <CartContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacto" element={<ContactoContainer />} />
            <Route path="/preguntasFrecuentes" element={<PreguntasFrecuentesContainer />} />
            <Route path="/cart" element={<CartDetailContainer />} />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/products/:categoryId" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/purchase/:orderId" element={<OrderDetailContainer />} />
            <Route path="/orders" element={<OrdersContainer />} />
          </Routes>
        </BrowserRouter>
      </CartContext>
    </>
  );
}

export default App;
