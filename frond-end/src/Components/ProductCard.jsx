



// import { Link } from "react-router-dom";
// import { useState, useRef } from "react";
// import "./Productcard.css";

// function ProductCard({ product }) {
//   const [size, setSize] = useState(null);
//   const [toast, setToast] = useState(null);
//   const cardRef = useRef(null);


//   // ✅ FIXED toast function
//   const showToast = (message, type = "success") => {
//     setToast({ message, type });
//     setTimeout(() => setToast(null), 2800);
//   };

//   const needsSize = ["men", "women", "kids", "shoes"].includes(
//     product?.category?.toLowerCase?.() || ""
//   );

//   const handleAddToCart = () => {
//     if (needsSize && !size) {
//       showToast("Please select a size", "error");

//       const sizeEl = cardRef.current?.querySelector(".size-selector");
//       if (sizeEl) {
//         sizeEl.scrollIntoView({ behavior: "smooth", block: "center" });
//         sizeEl.classList.add("error-flash");
//         setTimeout(() => sizeEl.classList.remove("error-flash"), 2000);
//       }
//       return;
//     }

//     try {
//       let cart = JSON.parse(localStorage.getItem("cart")) || [];

//       const existingItem = cart.find((i) =>
//         needsSize
//           ? i._id === product._id && i.size === size
//           : i._id === product._id
//       );

//       if (existingItem) {
//         existingItem.qty += 1;
//       } else {
//         cart.push({
//           ...product,
//           size: needsSize ? size : null,
//           qty: 1,
//         });
//       }

//       localStorage.setItem("cart", JSON.stringify(cart));
//       window.dispatchEvent(new Event("cartUpdated"));

//       // ✅ show success toast
//       showToast("Item added to cart");

//     } catch (err) {
//       console.error("Cart update failed:", err);
//       showToast("Something went wrong", "error");
//     }
//   };

//   return (
//     <div ref={cardRef} className="product-card">

//       <Link to={`/product/${product._id}`}>
//         <img
//       src={`http://localhost:5000/${product.image}`}
//           alt={product.name}
//           className="product-image"
//         />
//       </Link>

//       <h3>{product.name}</h3>
//       <p>₹{product.price}</p>

//       {needsSize && (
//         <div className="size-selector">
//           {[6, 7, 8, 9, 10].map((s) => (
//             <button
//               key={s}
//               className={`size-btn ${size === s ? "active" : ""}`}
//               onClick={() => setSize(s)}
//             >
//               {s}
//             </button>
//           ))}
//         </div>
//       )}

//       <button className="add-btn" onClick={handleAddToCart}>
//         Add to Cart
//       </button>

//       {toast && (
//         <div className="snackbar">
//           {toast.message}
//         </div>
//       )}

//     </div>
//   );
// }

// export default ProductCard;








// import { Link } from "react-router-dom";
// import { useState, useRef, useEffect } from "react";
// import "./Productcard.css";

// function ProductCard({ product }) {
//   const [size, setSize] = useState(null);
//   const [toast, setToast] = useState(null);
//   const [liked, setLiked] = useState(false);
//   const cardRef = useRef(null);

//   // ✅ Check if already in wishlist when component loads
//   useEffect(() => {
//     const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     const exists = wishlist.find((item) => item._id === product._id);
//     if (exists) setLiked(true);
//   }, [product._id]);

//   // ✅ Toast
//   const showToast = (message, type = "success") => {
//     setToast({ message, type });
//     setTimeout(() => setToast(null), 2800);
//   };

//   const needsSize = ["men", "women", "kids", "shoes"].includes(
//     product?.category?.toLowerCase?.() || ""
//   );

//   // ✅ Wishlist function (OUTSIDE addToCart)
//   const handleWishlist = () => {
//     let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

//     const exists = wishlist.find((item) => item._id === product._id);

//     if (exists) {
//       wishlist = wishlist.filter((item) => item._id !== product._id);
//       setLiked(false);
//       showToast("Removed from wishlist");
//     } else {
//       wishlist.push(product);
//       setLiked(true);
//       showToast("Added to wishlist ❤️");
//     }

//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   };

