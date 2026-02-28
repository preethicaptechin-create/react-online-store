




// import React from "react";
// import { products } from "../Services/Product";
// import { Link } from "react-router-dom";
// import "./Beauty.css";

// const Beauty = () => {



//   // filter beauty products
//   const beautyProducts = products.filter(
//     product => product.category === "beauty"
//   );

//   // ✅ Add to cart
//    const handleAddToCart = (product) => {

//   const existingCart =
//     JSON.parse(localStorage.getItem("cart")) || [];

//   const item = existingCart.find(
//     i => i.id === product.id
//   );

//   if (item) {
//     item.qty += 1;
//   } else {
//     existingCart.push({ ...product, qty: 1 });
//   }

//   localStorage.setItem(
//     "cart",
//     JSON.stringify(existingCart)
//   );

//   // ⭐ IMPORTANT — sync cart badge everywhere
//   window.dispatchEvent(new Event("cartUpdated"));

//   alert("Item added to cart 🛒");
// };



//   return (
//     <div className="beauty-page">

//       <h1>Beauty Products</h1>

//       <div className="beauty-grid">

//         {beautyProducts.map(product => (

//           <div key={product.id} className="beauty-card">

//             {/* Click image → details page */}
//             <Link to={`/product/${product.id}`}>
//               <img
//                 src={product.image}
//                 alt={product.name}
//               />
//             </Link>

//             <h3>{product.name}</h3>
//             <p>₹ {product.price}</p>

//             {/* ✅ Add to Cart */}
//             <button
//               className="add-btn"
//               onClick={() => handleAddToCart(product)}
//             >
//               Add to Cart
//             </button>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };

// export default Beauty;




// import React, { useState, useEffect } from "react";
// import { products } from "../Services/Product";
// import { Link } from "react-router-dom";
// import "./Beauty.css";

// const Beauty = () => {

//   const [wishlist, setWishlist] = useState([]);
//   const [toast, setToast] = useState(null);

//   // ✅ Filter beauty products
//   const beautyProducts = products.filter(
//     product => product.category?.toLowerCase() === "beauty"
//   );

//   // ✅ Load wishlist on page load
//   useEffect(() => {
//     const storedWishlist =
//       JSON.parse(localStorage.getItem("wishlist")) || [];
//     setWishlist(storedWishlist);
//   }, []);

//   // ✅ Toast function
//   const showToast = (message) => {
//     setToast(message);
//     setTimeout(() => setToast(null), 2500);
//   };

//   // ✅ Wishlist toggle
//   const handleWishlist = (product) => {
//     let updatedWishlist = [...wishlist];

//     const exists = updatedWishlist.find(
//       (item) => item.id === product.id
//     );

//     if (exists) {
//       updatedWishlist = updatedWishlist.filter(
//         (item) => item.id !== product.id
//       );
//       showToast("Removed from wishlist");
//     } else {
//       updatedWishlist.push(product);
//       showToast("Added to wishlist ❤️");
//     }

//     setWishlist(updatedWishlist);
//     localStorage.setItem(
//       "wishlist",
//       JSON.stringify(updatedWishlist)
//     );
//   };

//   // ✅ Add to cart
//   const handleAddToCart = (product) => {

//     let existingCart =
//       JSON.parse(localStorage.getItem("cart")) || [];

//     const item = existingCart.find(
//       i => i.id === product.id
//     );

//     if (item) {
//       item.qty += 1;
//     } else {
//       existingCart.push({ ...product, qty: 1 });
//     }

//     localStorage.setItem(
//       "cart",
//       JSON.stringify(existingCart)
//     );

//     // ✅ Remove from wishlist if exists
//     let updatedWishlist = wishlist.filter(
//       (item) => item.id !== product.id
//     );

//     setWishlist(updatedWishlist);
//     localStorage.setItem(
//       "wishlist",
//       JSON.stringify(updatedWishlist)
//     );

//     // ✅ Update cart badge
//     window.dispatchEvent(new Event("cartUpdated"));

//     showToast("Item added to cart 🛒");
//   };

//   return (
//     <div className="beauty-page">

//       <h1>Beauty Products</h1>

//       <div className="beauty-grid">

//         {beautyProducts.map(product => (

