// import "./Header.css";

// import { Link } from "react-router-dom";
// function Header() {
//   return (
//     <header className="header">
//       <Link to="men">Home</Link>
//        <Link to="/women">Products</Link>
//         <Link to="/kids">Login</Link>
//     </header>
//   );
// }

// export default Header;

// import "./Header.css";

// import { FaShoppingCart } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import logo1 from "../assets/logo1.jpg"

// function Header() {
//     const navigate = useNavigate(); 
//   return (
//     <header>

//       {/* Promo carousel strip */}
//       <div className="promo-bar">
//         <div className="promo-track">
//           <span>🔥 Style Bazaar — Flat 30% OFF — Shop Now!</span>
//           <span>✨ New Arrivals Just Dropped!</span>
//           <span>🛍️ Trendy Fashion Deals Waiting!</span>

//           {/* duplicate for smooth loop */}
//           <span>🔥 Style Bazaar — Flat 30% OFF — Shop Now!</span>
//           <span>✨ New Arrivals Just Dropped!</span>
//           <span>🛍️ Trendy Fashion Deals Waiting!</span>
//         </div>
//       </div>

//       {/* Navigation */}
//       <div className="header">
//         {/* <div className="logo">  <img src={logo1} alt="logo" /></div> */}

//         <Link to="/">Home</Link>
//         <Link to="/products">Products</Link>
//         <Link to="/login">Login</Link>
//           <input
//           className="search-bar"
//           type="text"
//           placeholder="Search products..."
//         />
//          {/* <FaShoppingCart className="cart-icon" /> */}
// <div className="cart-wrapper">
//   <FaShoppingCart
//     className="cart-icon"
//     onClick={() => navigate("/cart")}
//   />

//   {cartCount > 0 && (
//     <span className="cart-badge">
//       {cartCount}
//     </span>
//   )}
// </div>

//       </div>

//     </header>
//   );
// }

// export default Header;



// import "./Header.css";

// import { FaShoppingCart } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import logo1 from "../assets/logo1.jpg"

// function Header() {
//     const navigate = useNavigate(); 
//     const cartItems =
//   JSON.parse(localStorage.getItem("cart")) || [];

// const cartCount = cartItems.reduce(
//   (total, item) => total + item.qty,
//   0
// );

//   return (
//     <header>

//       {/* Promo carousel strip */}
//       <div className="promo-bar">
//         <div className="promo-track">
//           <span>🔥 Style Bazaar — Flat 30% OFF — Shop Now!</span>
//           <span>✨ New Arrivals Just Dropped!</span>
//           <span>🛍️ Trendy Fashion Deals Waiting!</span>

//           {/* duplicate for smooth loop */}
//           <span>🔥 Style Bazaar — Flat 30% OFF — Shop Now!</span>
//           <span>✨ New Arrivals Just Dropped!</span>
//           <span>🛍️ Trendy Fashion Deals Waiting!</span>
//         </div>
//       </div>

//       {/* Navigation */}
//       <div className="header">
//         {/* <div className="logo">  <img src={logo1} alt="logo" /></div> */}

//         <Link to="/">Home</Link>
//         <Link to="/products">Products</Link>
//         <Link to="/login">Login</Link>
//           <input
//           className="search-bar"
//           type="text"
//           placeholder="Search products..."
//         />
//          {/* <FaShoppingCart className="cart-icon" /> */}
// <div className="cart-wrapper">
//   <FaShoppingCart
//     className="cart-icon"
//     onClick={() => navigate("/cart")}
//   />

//   {cartCount > 0 && (
//     <span className="cart-badge">
//       {cartCount}
//     </span>
//   )}
// </div>

//       </div>

//     </header>
//   );
// }

// export default Header;


// import { FaShoppingCart } from "react-icons/fa";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import logo1 from "../assets/logo1.jpg"; // keep if you use it somewhere
// import "./Header.css"

// function Header() {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams(); // ← read current ?search=...
//   const [cartCount, setCartCount] = useState(0);
//   const [search, setSearch] = useState("");

//   // Sync input with URL when page changes / back button
//   useEffect(() => {
//     const query = searchParams.get("search") || "";
//     setSearch(query);
//   }, [searchParams]);

//   // Cart logic (kept your debug version)
//   useEffect(() => {
//     const updateCartCount = () => {
//       console.log("🔔 Header: updateCartCount called");
//       const cart = JSON.parse(localStorage.getItem("cart")) || [];
//       const total = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
//       console.log("🔔 Header: calculated total =", total);
//       setCartCount(total);
//     };

//     console.log("🔔 Header: useEffect running (component mounted)");
//     updateCartCount();

//     window.addEventListener("cartUpdated", updateCartCount);

//     return () => {
//       console.log("🔔 Header: cleaning up listener");
//       window.removeEventListener("cartUpdated", updateCartCount);
//     };
//   }, []);

//   const handleSearchSubmit = () => {
//     const trimmed = search.trim();
//     if (!trimmed) return;

//     // Navigate to products with search param
//     navigate(`/products?search=${encodeURIComponent(trimmed)}`);
//   };