//   // ✅ Add To Cart
//   const handleAddToCart = () => {
//     if (needsSize && !size) {
//       showToast("Please select a size", "error");

//       const sizeEl = cardRef.current?.querySelector(".size-selector");
//       if (sizeEl) {
//         sizeEl.scrollIntoView({ behavior: "smooth", block: "center" });
//         sizeEl.classList.add("error-flash");
//         setTimeout(() => sizeEl.classList.remove("error-flash"), 2000);
//       }
//       return;
//     }

//     try {
//       let cart = JSON.parse(localStorage.getItem("cart")) || [];

//       const existingItem = cart.find((i) =>
//         needsSize
//           ? i._id === product._id && i.size === size
//           : i._id === product._id
//       );

//       if (existingItem) {
//         existingItem.qty += 1;
//       } else {
//         cart.push({
//           ...product,
//           size: needsSize ? size : null,
//           qty: 1,
//         });
//       }

//       localStorage.setItem("cart", JSON.stringify(cart));
//       window.dispatchEvent(new Event("cartUpdated"));
//       showToast("Item added to cart");

//     } catch (err) {
//       console.error("Cart update failed:", err);
//       showToast("Something went wrong", "error");
//     }
//   };

//   return (
//     <div ref={cardRef} className="product-card">

//       {/* ❤️ Wishlist Button */}
//       <button className="wishlist-btn" onClick={handleWishlist}>
//         {liked ? "❤️" : "🤍"}
//       </button>

//       <Link to={`/product/${product._id}`}>
//         <img
//           src={`http://localhost:5000/${product.image}`}
//           alt={product.name}
//           className="product-image"
//         />
//       </Link>
// ,
//       <h3>{product.name}</h3>
//       <p>₹{product.price}</p>

//       {needsSize && (
//         <div className="size-selector">
//           {[6, 7, 8, 9, 10].map((s) => (
//             <button
//               key={s}
//               className={`size-btn ${size === s ? "active" : ""}`}
//               onClick={() => setSize(s)}
//             >
//               {s}
//             </button>
//           ))}
//         </div>
//       )}

//       <button className="add-btn" onClick={handleAddToCart}>
//         Add to Cart
//       </button>

//       {toast && (
//         <div className="snackbar">
//           {toast.message}
//         </div>
//       )}

//     </div>
//   );
// }

// export default ProductCard;







// import { Link } from "react-router-dom";
// import { useState, useRef, useEffect } from "react";
// import "./Productcard.css";

// function ProductCard({ product, sizeOptions }) {
//   const [size, setSize] = useState(null);
//   const [toast, setToast] = useState(null);
//   const [liked, setLiked] = useState(false);
//   const cardRef = useRef(null);

//   const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

//   // ✅ Check if already in wishlist
//   useEffect(() => {
//     const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     const exists = wishlist.find((item) => item._id === product._id);
//     if (exists) setLiked(true);
//   }, [product._id]);

//   const showToast = (message, type = "success") => {
//     setToast({ message, type });
//     setTimeout(() => setToast(null), 2800);
//   };

//   const needsSize = ["men", "women", "kids", "shoes"].includes(
//     product?.category?.toLowerCase?.() || ""
//   );

//   // ✅ Wishlist function
//   const handleWishlist = () => {
//     let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

//     const exists = wishlist.find((item) => item._id === product._id);

//     if (exists) {
//       wishlist = wishlist.filter((item) => item._id !== product._id);
//       setLiked(false);
//       showToast("Removed from wishlist");
//     } else {
//       wishlist.push(product);
//       setLiked(true);
//       showToast("Added to wishlist ❤️");
//     }

//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//     window.dispatchEvent(new Event("wishlistUpdated"));
//   };

//   // ✅ Add To Cart
//   const handleAddToCart = () => {
//     if (needsSize && !size) {
//       showToast("Please select a size", "error");

//       const sizeEl = cardRef.current?.querySelector(".size-selector");
//       if (sizeEl) {
//         sizeEl.scrollIntoView({ behavior: "smooth", block: "center" });
//         sizeEl.classList.add("error-flash");
//         setTimeout(() => sizeEl.classList.remove("error-flash"), 2000);
//       }
//       return;
//     }

