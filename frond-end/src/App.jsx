// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "./Components/Header";
// // import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import ProductList from "./Pages/Productlist";
// import  Home  from "./Pages/Home";
// import  Login  from "./Pages/Login";
// import "./App.css"

// function App() {
//   return (
//    <BrowserRouter>
//       <div className="app">
//         <Header />

//         <main className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/products" element={<ProductList />} />
//             <Route path="/login" element={<Login />} />
//           </Routes>
//         </main>

//         <Footer />
//       </div>
//     </BrowserRouter>>
//   );
// }

// export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import ProductList from "./Pages/Productlist";
// import Home from "./Pages/Home";
// import Login from "./Pages/Login";
// import Men from "./Pages/Men";
// import Women from "./Pages/Women";
// import Beauty from "./Pages/Beauty";
// import shoes from "./Pages/Shoes";
// import Mobile from "./pages/Mobile"
// import kids from "./Pages/Kids"
// import "./App.css";
// import Navbar from "./Components/Navbar";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="app">

//         <Header />
//         <Navbar/>

//         <main className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/products" element={<ProductList />} />
//             <Route path="/login" element={<Login />} />
//                <Route path="/men" element={<Men />} />
//                   <Route path="/women" element={<Women />} />
//                      <Route path="/kids" element={<Kids />} />
//                         <Route path="/beauty" element={<Beauty />} />
//                            <Route path="/Mobile" element={<Mobile />} />
//                               <Route path="/shoes" element={<Shoes />} />
//           </Routes>
//         </main>

//         <Footer />

//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;


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



import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Header />
        <Navbar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/beauty" element={<Beauty />} />
          <Route path="/mobiles" element={<Mobile />} />

            <Route path="/shoes" element={<Shoes />} />
            <Route path="/product/:id" element={<ProductDetails />} />
         <Route path="/cart" element={<Cart />} />



          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