//           <div key={product.id} className="beauty-card">

//             {/* ❤️ Wishlist Button */}
//             <button
//               className={`wishlist-btn ${
//                 wishlist.find((item) => item.id === product.id)
//                   ? "active"
//                   : ""
//               }`}
//               onClick={() => handleWishlist(product)}
//             >
//               {wishlist.find((item) => item.id === product.id)
//                 ? "❤️"
//                 : "🤍"}
//             </button>

//             <Link to={`/product/${product.id}`}>
//               <img
//                 src={product.image}
//                 alt={product.name}
//               />
//             </Link>

//             <h3>{product.name}</h3>
//             <p>₹ {product.price}</p>

//             <button
//               className="add-btn"
//               onClick={() => handleAddToCart(product)}
//             >
//               Add to Cart
//             </button>

//           </div>

//         ))}

//       </div>

//       {/* ✅ Toast Message */}
//       {toast && (
//         <div className="snackbar">
//           {toast}
//         </div>
//       )}

//     </div>
//   );
// };

// export default Beauty;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Beauty.css";

// const BASE_URL = "http://localhost:5000";
// // console.log("IMAGE VALUE:", product.image);

// const Beauty = () => {
//   const [products, setProducts] = useState([]);
//   const [wishlist, setWishlist] = useState([]);
//   const [toast, setToast] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`${BASE_URL}/api/products`)
//       .then(res => res.json())
//       .then(data => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Fetch error:", err);
//         setLoading(false);
//       });

//     const storedWishlist =
//       JSON.parse(localStorage.getItem("wishlist")) || [];
//     setWishlist(storedWishlist);
//   }, []);

//   const showToast = (message) => {
//     setToast(message);
//     setTimeout(() => setToast(null), 2500);
//   };

//   const beautyProducts = products.filter(
//     product =>
//       product.category &&
//       product.category.toLowerCase() === "beauty"
//   );

//   const handleWishlist = (product) => {
//     let updatedWishlist = [...wishlist];

//     const exists = updatedWishlist.find(
//       (item) => item._id === product._id
//     );

//     if (exists) {
//       updatedWishlist = updatedWishlist.filter(
//         (item) => item._id !== product._id
//       );
//       showToast("Removed from wishlist");
//     } else {
//       updatedWishlist.push(product);
//       showToast("Added to wishlist ❤️");
//     }

//     setWishlist(updatedWishlist);
//     localStorage.setItem(
//       "wishlist",
//       JSON.stringify(updatedWishlist)
//     );
//   };

//   const handleAddToCart = (product) => {
//     let existingCart =
//       JSON.parse(localStorage.getItem("cart")) || [];

//     const item = existingCart.find(
//       i => i._id === product._id
//     );

//     if (item) {
//       item.qty += 1;
//     } else {
//       existingCart.push({ ...product, qty: 1 });
//     }

//     localStorage.setItem(
//       "cart",
//       JSON.stringify(existingCart)
//     );

//     window.dispatchEvent(new Event("cartUpdated"));
//     showToast("Item added to cart 🛒");
//   };

//   if (loading) return <h2>Loading...</h2>;

//   return (
//     <div className="beauty-page">
//       <h1>Beauty Products</h1>

//       <div className="beauty-grid">
//         {beautyProducts.map(product => {
//           const isWishlisted = wishlist.find(
//             item => item._id === product._id
//           );

//           return (
//             <div key={product._id} className="beauty-card">
//               <button
//                 className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
//                 onClick={() => handleWishlist(product)}
//               >
//                 {isWishlisted ? "❤️" : "🤍"}
//               </button>

//               <Link to={`/product/${product._id}`}>
//                 <img
//                   src={`${BASE_URL}/${product.image}`}
//                   alt={product.name}
//                 />
//               </Link>

//               <h3>{product.name}</h3>
//               <p>₹ {product.price}</p>

//               <button
//                 className="add-btn"
//                 onClick={() => handleAddToCart(product)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           );
//         })}
//       </div>

//       {toast && (
//         <div className="snackbar">
//           {toast}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Beauty;




// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Beauty.css";

// const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// const Beauty = () => {
//   const [products, setProducts] = useState([]);
//   const [wishlist, setWishlist] = useState([]);
//   const [toast, setToast] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch(`${BASE_URL}/api/products`);
//         const data = await res.json();