//     try {
//       let cart = JSON.parse(localStorage.getItem("cart")) || [];

//       const existingItem = cart.find((i) =>
//         needsSize ? i._id === product._id && i.size === size : i._id === product._id
//       );

//       if (existingItem) {
//         existingItem.qty += 1;
//       } else {
//         cart.push({
//           ...product,
//           size: needsSize ? size : null,
//           qty: 1,
//         });
//       }

//       localStorage.setItem("cart", JSON.stringify(cart));
//       window.dispatchEvent(new Event("cartUpdated"));
//       showToast("Item added to cart");

//     } catch (err) {
//       console.error("Cart update failed:", err);
//       showToast("Something went wrong", "error");
//     }
//   };

//   return (
//     <div ref={cardRef} className="product-card">
//       {/* ✅ Wishlist button */}
//       <button
//         className={`wishlist-btn ${liked ? "active" : ""}`}
//         onClick={handleWishlist}
//       >
//         {liked ? "❤️" : "🤍"}
//       </button>

//       <Link to={`/product/${product._id}`}>
//         <img
//           src={`${BASE_URL}/${product.image}`}
//           alt={product.name}
//           className="product-image"
//         />
//       </Link>

//       <h3>{product.name}</h3>
//       <p>₹{product.price}</p>

//       {needsSize && (
//         <div className="size-selector">
//           {(sizeOptions || [6, 7, 8, 9, 10]).map((s) => (
//             <button
//               key={s}
//               className={`size-btn ${size === s ? "active" : ""}`}
//               onClick={() => setSize(s)}
//             >
//               {s}
//             </button>
//           ))}
//         </div>
//       )}

//       <button className="add-btn" onClick={handleAddToCart}>
//         Add to Cart
//       </button>

//       {toast && (
//         <div className="snackbar">
//           {toast.message}
//         </div>
//       )}

//     </div>
//   );
// }

// export default ProductCard;






// import { Link } from "react-router-dom";
// import { useState, useRef, useEffect } from "react";
// import "./Productcard.css";

// function ProductCard({ product, sizeOptions }) {
//   const [size, setSize] = useState(null);
//   const [toast, setToast] = useState(null);
//   const [wishlist, setWishlist] = useState([]);
//   const cardRef = useRef(null);

//   const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

//   // ✅ Check if already in wishlist
//   useEffect(() => {
//     const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     const exists = wishlist.find((item) => item._id === product._id);
//     if (exists) setLiked(true);
//   }, [product._id]);

//   const showToast = (message, type = "success") => {
//     setToast({ message, type });
//     setTimeout(() => setToast(null), 2800);
//   };

//   const needsSize = ["men", "women", "kids", "shoes"].includes(
//     product?.category?.toLowerCase?.() || ""
//   );

//   // ✅ Wishlist function
//   // const handleWishlist = () => {
//   //   let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

//   //   const exists = wishlist.find((item) => item._id === product._id);

//   //   if (exists) {
//   //     wishlist = wishlist.filter((item) => item._id !== product._id);
//   //     setLiked(false);
//   //     showToast("Removed from wishlist");
//   //   } else {
//   //     wishlist.push(product);
//   //     setLiked(true);
//   //     showToast("Added to wishlist ❤️");
//   //   }

//   //   localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   //   window.dispatchEvent(new Event("wishlistUpdated"));
//   // };
//   const handleWishlist = (product) => {
//     const exists = wishlist.find(
//       item => item._id === product._id
//     );

//     let updatedWishlist;

//     if (exists) {
//       updatedWishlist = wishlist.filter(
//         item => item._id !== product._id
//       );
//       showToast("Removed from wishlist", "error");
//     } else {
//       updatedWishlist = [...wishlist, product];
//       showToast("Added to wishlist ❤️", "success");
//     }

//     setWishlist(updatedWishlist);
//     localStorage.setItem(
//       "wishlist",
//       JSON.stringify(updatedWishlist)
//     );

//     window.dispatchEvent(new Event("wishlistUpdated"));
//   };

