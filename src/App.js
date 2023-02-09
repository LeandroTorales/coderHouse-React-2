import "./styles.css";
import NavBar from "./components/navbarFolder/NavBar";
import ItemListContainer from "./components/ContentListItem/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer";
import CartDetailContainer from "./components/cartDetail/CartDetailContainer";
import HomePage from "./pages/HomePage";
import CartContext from "./context/CartContext";
import OrderDetailContainer from "./components/orderDetail/OrderDetailContainer";
import OrdersContainer from "./components/ordersPedidos/OrdersContainer";

import RegisterContainer from "./components/registerFolder/RegisterContainer";
import UserContext from "./context/UserContext";

function App() {
  return (
    <>
    
      <UserContext>
        <CartContext>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartDetailContainer />} />
              <Route path="/products" element={<ItemListContainer />} />
              <Route path="/products/:categoryId" element={<ItemListContainer />} />
              <Route path="/product/:id" element={<ItemDetailContainer />} />
              <Route path="/purchase/:orderId" element={<OrderDetailContainer />} />
              <Route path="/orders" element={<OrdersContainer />} />
              <Route path="/register" element={<RegisterContainer />} />
              <Route path="/login" element={<h2>fafae</h2>} />
            </Routes>
          </BrowserRouter>
        </CartContext>
      </UserContext>
    </>
  );
}

export default App;