//         console.log("API Response:", data);

//         // If backend sends { success: true, data: [...] }
//         if (Array.isArray(data.data)) {
//           setProducts(data.data);
//         } 
//         // If backend sends plain array
//         else if (Array.isArray(data)) {
//           setProducts(data);
//         } 
//         else {
//           console.error("Invalid API format");
//           setProducts([]);
//         }

//         setLoading(false);
//       } catch (err) {
//         console.error("Fetch error:", err);
//         setLoading(false);
//       }
//     };

//     fetchProducts();

//     const storedWishlist =
//       JSON.parse(localStorage.getItem("wishlist")) || [];
//     setWishlist(storedWishlist);
//   }, []);

//   const showToast = (message) => {
//     setToast(message);
//     setTimeout(() => setToast(null), 2500);
//   };

//   // ✅ Safe filter
//   const beautyProducts = products.filter(
//     (product) =>
//       product.category &&
//       product.category.toLowerCase() === "beauty"
//   );

//   const handleWishlist = (product) => {
//     let updatedWishlist = [...wishlist];

//     const exists = updatedWishlist.find(
//       (item) => item._id === product._id
//     );

//     if (exists) {
//       updatedWishlist = updatedWishlist.filter(
//         (item) => item._id !== product._id
//       );
//       showToast("Removed from wishlist");
//     } else {
//       updatedWishlist.push(product);
//       showToast("Added to wishlist ❤️");
//     }

//     setWishlist(updatedWishlist);
//     localStorage.setItem(
//       "wishlist",
//       JSON.stringify(updatedWishlist)
//     );
//   };

//   const handleAddToCart = (product) => {
//     let existingCart =
//       JSON.parse(localStorage.getItem("cart")) || [];

//     const item = existingCart.find(
//       (i) => i._id === product._id
//     );

//     if (item) {
//       item.qty += 1;
//     } else {
//       existingCart.push({ ...product, qty: 1 });
//     }

//     localStorage.setItem(
//       "cart",
//       JSON.stringify(existingCart)
//     );

//     window.dispatchEvent(new Event("cartUpdated"));
//     showToast("Item added to cart 🛒");
//   };

//   if (loading) return <h2>Loading...</h2>;

//   return (
//     <div className="beauty-page">
//       <h1>Beauty Products</h1>

//       <div className="beauty-grid">
//         {beautyProducts.map((product) => {
//           const isWishlisted = wishlist.find(
//             (item) => item._id === product._id
//           );

//           return (
//             <div key={product._id} className="beauty-card">
//               <button
//                 className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
//                 onClick={() => handleWishlist(product)}
//               >
//                 {isWishlisted ? "❤️" : "🤍"}
//               </button>

//               <Link to={`/product/${product._id}`}>
//                 <img
//                   src={`${BASE_URL}/${product.image}`}
//                   alt={product.name}
//                 />
//               </Link>

//               <h3>{product.name}</h3>
//               <p>₹ {product.price}</p>

//               <button
//                 className="add-btn"
//                 onClick={() => handleAddToCart(product)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           );
//         })}
//       </div>

//       {toast && (
//         <div className="snackbar show">
//           {toast}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Beauty;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Beauty.css";

// const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// const Beauty = () => {
//   const [products, setProducts] = useState([]);
//   const [wishlist, setWishlist] = useState([]);
//   const [toast, setToast] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch(`${BASE_URL}/api/products`);
//         if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

//         const data = await res.json();

//         // Handle different possible API response shapes
//         let productList = [];
//         if (Array.isArray(data)) {
//           productList = data;
//         } else if (data?.data && Array.isArray(data.data)) {
//           productList = data.data;
//         } else if (data?.products && Array.isArray(data.products)) {
//           productList = data.products;
//         }

//         setProducts(productList);
//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to fetch products:", err);
//         setProducts([]);
//         setLoading(false);
//       }
//     };

//     fetchProducts();

//     // Load wishlist from localStorage
//     const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     setWishlist(storedWishlist);
//   }, []);

//   const showToast = (message) => {
//     setToast(message);
//     setTimeout(() => setToast(null), 2400);
//   };

