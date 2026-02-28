


// import "./Header.css";
// import { FaShoppingCart } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";
// // import { products } from "../Services/Product";

// function Header() {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [paused, setPaused] = useState(false);

//   const wrapperRef = useRef(null);

//   // Cart count (unchanged)
//   useEffect(() => {
//     const updateCartCount = () => {
//       const cart = JSON.parse(localStorage.getItem("cart")) || [];
//       const total = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
//       setCartCount(total);
//     };

//     updateCartCount();
//     window.addEventListener("cartUpdated", updateCartCount);

//     return () => window.removeEventListener("cartUpdated", updateCartCount);
//   }, []);

//   // Close dropdown on outside click (unchanged)
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Filter products (case-insensitive, name or category)
//   const filteredProducts = products.filter((p) => {
//     if (!searchTerm.trim()) return false;
//     const term = searchTerm.toLowerCase().trim();
//     return (
//       p.name?.toLowerCase().includes(term) ||
//       p.category?.toLowerCase().includes(term)
//     );
//   }).slice(0, 8); // max 8 suggestions like Flipkart/Meesho

//   return (
//     <header>
//       <div
//         className={`promo-bar ${paused ? "paused" : ""}`}
//         onClick={() => setPaused(!paused)}
//       >
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
//         <div className="head">
//           <Link to="/">Home</Link>
//           <Link to="/products">Products</Link>
//           <Link to="/login">Login</Link>
//           {/* <Link to="/wishlist"> ❤️</Link> */}
//         </div>

//         {/* Search wrapper */}
//         <div className="search-wrapper" ref={wrapperRef}>
//           <input
//             className="search-bar"
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               setShowDropdown(true);
//             }}
//             onFocus={() => {
//               if (searchTerm.trim()) setShowDropdown(true);
//             }}
//             onBlur={() => {
//               // Small delay so click on item registers first
//               setTimeout(() => setShowDropdown(false), 200);
//             }}
//           />

//           {/* Dropdown – only show when typing & has term */}
//           {showDropdown && searchTerm.trim() && (
//             <div className="search-dropdown">
//               {filteredProducts.length === 0 ? (
//                 <div className="no-result">No products found</div>
//               ) : (
//                 // filteredProducts.map((product) => (
//                 //   <div
//                 //     key={product.id}
//                 //     className="dropdown-item"
//                 //     onClick={() => {
//                 //       setSearchTerm("");
//                 //       setShowDropdown(false);
//                 //       navigate(`/product/${product.id}`);
//                 //     }}
//                 // >
//                 filteredProducts.map((product) => (
//                   <div
//                     key={product._id}
//                     className="dropdown-item"
//                     onClick={() => {
//                       setSearchTerm("");
//                       setShowDropdown(false);
//                       navigate(`/product/${product._id}`);
//                     }}
//                   >
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="dropdown-img"
//                     />
//                     <span>{product.name}</span>
//                   </div>
//                 ))
//               )}
//             </div>
//           )}
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










// import "./Header.css";
// import { FaShoppingCart } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";

// function Header() {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [paused, setPaused] = useState(false);

//   const wrapperRef = useRef(null);

//   const BASE_URL = "http://localhost:5000";

//   // ✅ FETCH PRODUCTS FROM BACKEND
// useEffect(() => {
//   fetch("http://localhost:5000/api/products")
//     .then((res) => res.json())
//     .then((data) => {
//       if (Array.isArray(data)) {
//         setProducts(data);
//       } else if (Array.isArray(data.data)) {
//         setProducts(data.data);
//       } else {
//         setProducts([]);
//       }
//     })
//     .catch((err) => {
//       console.error("Fetch error:", err);
//       setProducts([]);
//     });
// }, []);

//   // Cart count (unchanged)
//   useEffect(() => {
//     const updateCartCount = () => {
//       const cart = JSON.parse(localStorage.getItem("cart")) || [];
//       const total = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
//       setCartCount(total);
//     };

//     updateCartCount();
//     window.addEventListener("cartUpdated", updateCartCount);

//     return () => window.removeEventListener("cartUpdated", updateCartCount);
//   }, []);

//   // Close dropdown on outside click (unchanged)
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Filter products
//   const filteredProducts = products
//     .filter((p) => {
//       if (!searchTerm.trim()) return false;
//       const term = searchTerm.toLowerCase().trim();
//       return (
//         p.name?.toLowerCase().includes(term) ||
//         p.category?.toLowerCase().includes(term)
//       );
//     })
//     .slice(0, 8);

