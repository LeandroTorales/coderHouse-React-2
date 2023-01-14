import "./styles.css";
import NavBar from "./components/navbarFolder/NavBar";
import ItemListContainer from "./components/ContentListItem/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          {/* <Route path="" /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
