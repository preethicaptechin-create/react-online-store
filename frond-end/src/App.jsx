


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import ProductList from "./Pages/Productlist";
import Login from "./Pages/Login";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import Beauty from "./Pages/Beauty";
import Shoes from "./Pages/Shoes";
import Mobile from "./Pages/Mobile";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import AddProduct from "./Pages/AddProduct";
import Wishlist from "./Pages/Wishlist"
import Register from "./Pages/Register";



import "./App.css";

function App() {
  return (

    <BrowserRouter>
      <div className="app">

        <Header />
        <Navbar />

        <main className="content app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/beauty" element={<Beauty />} />
            <Route path="/mobiles" element={<Mobile />} />

            <Route path="/shoes" element={<Shoes />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/wishlist" element={<Wishlist />} />



          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
