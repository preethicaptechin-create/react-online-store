


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




// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from 'react';
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";
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
// import OrderDetails from "./Pages/OrderDetails";
// import AdminDashboard from "./Pages/AdminDashboard";
// import AdminLogin from "./Pages/AdminLogin";
// import AdminOrders from "./Pages/AdminOrder";
// import AdminProducts from "./Pages/AdminProducts";
// import MyOrders from "./Pages/MyOrders";
// impor
// import { ToastContainer, toast } from "react-toastify";


// import "./App.css";

// // function App() {
// //    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("adminToken"));
// //   return (
// //     loggedIn ? (
// //     <AdminDashboard />
// //   ) : (
// //     <AdminLogin onLogin={() => setLoggedIn(true)} />
// //   );

// //     <BrowserRouter>
// //       <div className="app">

// //         <Header />
// //         <Navbar />

// //         <main className="content app-container">
// //           <Routes>
// //             <Route path="/" element={<Home />} />
// //             <Route path="/products" element={<ProductList />} />
// //             <Route path="/register" element={<Register />} />
// //             <Route path="/login" element={<Login />} />
// //             <Route path="/men" element={<Men />} />
// //             <Route path="/women" element={<Women />} />
// //             <Route path="/kids" element={<Kids />} />
// //             <Route path="/beauty" element={<Beauty />} />
// //             <Route path="/mobiles" element={<Mobile />} />

// //             <Route path="/shoes" element={<Shoes />} />
// //             <Route path="/product/:id" element={<ProductDetails />} />
// //             <Route path="/cart" element={<Cart />} />
// //             <Route path="/add-product" element={<AddProduct />} />
// //             <Route path="/wishlist" element={<Wishlist />} />

// //             <Route path="/order-details" element={<OrderDetails />} />

// //             <Route
// //               path="/order-confirmation/:orderId"
// //               element={<OrderConfirmation />}
// //             />

// //           </Routes>
// //         </main>

// //         <Footer />

// //       </div>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;



// function App() {
//   const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("adminToken"));
//   const token = localStorage.getItem("adminToken"); // optional, pass to dashboard

//   // If admin logged in, render dashboard directly
//   if (loggedIn) {
//     return <AdminDashboard token={token} />;
//   }

//   // Otherwise, render normal site + admin login
//   return (
//     <BrowserRouter>
//       <div className="app">
//         <Header />
//         <Navbar />

//         <main className="content app-container">
//            <ToastContainer position="top-right" autoClose={3000} />
//           <Routes>
//             {/* Public / user routes */}
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
//             <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
//             <Route path="/orders" element={<MyOrders />} />

//             {/* Admin login route */}
//             <Route path="/admin-login" element={<AdminLogin onLogin={() => setLoggedIn(true)} />} />
//                  <Route path="/admin-orders" element={<AdminOrders token={token} />} />
//       <Route path="/admin-products" element={<AdminProducts token={token} />} />
//       <Route path="/admin-dashboard" element={<AdminDashboard token={token} />} />

//           </Routes>
//         </main>

//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;


// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { ToastContainer } from "react-toastify";

// import Header from "./Components/Header";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";

// import Home from "./Pages/Home";
// import ProductList from "./Pages/Productlist";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import Men from "./Pages/Men";
// import Women from "./Pages/Women";
// import Kids from "./Pages/Kids";
// import Beauty from "./Pages/Beauty";
// import Mobile from "./Pages/Mobile";
// import Shoes from "./Pages/Shoes";
// import ProductDetails from "./Pages/ProductDetails";
// import Cart from "./Pages/Cart";
// import AddProduct from "./Pages/AddProduct";
// import Wishlist from "./Pages/Wishlist";
// import OrderConfirmation from "./Pages/OrderConfirmation";
// import OrderDetails from "./Pages/OrderDetails";
// import MyOrders from "./Pages/MyOrders";

// // Admin Pages
// import AdminLogin from "./Pages/AdminLogin";
// import AdminLayout from "./Components/AdminLayout";
// import AdminDashboard from "./Pages/AdminDashboard";
// import AdminOrders from "./Pages/AdminOrder";
// import AdminProducts from "./Pages/AdminProducts";