//   const beautyProducts = products.filter(
//     (p) => p?.category?.toLowerCase() === "beauty"
//   );

//   const handleWishlist = (product) => {
//     let updated = [...wishlist];
//     const exists = updated.some((item) => item._id === product._id);

//     if (exists) {
//       updated = updated.filter((item) => item._id !== product._id);
//       showToast("Removed from wishlist");
//     } else {
//       updated.push(product);
//       showToast("Added to wishlist ❤️");
//     }

//     setWishlist(updated);
//     localStorage.setItem("wishlist", JSON.stringify(updated));
//   };

//   const handleAddToCart = (product) => {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];

//     const existing = cart.find((i) => i._id === product._id);

//     if (existing) {
//       existing.qty += 1;
//     } else {
//       cart.push({ ...product, qty: 1, size: product.size || "Default" });
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));
//     window.dispatchEvent(new Event("cartUpdated"));
//     showToast("Item added to cart 🛒");
//   };

//   if (loading) return <div className="loading">Loading beauty products...</div>;

//   return (
//     <div className="beauty-page">
//       <h1>Beauty Products</h1>

//       {beautyProducts.length === 0 && !loading && (
//         <p className="no-products">No beauty products found</p>
//       )}

//       <div className="beauty-grid">
//         {beautyProducts.map((product) => {
//           const isWishlisted = wishlist.some((w) => w._id === product._id);

//           return (
//             <div key={product._id} className="beauty-card">
//               <button
//                 className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
//                 onClick={() => handleWishlist(product)}
//                 aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
//               >
//                 {isWishlisted ? "❤️" : "🤍"}
//               </button>

//               <Link to={`/product/${product._id}`} className="product-link">
//                 <img
//                   src={`${BASE_URL}/${product.image?.replace(/^\//, "")}`}
//                   alt={product.name || "Product"}
//                   loading="lazy"
//                 />
//               </Link>

//               <h3 className="product-name">{product.name}</h3>
//               <p className="product-price">₹{product.price?.toLocaleString() || "—"}</p>

//               <button
//                 className="add-btn"
//                 onClick={() => handleAddToCart(product)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           );
//         })}
//       </div>

//       {toast && (
//         <div className="snackbar show">
//           {toast}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Beauty;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Beauty.css";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Beauty = () => {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/products`);
        const data = await res.json();

        if (Array.isArray(data.data)) {
          setProducts(data.data);
        } else {
          setProducts([]);
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    const storedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  // ✅ SAME toast function as Men
  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2500);
  };

  const beautyProducts = products.filter(
    (p) => p?.category?.toLowerCase() === "beauty"
  );

  const handleWishlist = (product) => {
    let updated = [...wishlist];
    const exists = updated.find((item) => item._id === product._id);

    if (exists) {
      updated = updated.filter((item) => item._id !== product._id);
      showToast("Removed from wishlist");
    } else {
      updated.push(product);
      showToast("Added to wishlist ❤️");
    }

    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((i) => i._id === product._id);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...product, qty: 1, size: "Default" });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));

    // ✅ SAME message as Men
    showToast("Item added to cart 🛒");
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="beauty-page">
      <h1>Beauty Products</h1>

      {/* ✅ Toast UI (same as Men) */}
      {toast && (
        <div className={`snackbar snackbar-${toast.type}`}>
          {toast.message}
        </div>
      )}

      <div className="beauty-grid">
        {beautyProducts.length === 0 ? (
          <p>No beauty products found</p>
        ) : (
          beautyProducts.map((product) => {
            const isWishlisted = wishlist.some(
              (w) => w._id === product._id
            );

            return (
              <div key={product._id} className="beauty-card">
                <button
                  className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
                  onClick={() => handleWishlist(product)}
                >
                  {isWishlisted ? "❤️" : "🤍"}
                </button>

                <Link to={`/product/${product._id}`}>
                  <img
                    src={
                      product.image
                        ? product.image.startsWith("http")
                          ? product.image
                          : `${BASE_URL}/uploads/${product.image}`
                        : "https://via.placeholder.com/200x200?text=No+Image"
                    }
                    alt={product.name}
                  />
                </Link>

                <h3>{product.name}</h3>
                <p>₹ {product.price}</p>

                <button
                  className="add-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Beauty;