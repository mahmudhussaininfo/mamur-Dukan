import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./components/Contact";
import Layout from "./components/Layout/Layout";
import Shop from "./pages/Shop";
import SingleProduct from "./components/SingleProduct";
import Cart from "./pages/Cart";
import PlaceOrder from "./components/PlaceOrder";
import MyOrder from "./components/MyOrder";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/my-order" element={<MyOrder />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