// import "react-toastify/dist/ReactToastify.css";
// import "./App.css";

// function App() {
//   const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

//   // Check if admin token exists on page load
//   useEffect(() => {
//     const token = localStorage.getItem("adminToken");
//     if (token) setIsAdminLoggedIn(true);
//   }, []);

//   const handleAdminLogin = () => setIsAdminLoggedIn(true);

//   const handleAdminLogout = () => {
//     localStorage.removeItem("adminToken");
//     setIsAdminLoggedIn(false);
//   };

//   return (
//     <BrowserRouter>
//       {/* Public Header and Navbar */}
//       <Header />
//       <Navbar />

//       {/* Toast notifications */}
//       <ToastContainer position="top-right" autoClose={3000} />

//       <Routes>
//         {/* Public / User Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<ProductList />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/men" element={<Men />} />
//         <Route path="/women" element={<Women />} />
//         <Route path="/kids" element={<Kids />} />
//         <Route path="/beauty" element={<Beauty />} />
//         <Route path="/mobiles" element={<Mobile />} />
//         <Route path="/shoes" element={<Shoes />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/add-product" element={<AddProduct />} />
//         <Route path="/wishlist" element={<Wishlist />} />
//         <Route path="/order-details" element={<OrderDetails />} />
//         <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
//         <Route path="/orders" element={<MyOrders />} />

//         {/* Admin Login */}
//         <Route
//           path="/admin-login"
//           element={
//             isAdminLoggedIn ? <Navigate to="/admin/dashboard" /> : <AdminLogin onLogin={handleAdminLogin} />
//           }
//         />

//         {/* Admin Routes with Layout */}
//         <Route
//           path="/admin"
//           element={
//             isAdminLoggedIn ? <AdminLayout onLogout={handleAdminLogout} /> : <Navigate to="/admin-login" />
//           }
//         >
//           {/* Nested admin routes */}
//           <Route path="dashboard" element={<AdminDashboard />} />
//           <Route path="products" element={<AdminProducts />} />
//           <Route path="orders" element={<AdminOrders />} />
//         </Route>

//         {/* Catch-all route */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>

//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;






// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";

// import Header from "./Components/Header";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";

// import Home from "./Pages/Home";
// import ProductList from "./Pages/Productlist";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import Men from "./Pages/Men";
// import Women from "./Pages/Women";
// import Kids from "./Pages/Kids";
// import Beauty from "./Pages/Beauty";
// import Mobile from "./Pages/Mobile";
// import Shoes from "./Pages/Shoes";
// import ProductDetails from "./Pages/ProductDetails";
// import Cart from "./Pages/Cart";
// import AddProduct from "./Pages/AddProduct";
// import Wishlist from "./Pages/Wishlist";
// import OrderConfirmation from "./Pages/OrderConfirmation";
// import OrderDetails from "./Pages/OrderDetails";
// import MyOrders from "./Pages/MyOrders";

// // Admin
// import AdminLogin from "./Pages/AdminLogin";
// import AdminLayout from "./Components/AdminLayout";
// import AdminDashboard from "./Pages/AdminDashboard";
// import AdminOrders from "./Pages/AdminOrder";
// import AdminProducts from "./Pages/AdminProducts";

// function App() {
//   const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("adminToken");
//     if (token) setIsAdminLoggedIn(true);
//   }, []);

//   const handleAdminLogin = () => setIsAdminLoggedIn(true);
//   const handleAdminLogout = () => {
//     localStorage.removeItem("adminToken");
//     setIsAdminLoggedIn(false);
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* ------------------- PUBLIC PAGES ------------------- */}
//         <Route
//           path="/*"
//           element={
//             <>
//               <Header />
//               <Navbar />
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/products" element={<ProductList />} />
//                 <Route path="/register" element={<Register />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/men" element={<Men />} />
//                 <Route path="/women" element={<Women />} />
//                 <Route path="/kids" element={<Kids />} />
//                 <Route path="/beauty" element={<Beauty />} />
//                 <Route path="/mobiles" element={<Mobile />} />
//                 <Route path="/shoes" element={<Shoes />} />
//                 <Route path="/product/:id" element={<ProductDetails />} />
//                 <Route path="/cart" element={<Cart />} />
//                 <Route path="/add-product" element={<AddProduct />} />
//                 <Route path="/wishlist" element={<Wishlist />} />
//                 <Route path="/order-details" element={<OrderDetails />} />
//                 <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
//                 <Route path="/orders" element={<MyOrders />} />
//               </Routes>
//               <Footer />
//             </>
//           }
//         />