//   // ✅ Add To Cart
//   const handleAddToCart = () => {
//     if (needsSize && !size) {
//       showToast("Please select a size", "error");

//       const sizeEl = cardRef.current?.querySelector(".size-selector");
//       if (sizeEl) {
//         sizeEl.scrollIntoView({ behavior: "smooth", block: "center" });
//         sizeEl.classList.add("error-flash");
//         setTimeout(() => sizeEl.classList.remove("error-flash"), 2000);
//       }
//       return;
//     }

//     try {
//       let cart = JSON.parse(localStorage.getItem("cart")) || [];

//       const existingItem = cart.find((i) =>
//         needsSize ? i._id === product._id && i.size === size : i._id === product._id
//       );

//       if (existingItem) {
//         existingItem.qty += 1;
//       } else {
//         cart.push({
//           ...product,
//           size: needsSize ? size : null,
//           qty: 1,
//         });
//       }

//       localStorage.setItem("cart", JSON.stringify(cart));
//       window.dispatchEvent(new Event("cartUpdated"));
//       showToast("Item added to cart");

//     } catch (err) {
//       console.error("Cart update failed:", err);
//       showToast("Something went wrong", "error");
//     }
//   };

//   return (
//     <div ref={cardRef} className="product-card">
//       {/* Wishlist button — always rendered */}
//       <button
//         className={`wishlist-btn ${isLiked ? "active" : ""}`}
//         onClick={() => handleWishlist(product)}
//       >
//         {isLiked ? "❤️" : "🤍"}
//       </button>
//       <Link to={`/product/${product._id}`}>
//         <img
//           src={`${BASE_URL}/${product.image}`}
//           alt={product.name}
//           className="product-image"
//         />
//       </Link>

//       <h3>{product.name}</h3>
//       <p>₹{product.price}</p>

//       {needsSize && (
//         <div className="size-selector">
//           {(sizeOptions || [6, 7, 8, 9, 10]).map((s) => (
//             <button
//               key={s}
//               className={`size-btn ${size === s ? "active" : ""}`}
//               onClick={() => setSize(s)}
//             >
//               {s}
//             </button>
//           ))}
//         </div>
//       )}

//       <button className="add-btn" onClick={handleAddToCart}>
//         Add to Cart
//       </button>



//       {toast && (
//         <div className="snackbar">
//           {toast.message}
//         </div>
//       )}

//     </div>
//   );
// }

// export default ProductCard;



// import React, { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Productcard.css";

// function ProductCard({ product, sizeOptions }) {
//   const [size, setSize] = useState(null);
//   const [toast, setToast] = useState(null);
//   const [wishlist, setWishlist] = useState([]);
//   const cardRef = useRef(null);

//   const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

//   // ✅ Load wishlist from localStorage
//   useEffect(() => {
//     const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     setWishlist(storedWishlist);
//   }, []);

//   // ✅ Show toast messages
//   const showToast = (message, type = "success") => {
//     setToast({ message, type });
//     setTimeout(() => setToast(null), 2800);
//   };

//   const needsSize = ["men", "women", "kids", "shoes"].includes(
//     product?.category?.toLowerCase?.() || ""
//   );

//   // ✅ Wishlist toggle
//   const handleWishlist = () => {
//     const exists = wishlist.find(item => item._id === product._id);
//     let updatedWishlist;

//     if (exists) {
//       updatedWishlist = wishlist.filter(item => item._id !== product._id);
//       showToast("Removed from wishlist", "error");
//     } else {
//       updatedWishlist = [...wishlist, product];
//       showToast("Added to wishlist ❤️", "success");
//     }

//     setWishlist(updatedWishlist);
//     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
//     window.dispatchEvent(new Event("wishlistUpdated"));
//   };

//   const isLiked = wishlist.some(item => item._id === product._id);

//   // ✅ Add to cart
//   const handleAddToCart = () => {
//     if (needsSize && !size) {
//       showToast("Please select a size", "error");
//       const sizeEl = cardRef.current?.querySelector(".size-selector");
//       if (sizeEl) {
//         sizeEl.scrollIntoView({ behavior: "smooth", block: "center" });
//         sizeEl.classList.add("error-flash");
//         setTimeout(() => sizeEl.classList.remove("error-flash"), 2000);
//       }
//       return;
//     }

