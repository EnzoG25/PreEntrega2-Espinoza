import "./index.css";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Promociones from "./components/Promociones";

import Banner2 from "./components/Banner2";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Promociones />
          <NavBar />

          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
          </Routes>
          <Banner2 />
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