//   return (
//     <header>
//       <div
//         className={`promo-bar ${paused ? "paused" : ""}`}
//         onClick={() => setPaused(!paused)}
//       >
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
//         <div className="head">
//           <Link to="/">Home</Link>
//           <Link to="/products">Products</Link>
//           <Link to="/login">Login</Link>
//         </div>

//         <div className="search-wrapper" ref={wrapperRef}>
//           <input
//             className="search-bar"
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               setShowDropdown(true);
//             }}
//             onFocus={() => {
//               if (searchTerm.trim()) setShowDropdown(true);
//             }}
//             onBlur={() => {
//               setTimeout(() => setShowDropdown(false), 200);
//             }}
//           />

//           {showDropdown && searchTerm.trim() && (
//             <div className="search-dropdown">
//               {filteredProducts.length === 0 ? (
//                 <div className="no-result">No products found</div>
//               ) : (
//                 filteredProducts.map((product) => (
//                   <div
//                     key={product._id}
//                     className="dropdown-item"
//                     onClick={() => {
//                       setSearchTerm("");
//                       setShowDropdown(false);
//                       navigate(`/product/${product._id}`);
//                     }}
//                   >
//                     <img
//                       src={`${BASE_URL}/${product.image}`}  
//                       alt={product.name}
//                       className="dropdown-img"
//                     />
//                     <span>{product.name}</span>
//                   </div>
//                 ))
//               )}
//             </div>
//           )}
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






// import "./Header.css";

// import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";

// function Header() {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [paused, setPaused] = useState(false);
//   const [accountDropdown, setAccountDropdown] = useState(false);
//   const user = JSON.parse(localStorage.getItem("user")); // logged-in user

//   const wrapperRef = useRef(null);

//   const BASE_URL = "http://localhost:5000";