//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const existingItem = cart.find(i =>
//       needsSize ? i._id === product._id && i.size === size : i._id === product._id
//     );

//     if (existingItem) existingItem.qty += 1;
//     else cart.push({ ...product, size: needsSize ? size : null, qty: 1 });

//     localStorage.setItem("cart", JSON.stringify(cart));
//     window.dispatchEvent(new Event("cartUpdated"));
//     showToast("Item added to cart", "success");
//   };

//   return (
//     <div ref={cardRef} className="product-card">
//       <button
//         className={`wishlist-btn ${isLiked ? "active" : ""}`}
//         onClick={handleWishlist}
//       >
//         {isLiked ? "❤️" : "🤍"}
//       </button>

//       <Link to={`/product/${product._id}`}>
//         <img src={`${BASE_URL}/${product.image}`} alt={product.name} className="product-image" />
//       </Link>

//       <h3>{product.name}</h3>
//       <p>₹{product.price}</p>

//       {needsSize && (
//         <div className="size-selector">
//           {(sizeOptions || [6,7,8,9,10]).map(s => (
//             <button
//               key={s}
//               className={`size-btn ${size === s ? "active" : ""}`}
//               onClick={() => setSize(s)}
//             >
//               {s}
//             </button>
//           ))}
//         </div>
//       )}

//       <button className="add-btn" onClick={handleAddToCart}>
//         Add to Cart
//       </button>

//       {toast && (
//         <div className={`snackbar snackbar-${toast.type}`}>
//           {toast.message}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductCard;



// import React, { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Productcard.css";

// function ProductCard({ product, sizeOptions }) {
//   const [size, setSize] = useState(null);
//   const [toast, setToast] = useState(null);
//   const [wishlist, setWishlist] = useState([]);
//   const cardRef = useRef(null);

//   const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

//   // ✅ Load wishlist from localStorage
//   useEffect(() => {
//     const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     setWishlist(storedWishlist);
//   }, []);

//   // ✅ Toast helper
//   const showToast = (message, type = "success") => {
//     setToast({ message, type });
//     setTimeout(() => setToast(null), 2800);
//   };

//   const needsSize = ["men", "women", "kids", "shoes"].includes(
//     product?.category?.toLowerCase?.() || ""
//   );

//   // ✅ Wishlist toggle
//   const handleWishlist = () => {
//     const exists = wishlist.find(item => item._id === product._id);
//     let updatedWishlist;

//     if (exists) {
//       updatedWishlist = wishlist.filter(item => item._id !== product._id);
//       showToast("Removed from wishlist", "error");
//     } else {
//       updatedWishlist = [...wishlist, product];
//       showToast("Added to wishlist ❤️", "success");
//     }

//     setWishlist(updatedWishlist);
//     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
//     window.dispatchEvent(new Event("wishlistUpdated"));
//   };

//   // ✅ Check if current product is wishlisted
//   const isLiked = wishlist.some(item => item._id === product._id);

//   // ✅ Add to cart
//   const handleAddToCart = () => {
//     if (needsSize && !size) {
//       showToast("Please select a size", "error");
//       const sizeEl = cardRef.current?.querySelector(".size-selector");
//       if (sizeEl) {
//         sizeEl.scrollIntoView({ behavior: "smooth", block: "center" });
//         sizeEl.classList.add("error-flash");
//         setTimeout(() => sizeEl.classList.remove("error-flash"), 2000);
//       }
//       return;
//     }

//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const existingItem = cart.find(i =>
//       needsSize ? i._id === product._id && i.size === size : i._id === product._id
//     );

//     if (existingItem) existingItem.qty += 1;
//     else cart.push({ ...product, size: needsSize ? size : null, qty: 1 });

//     localStorage.setItem("cart", JSON.stringify(cart));
//     window.dispatchEvent(new Event("cartUpdated"));
//     showToast("Item added to cart", "success");
//   };