//         {/* ------------------- ADMIN LOGIN ------------------- */}

//         <Route
//           path="/admin/*"
//           element={isAdminLoggedIn ? <AdminLayout onLogout={handleAdminLogout} /> : <Navigate to="/admin-login" />}
//         >
//           <Route path="dashboard" element={<AdminDashboard />}>
//             <Route path="products" element={<AdminProducts token={localStorage.getItem("adminToken")} />} />
//             <Route path="orders" element={<AdminOrder />} />
//             {/* <Route path="users" element={<AdminUsers />} /> */}
//           </Route>

//           {/* Redirect /admin to dashboard/products */}
//           <Route path="" element={<Navigate to="dashboard/products" replace />} />
//         </Route>






//         {/* ------------------- CATCH ALL ------------------- */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;





// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";

// // Public Components
// import Header from "./Components/Header";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";

// // Public Pages
// import Home from "./Pages/Home";
// import ProductList from "./Pages/Productlist";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import Men from "./Pages/Men";
// import Women from "./Pages/Women";
// import Kids from "./Pages/Kids";
// import Beauty from "./Pages/Beauty";
// import Mobile from "./Pages/Mobile";
// import Shoes from "./Pages/Shoes";
// import ProductDetails from "./Pages/ProductDetails";
// import Cart from "./Pages/Cart";
// import AddProduct from "./Pages/AddProduct";
// import Wishlist from "./Pages/Wishlist";
// import OrderConfirmation from "./Pages/OrderConfirmation";
// import OrderDetails from "./Pages/OrderDetails";
// import MyOrders from "./Pages/MyOrders";
// import ForgotPassword from "./Pages/ForgotPassword";

// // Admin
// import AdminLogin from "./Pages/AdminLogin";
// import AdminLayout from "./Components/AdminLayout";
// import AdminDashboard from "./Pages/AdminDashboard";
// import AdminOrders from "./Pages/AdminOrder";
// import AdminProducts from "./Pages/AdminProducts";
// import ProtectedRoute from "./Components/ProtectedRoute";


// // --------- Public Layout Wrapper ----------
// const PublicLayout = ({ children }) => (
//   <>
//     <Header />
//     <Navbar />
//     <main>{children}</main>
//     <Footer />
//   </>
// );

// function App() {
//   const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("adminToken");
//     if (token) setIsAdminLoggedIn(true);
//   }, []);

//   const handleAdminLogin = () => setIsAdminLoggedIn(true);
//   const handleAdminLogout = () => {
//     localStorage.removeItem("adminToken");
//     setIsAdminLoggedIn(false);
//   };

//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* ---------------- PUBLIC ROUTES ---------------- */}
//         <Route
//           path="/*"
//           element={
//             <PublicLayout>
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/products" element={<ProductList />} />
//                 <Route path="/register" element={<Register />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/forgot-password" element={<ForgotPassword />} />
//                 <Route path="/men" element={<Men />} />
//                 <Route path="/women" element={<Women />} />
//                 <Route path="/kids" element={<Kids />} />
//                 <Route path="/beauty" element={<Beauty />} />
//                 <Route path="/mobiles" element={<Mobile />} />
//                 <Route path="/shoes" element={<Shoes />} />
//                 <Route path="/product/:id" element={<ProductDetails />} />
//                 <Route path="/cart" element={<Cart />} />
//                 <Route path="/add-product" element={<AddProduct />} />
//                 <Route path="/wishlist" element={<Wishlist />} />
//                 <Route path="/order-details" element={<OrderDetails />} />
//                 <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
//                 <Route path="/orders" element={<MyOrders />} />
//               </Routes>
//             </PublicLayout>
//           }
//         />
//         {/* ---------------- ADMIN LOGIN ---------------- */}
//         <Route
//           path="/admin-login"
//           element={<AdminLogin onLogin={handleAdminLogin} />}
//         />
      