//   // ✅ FETCH PRODUCTS FROM BACKEND
//   useEffect(() => {
//     fetch("http://localhost:5000/api/products")
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data)) {
//           setProducts(data);
//         } else if (Array.isArray(data.data)) {
//           setProducts(data.data);
//         } else {
//           setProducts([]);
//         }
//       })
//       .catch((err) => {
//         console.error("Fetch error:", err);
//         setProducts([]);
//       });
//   }, []);

//   // Cart count (unchanged)
//   useEffect(() => {
//     const updateCartCount = () => {
//       const cart = JSON.parse(localStorage.getItem("cart")) || [];
//       const total = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
//       setCartCount(total);
//     };

//     updateCartCount();
//     window.addEventListener("cartUpdated", updateCartCount);

//     return () => window.removeEventListener("cartUpdated", updateCartCount);
//   }, []);

//   // Close dropdown on outside click (unchanged)
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Filter products
//   const filteredProducts = products
//     .filter((p) => {
//       if (!searchTerm.trim()) return false;
//       const term = searchTerm.toLowerCase().trim();
//       return (
//         p.name?.toLowerCase().includes(term) ||
//         p.category?.toLowerCase().includes(term)
//       );
//     })
//     .slice(0, 8);
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <header>
//       <div
//         className={`promo-bar ${paused ? "paused" : ""}`}
//         onClick={() => setPaused(!paused)}
//       >
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
//         <div className="head">
//           <Link to="/">Home</Link>
//           <Link to="/products">Products</Link>
//           {/* <Link to="/login">Login</Link> */}
//         </div>

//         <div className="search-wrapper" ref={wrapperRef}>
//           <input
//             className="search-bar"
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               setShowDropdown(true);
//             }}
//             onFocus={() => {
//               if (searchTerm.trim()) setShowDropdown(true);
//             }}
//             onBlur={() => {
//               setTimeout(() => setShowDropdown(false), 200);
//             }}
//           />

//           {showDropdown && searchTerm.trim() && (
//             <div className="search-dropdown">
//               {filteredProducts.length === 0 ? (
//                 <div className="no-result">No products found</div>
//               ) : (
//                 filteredProducts.map((product) => (
//                   <div
//                     key={product._id}
//                     className="dropdown-item"
//                     onClick={() => {
//                       setSearchTerm("");
//                       setShowDropdown(false);
//                       navigate(`/product/${product._id}`);
//                     }}
//                   >
//                     <img
//                       src={`${BASE_URL}/${product.image}`}
//                       alt={product.name}
//                       className="dropdown-img"
//                     />
//                     <span>{product.name}</span>
//                   </div>
//                 ))
//               )}
//             </div>
//           )}
//         </div>

//         <div className="cart-wrapper">
//           <FaShoppingCart
//             className="cart-icon"
//             onClick={() => navigate("/cart")}
//           />
//           {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
//         </div>
//         {/* Account / User */}
//         <div className="account-wrapper">
//           <div
//             className="account-section"
//             onClick={() => {
//               if (user) {
//                 setAccountDropdown(!accountDropdown); // logged-in → toggle dropdown
//               } else {
//                 navigate("/login"); // not logged-in → go to login
//               }
//             }}
//           >
//             <FaUserCircle className="user-icon" />
//             <span>{user ? user.name : "Login"}</span>

//             {user && accountDropdown && (
//               <div className="account-dropdown">
//                 <p className="dropdown-username">{user.name}</p>
//                 <p className="dropdown-logout" onClick={handleLogout}>Logout</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;







// import "./Header.css";

// import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";

// function Header() {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [paused, setPaused] = useState(false);
//   const [accountDropdown, setAccountDropdown] = useState(false);
//   const user = JSON.parse(localStorage.getItem("user")); // logged-in user

//   const wrapperRef = useRef(null);

//   const BASE_URL = "http://localhost:5000";

//   // ✅ FETCH PRODUCTS FROM BACKEND
//   useEffect(() => {
//     fetch("http://localhost:5000/api/products")
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data)) {
//           setProducts(data);
//         } else if (Array.isArray(data.data)) {
//           setProducts(data.data);
//         } else {
//           setProducts([]);
//         }
//       })
//       .catch((err) => {
//         console.error("Fetch error:", err);
//         setProducts([]);
//       });
//   }, []);

//   // // Cart count (unchanged)
//   // useEffect(() => {
//   //   const updateCartCount = () => {
//   //     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   //     const total = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
//   //     setCartCount(total);
//   //   };

//   // Cart count update
// useEffect(() => {
//   const updateCartCount = () => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     // ✅ Sum only the actual qty, do not default to 1
//     const total = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
//     setCartCount(total);
//   };

//   updateCartCount();
//   window.addEventListener("cartUpdated", updateCartCount);

//   return () => window.removeEventListener("cartUpdated", updateCartCount);
// }, []);

//     updateCartCount();
//     window.addEventListener("cartUpdated", updateCartCount);

//     return () => window.removeEventListener("cartUpdated", updateCartCount);
//   }, []);

//   // Close dropdown on outside click (unchanged)
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Filter products
//   const filteredProducts = products
//     .filter((p) => {
//       if (!searchTerm.trim()) return false;
//       const term = searchTerm.toLowerCase().trim();
//       return (
//         p.name?.toLowerCase().includes(term) ||
//         p.category?.toLowerCase().includes(term)
//       );
//     })
//     .slice(0, 8);
//   // Header.js
//   const handleLogout = async () => {
//   const refreshToken = localStorage.getItem("refreshToken");

//   if (refreshToken) {
//     try {
//       await fetch(`${BASE_URL}/api/auth/logout`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ refreshToken }), // ✅ Must match backend key
//       });
//     } catch (err) {
//       console.error("Backend logout error:", err);
//     }
//   } else {
//     console.warn("No refresh token found in localStorage");
//   }

//   // Remove all tokens and user info from localStorage
//   localStorage.removeItem("accessToken");
//   localStorage.removeItem("refreshToken");
//   localStorage.removeItem("user");

//   // Redirect to login page
//   navigate("/login");
// };

//   return (
//     <header>
//       <div
//         className={`promo-bar ${paused ? "paused" : ""}`}
//         onClick={() => setPaused(!paused)}
//       >
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
//         <div className="head">
//           <Link to="/">Home</Link>
//           <Link to="/products">Products</Link>
//           {/* <Link to="/login">Login</Link> */}
//         </div>

//         <div className="search-wrapper" ref={wrapperRef}>
//           <input
//             className="search-bar"
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               setShowDropdown(true);
//             }}
//             onFocus={() => {
//               if (searchTerm.trim()) setShowDropdown(true);
//             }}
//             onBlur={() => {
//               setTimeout(() => setShowDropdown(false), 200);
//             }}
//           />

//           {showDropdown && searchTerm.trim() && (
//             <div className="search-dropdown">
//               {filteredProducts.length === 0 ? (
//                 <div className="no-result">No products found</div>
//               ) : (
//                 filteredProducts.map((product) => (
//                   <div
//                     key={product._id}
//                     className="dropdown-item"
//                     onClick={() => {
//                       setSearchTerm("");
//                       setShowDropdown(false);
//                       navigate(`/product/${product._id}`);
//                     }}
//                   >
//                     <img
//                       src={`${BASE_URL}/${product.image}`}
//                       alt={product.name}
//                       className="dropdown-img"
//                     />
//                     <span>{product.name}</span>
//                   </div>
//                 ))
//               )}
//             </div>
//           )}
//         </div>

//         <div className="cart-wrapper">
//           <FaShoppingCart
//             className="cart-icon"
//             onClick={() => navigate("/cart")}
//           />
//           {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
//         </div>
//         {/* Account / User */}
//         <div className="account-wrapper">
//           <div
//             className="account-section"
//             onClick={() => {
//               if (user) {
//                 setAccountDropdown(!accountDropdown); // logged-in → toggle dropdown
//               } else {
//                 navigate("/login"); // not logged-in → go to login
//               }
//             }}
//           >
//             <FaUserCircle className="user-icon" />
//             <span>{user ? user.name : "Login"}</span>

//             {user && accountDropdown && (
//               <div className="account-dropdown">
//                 <p className="dropdown-username">{user.name}</p>
//                 <p className="dropdown-logout" onClick={handleLogout}>Logout</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;




import "./Header.css";
import { toast, ToastContainer } from "react-toastify";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );


  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [paused, setPaused] = useState(false);
  const [accountDropdown, setAccountDropdown] = useState(false);
  // const user = JSON.parse(localStorage.getItem("user")); // logged-in user
  const accountRef = useRef(null);
  const wrapperRef = useRef(null);
  const BASE_URL = "http://localhost:5000";
  // 🔥 SYNC USER FROM LOCALSTORAGE (LOGIN / LOGOUT)
  useEffect(() => {
    const syncUser = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
    };

    // initial sync
    syncUser();

    // listen for updates
    window.addEventListener("userUpdated", syncUser);

    return () => {
      window.removeEventListener("userUpdated", syncUser);
    };
  }, []);

  // ✅ FETCH PRODUCTS FROM BACKEND
  useEffect(() => {
    fetch(`${BASE_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setProducts(data);
        else if (Array.isArray(data.data)) setProducts(data.data);
        else setProducts([]);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setProducts([]);
      });
  }, []);


  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      // ✅ Count unique products (each _id once)
      const uniqueProducts = new Set(cart.map((item) => item._id));
      setCartCount(uniqueProducts.size);
    };

    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);

    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    const handleAccountOutsideClick = (event) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target)
      ) {
        setAccountDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleAccountOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleAccountOutsideClick);
    };
  }, []);

  // Filter products for search
  const filteredProducts = products
    .filter((p) => {
      if (!searchTerm.trim()) return false;
      const term = searchTerm.toLowerCase().trim();
      return (
        p.name?.toLowerCase().includes(term) ||
        p.category?.toLowerCase().includes(term)
      );
    })
    .slice(0, 8);

  // Logout
  const handleLogout = async () => {
    const refreshToken = localStorage.getItem("refreshToken");

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");

    window.dispatchEvent(new Event("userUpdated"));
    setUser(null);

    toast.success("You have successfully logged out!");

    if (refreshToken) {
      try {
        await fetch(`${BASE_URL}/api/auth/logout`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refreshToken }),
        });
      } catch (err) {
        console.error("Backend logout error:", err);
      }
    }

    navigate("/login"); // ✅ only once
  };
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
        </div>

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
            onFocus={() => {
              if (searchTerm.trim()) setShowDropdown(true);
            }}
            onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
          />
          {showDropdown && searchTerm.trim() && (
            <div className="search-dropdown">
              {filteredProducts.length === 0 ? (
                <div className="no-result">No products found</div>
              ) : (
                filteredProducts.map((product) => (
                  <div
                    key={product._id}
                    className="dropdown-item"
                    onClick={() => {
                      setSearchTerm("");
                      setShowDropdown(false);
                      navigate(`/product/${product._id}`);
                    }}
                  >
                    <img
                      src={`${BASE_URL}/${product.image}`}
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

        {/* <div className="cart-wrapper">
          <FaShoppingCart
            className="cart-icon"
            onClick={() => navigate("/cart")}
          />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div> */}<Link to="/cart" className="cart-wrapper">
          <FaShoppingCart className="cart-icon" />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>

        <div className="account-wrapper" ref={accountRef}>
          <div
            className="account-section"
            onClick={() => {
              if (user) setAccountDropdown(!accountDropdown);
              else navigate("/login");
            }}
          >
            <FaUserCircle className="user-icon" />
            <span>{user ? user.name : "Login"}</span>

            {user && accountDropdown && (
              <div className="account-dropdown">
                <p className="dropdown-username">{user.name}</p>

                {/* ✅ ADD THIS LINE HERE */}
                <p
                  className="dropdown-orders"
                  onClick={() => {
                    setAccountDropdown(false);
                    navigate("/orders");
                  }}
                >
                  View Orders
                </p>

                <p className="dropdown-logout" onClick={handleLogout}>
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;