//   return (
//     <div ref={cardRef} className="product-card">
//       {/* ===== Wishlist button ===== */}
//       <button
//         className={`wishlist-btn ${isLiked ? "active" : ""}`}
//         onClick={handleWishlist}
//       >
//         {isLiked ? "❤️" : "🤍"}
//       </button>

//       {/* ===== Product image ===== */}
//       <Link to={`/product/${product._id}`}>
//         <img
//           src={`${BASE_URL}/${product.image}`}
//           alt={product.name}
//           className="product-image"
//         />
//       </Link>

//       {/* ===== Product info ===== */}
//       <h3>{product.name}</h3>
//       <p>₹{product.price}</p>

//       {/* ===== Size selector ===== */}
//       {needsSize && (
//         <div className="size-selector">
//           {(sizeOptions || [6, 7, 8, 9, 10]).map(s => (
//             <button
//               key={s}
//               className={`size-btn ${size === s ? "active" : ""}`}
//               onClick={() => setSize(s)}
//             >
//               {s}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* ===== Add to Cart ===== */}
//       <button className="add-btn" onClick={handleAddToCart}>
//         Add to Cart
//       </button>

//       {/* ===== Toast / Snackbar ===== */}
//       {toast && (
//         <div className={`snackbar snackbar-${toast.type}`}>
//           {toast.message}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductCard;

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Productcard.css";

function ProductCard({ product, sizeOptions }) {
  const [size, setSize] = useState(null);
  const [toast, setToast] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const cardRef = useRef(null);

  const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const loadWishlist = () => {
      const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlist(stored);
    };

    loadWishlist();
    window.addEventListener("wishlistUpdated", loadWishlist);

    return () => {
      window.removeEventListener("wishlistUpdated", loadWishlist);
    };
  }, []);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2800);
  };

  const needsSize = ["men", "women", "kids", "shoes"].includes(
    product?.category?.toLowerCase?.() || ""
  );

  const handleWishlist = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const currentWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = currentWishlist.some((item) => item._id === product._id);

    let updatedWishlist;
    if (exists) {
      updatedWishlist = currentWishlist.filter((item) => item._id !== product._id);
      showToast("Removed from wishlist", "error");
    } else {
      updatedWishlist = [...currentWishlist, product];
      showToast("Added to wishlist ❤️", "success");
    }

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  // ─── THIS LINE WAS MISSING ────────────────────────────────
  const isLiked = wishlist.some((item) => item._id === product._id);
  // ───────────────────────────────────────────────────────────

  const handleAddToCart = () => {
    if (needsSize && !size) {
      showToast("Please select a size", "error");
      const sizeEl = cardRef.current?.querySelector(".size-selector");
      if (sizeEl) {
        sizeEl.scrollIntoView({ behavior: "smooth", block: "center" });
        sizeEl.classList.add("error-flash");
        setTimeout(() => sizeEl.classList.remove("error-flash"), 2000);
      }
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((i) =>
      needsSize ? i._id === product._id && i.size === size : i._id === product._id
    );

    if (existingItem) {
      existingItem.qty += 1;
    } else {
      cart.push({ ...product, size: needsSize ? size : null, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    showToast("Item added to cart", "success");
  };

  return (
    <div ref={cardRef} className="product-card">
      <div className="image-wrap">
  <button
    className={`wishlist-btn ${isLiked ? "active" : ""}`}
    onClick={handleWishlist}
    type="button"
  >
    {isLiked ? "❤️" : "🤍"}
  </button>

  <Link to={`/product/${product._id}`} className="product-image-link">
    <img
      src={`${BASE_URL}/${product.image}`}
      alt={product.name}
      className="product-image"
      draggable={false}
    />
  </Link>
</div>

      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      {needsSize && (
        <div className="size-selector">
          {(sizeOptions || [6, 7, 8, 9, 10]).map((s) => (
            <button
              key={s}
              className={`size-btn ${size === s ? "active" : ""}`}
              onClick={() => setSize(s)}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <button className="add-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>

      {toast && (
        <div className={`snackbar snackbar-${toast.type}`}>
          {toast.message}
        </div>
      )}
    </div>
  );
}

export default ProductCard;