//         <Route
//           path="/admin/*"
//           element={
//             isAdminLoggedIn
//               ? <AdminLayout onLogout={handleAdminLogout} />
//               : <Navigate to="/admin-login" replace />
//           }
//         >
      
//           <Route path="dashboard" element={<AdminDashboard />}>
       
//             <Route
//               path="products"
//               element={<AdminProducts token={localStorage.getItem("adminToken")} />}
//             />
//             <Route
//               path="orders"
//               element={<AdminOrders token={localStorage.getItem("adminToken")} />}
//             />
//           </Route>

       
//           <Route path="" element={<Navigate to="dashboard/products" replace />} />
//         </Route>


//         <Routes>
//           {/* Admin login */}
//           <Route path="/admin-login" element={<AdminLogin onLogin={handleAdminLogin} />} />

//           {/* Protected admin routes */}
//           <Route
//             path="/admin/*"
//             element={
//               <ProtectedRoute>
//                 <AdminLayout onLogout={handleAdminLogout} />
//               </ProtectedRoute>
//             }
//           >
//             {/* Dashboard main page */}
//             <Route path="dashboard" element={<AdminDashboard />} />

//             {/* Admin products */}
//             <Route
//               path="products"
//               element={<AdminProducts token={localStorage.getItem("adminToken")} />}
//             />

//             {/* Admin orders */}
//             <Route
//               path="orders"
//               element={<AdminOrders token={localStorage.getItem("adminToken")} />}
//             />

//             {/* Default /admin → redirect */}
//             <Route path="" element={<Navigate to="dashboard" replace />} />
//           </Route>
//         </Routes>
//         {/* ---------------- CATCH ALL ---------------- */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Public Components
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Public Pages
import Home from "./Pages/Home";
import ProductList from "./Pages/Productlist";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import Beauty from "./Pages/Beauty";
import Mobile from "./Pages/Mobile";
import Shoes from "./Pages/Shoes";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import AddProduct from "./Pages/AddProduct";
import Wishlist from "./Pages/Wishlist";
import OrderConfirmation from "./Pages/OrderConfirmation";
import OrderDetails from "./Pages/OrderDetails";
import MyOrders from "./Pages/MyOrders";
import ForgotPassword from "./Pages/ForgotPassword";

// Admin
import AdminLogin from "./Pages/AdminLogin";
import AdminLayout from "./Components/AdminLayout";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminOrders from "./Pages/AdminOrder";
import AdminProducts from "./Pages/AdminProducts";
import UploadGallery from "./Components/UploadGallery"; // adjust path

// --------- Public Layout Wrapper ----------
const PublicLayout = ({ children }) => (
  <>
    <Header />
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) setIsAdminLoggedIn(true);
  }, []);

  const handleAdminLogin = () => setIsAdminLoggedIn(true);
  const handleAdminLogout = () => {
    localStorage.removeItem("adminToken");
    setIsAdminLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>

        {/* ---------------- PUBLIC ROUTES ---------------- */}
        <Route
          path="/*"
          element={
            <PublicLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
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
              </Routes>
            </PublicLayout>
          }
        />
        {/* ---------------- ADMIN LOGIN ---------------- */}
        <Route
          path="/admin-login"
          element={<AdminLogin onLogin={handleAdminLogin} />}
        />

        {/* ---------------- ADMIN PROTECTED ROUTES ---------------- */}
        <Route
          path="/admin/*"
          element={
            isAdminLoggedIn
              ? <AdminLayout onLogout={handleAdminLogout} />
              : <Navigate to="/admin-login" replace />
          }
        >
          {/* Dashboard route */}
          <Route path="dashboard" element={<AdminDashboard />}>
            {/* Nested routes inside Dashboard */}
            <Route
              path="products"
              element={<AdminProducts token={localStorage.getItem("adminToken")} />}
            />
            {/* <Route path="gallery" element={<UploadGallery />} /> */}
            <Route
              path="orders"
              element={<AdminOrders token={localStorage.getItem("adminToken")} />}
            />
          </Route>

          {/* Redirect /admin → /admin/dashboard/products */}
          <Route path="" element={<Navigate to="dashboard/products" replace />} />
        </Route>
        {/* ---------------- CATCH ALL ---------------- */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;