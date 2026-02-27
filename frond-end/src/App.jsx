


// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";
// import ProtectedRoute from "./Components/ProtectedRoute";

// import Home from "./Pages/Home";
// import ProductList from "./Pages/Productlist";
// import Login from "./Pages/Login";
// import Men from "./Pages/Men";
// import Women from "./Pages/Women";
// import Kids from "./Pages/Kids";
// import Beauty from "./Pages/Beauty";
// import Shoes from "./Pages/Shoes";
// import Mobile from "./Pages/Mobile";
// import ProductDetails from "./Pages/ProductDetails";
// import Cart from "./Pages/Cart";
// import AddProduct from "./Pages/AddProduct";
// import Wishlist from "./Pages/Wishlist"
// import Register from "./Pages/Register";
// import OrderConfirmation from "./Pages/OrderConfirmation";
// import OrderDetails from "./Pages/OrderDetails"


// import "./App.css";

// function App() {
//   return (

//     <BrowserRouter>
//       <div className="app">

//         <Header />
//         <Navbar />

//         <main className="content app-container">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/products" element={<ProductList />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/men" element={<Men />} />
//             <Route path="/women" element={<Women />} />
//             <Route path="/kids" element={<Kids />} />
//             <Route path="/beauty" element={<Beauty />} />
//             <Route path="/mobiles" element={<Mobile />} />

//             <Route path="/shoes" element={<Shoes />} />
//             <Route path="/product/:id" element={<ProductDetails />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/add-product" element={<AddProduct />} />
//             <Route path="/wishlist" element={<Wishlist />} />

//             <Route path="/order-details" element={<OrderDetails />} />

//             <Route
//               path="/order-confirmation/:orderId"
//               element={<OrderConfirmation />}
//             />

//           </Routes>
//         </main>

//         <Footer />

//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;




import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
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
import OrderConfirmation from "./Pages/OrderConfirmation";
import OrderDetails from "./Pages/OrderDetails";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminLogin from "./Pages/AdminLogin";
import AdminOrders from "./Pages/AdminOrder";
import AdminProducts from "./Pages/AdminProducts";
import MyOrders from "./Pages/MyOrders";
import { ToastContainer, toast } from "react-toastify";


import "./App.css";

// function App() {
//    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("adminToken"));
//   return (
//     loggedIn ? (
//     <AdminDashboard />
//   ) : (
//     <AdminLogin onLogin={() => setLoggedIn(true)} />
//   );

//     <BrowserRouter>
//       <div className="app">

//         <Header />
//         <Navbar />

//         <main className="content app-container">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/products" element={<ProductList />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/men" element={<Men />} />
//             <Route path="/women" element={<Women />} />
//             <Route path="/kids" element={<Kids />} />
//             <Route path="/beauty" element={<Beauty />} />
//             <Route path="/mobiles" element={<Mobile />} />

//             <Route path="/shoes" element={<Shoes />} />
//             <Route path="/product/:id" element={<ProductDetails />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/add-product" element={<AddProduct />} />
//             <Route path="/wishlist" element={<Wishlist />} />

//             <Route path="/order-details" element={<OrderDetails />} />

//             <Route
//               path="/order-confirmation/:orderId"
//               element={<OrderConfirmation />}
//             />

//           </Routes>
//         </main>

//         <Footer />

//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;



function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("adminToken"));
  const token = localStorage.getItem("adminToken"); // optional, pass to dashboard

  // If admin logged in, render dashboard directly
  if (loggedIn) {
    return <AdminDashboard token={token} />;
  }

  // Otherwise, render normal site + admin login
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />

        <main className="content app-container">
           <ToastContainer position="top-right" autoClose={3000} />
          <Routes>
            {/* Public / user routes */}
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
            <Route path="/order-details" element={<OrderDetails />} />
            <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
            <Route path="/orders" element={<MyOrders />} />

            {/* Admin login route */}
            <Route path="/admin-login" element={<AdminLogin onLogin={() => setLoggedIn(true)} />} />
                 <Route path="/admin-orders" element={<AdminOrders token={token} />} />
      <Route path="/admin-products" element={<AdminProducts token={token} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


