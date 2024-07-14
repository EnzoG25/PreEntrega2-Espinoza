import "./index.css"

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Promociones from "./components/Promociones";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Promociones />
        <NavBar />
        <Banner />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        </Routes>
        <Banner2 />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