//   return (
//     <header>
//       {/* Promo bar */}
//       <div className="promo-bar">
//         <div className="promo-track">
//           <span>🔥 Style Bazaar — Flat 30% OFF — Shop Now!</span>
//           <span>✨ New Arrivals Just Dropped!</span>
//           <span>🛍️ Trendy Fashion Deals Waiting!</span>
//           <span>🔥 Style Bazaar — Flat 30% OFF — Shop Now!</span>
//           <span>✨ New Arrivals Just Dropped!</span>
//           <span>🛍️ Trendy Fashion Deals Waiting!</span>
//         </div>
//       </div>

//       {/* Navigation */}
//       <div className="header">
//         <Link to="/">Home</Link>
//         <Link to="/products">Products</Link>
//         <Link to="/login">Login</Link>

//         <div className="search-wrapper"> {/* wrapper helps with styling */}
//           <input
//             className="search-bar"
//             type="text"
//             placeholder="Search products..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === "Enter") {
//                 handleSearchSubmit();
//               }
//             }}
//           />
//           {/* Optional: magnifying glass button */}
//           <button
//             className="search-icon-btn"
//             onClick={handleSearchSubmit}
//             aria-label="Search"
//           >
//             🔍
//           </button>
//         </div>

//         <div className="cart-wrapper">
//           <FaShoppingCart
//             className="cart-icon"
//             onClick={() => navigate("/cart")}
//           />
//           {cartCount > 0 && (
//             <span className="cart-badge">{cartCount}</span>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;



// import "./Header.css";
// import { FaShoppingCart } from "react-icons/fa";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// function Header() {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const [cartCount, setCartCount] = useState(0);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Sync input with URL query on back/refresh
//   useEffect(() => {
//     const query = searchParams.get("search") || "";
//     setSearchTerm(query);
//   }, [searchParams]);

//   // Cart count
//   useEffect(() => {
//     const updateCartCount = () => {
//       const cart = JSON.parse(localStorage.getItem("cart")) || [];
//       const total = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
//       setCartCount(total);
//     };

//     updateCartCount();
//     window.addEventListener("cartUpdated", updateCartCount);

//     return () => {
//       window.removeEventListener("cartUpdated", updateCartCount);
//     };
//   }, []);

//   // Live navigation + instant redirect to products as soon as user types
//   useEffect(() => {
//     if (searchTerm.trim()) {
//       navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
//     }
//   }, [searchTerm, navigate]);

//   return (
//     <header>
//       <div className="promo-bar">
//         <div className="promo-track">
//           <span>🔥 Style Bazaar — Flat 30% OFF — Shop Now!</span>
//           <span>✨ New Arrivals Just Dropped!</span>
//           <span>🛍️ Trendy Fashion Deals Waiting!</span>
//           <span>🔥 Style Bazaar — Flat 30% OFF — Shop Now!</span>
//           <span>✨ New Arrivals Just Dropped!</span>
//           <span>🛍️ Trendy Fashion Deals Waiting!</span>
//         </div>
//       </div>

//       <div className="header">
//         <Link to="/">Home</Link>
//         <Link to="/products">Products</Link>
//         <Link to="/login">Login</Link>

//         <div className="search-wrapper">
//           <input
//             className="search-bar"
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             autoFocus // optional – cursor ready
//           />
//         </div>

//         <div className="cart-wrapper">
//           <FaShoppingCart
//             className="cart-icon"
//             onClick={() => navigate("/cart")}
//           />
//           {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { products } from "../Services/Product"; // ← import your products here

function Header() {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
    const [paused, setPaused] = useState(false);
  const wrapperRef = useRef(null);

  // Cart count (your existing logic)
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const total = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
      setCartCount(total);
    };

    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);

    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Live filtering — happens instantly
  const filteredProducts = products.filter((p) => {
    if (!searchTerm.trim()) return false;
    const term = searchTerm.toLowerCase().trim();
    return (
      p.name?.toLowerCase().includes(term) ||
      p.category?.toLowerCase().includes(term)
    );
  }).slice(0, 8); // limit to 8 suggestions like Flipkart

  return (
    <header>
       <div
      className={`promo-bar ${paused ? "paused" : ""}`}
      onClick={() => setPaused(!paused)}
    >
        <div className="promo-track">
          <span>🔥 Style Bazaar — Flat 30% OFF — Shop Now!</span>
          <span>✨ New Arrivals Just Dropped!</span>
          <span>🛍️ Trendy Fashion Deals Waiting!</span>
          <span>🔥 Style Bazaar — Flat 30% OFF — Shop Now!</span>
          <span>✨ New Arrivals Just Dropped!</span>
          <span>🛍️ Trendy Fashion Deals Waiting!</span>
        </div>
      </div>

      <div className="header">
        <div className="head">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/login">Login</Link>
        </div>

        {/* Search with dropdown */}
        <div className="search-wrapper" ref={wrapperRef}>
          <input
            className="search-bar"
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
          />

          {/* Dropdown appears when typing */}
          {showDropdown && searchTerm.trim() && (
            <div className="search-dropdown">
              {filteredProducts.length === 0 ? (
                <div className="no-result">No products found</div>
              ) : (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="dropdown-item"
                    onClick={() => {
                      setSearchTerm("");
                      setShowDropdown(false);
                      navigate(`/product/${product.id}`);
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="dropdown-img"
                    />
                    <span>{product.name}</span>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        <div className="cart-wrapper">
          <FaShoppingCart
            className="cart-icon"
            onClick={() => navigate("/cart")}
          />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
      </div>
    </header>
  );
}

export default Header;
