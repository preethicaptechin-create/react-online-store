

// import React from "react";
// import { products } from "../Services/Product";
// import { Link } from "react-router-dom";
// import "./Mobile.css";

// const Mobile = () => {



//   // filter mobile products
//   const mobileProducts = products.filter(
//     product => product.category === "mobile"
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

//   // ⭐ THIS LINE UPDATES HEADER COUNT
//   window.dispatchEvent(new Event("cartUpdated"));

//   alert("Item added to cart 🛒");
// };



//   return (
//     <div className="mobile-page">

//       <h1>Mobile Collection</h1>

//       <div className="mobile-grid">

//         {mobileProducts.map(product => (

//           <div key={product.id} className="mobile-card">

//             {/* click image → details */}
//             <Link to={`/product/${product.id}`}>
//               <img
//                 src={product.image}
//                 alt={product.name}
//               />
//             </Link>

//             <h3>{product.name}</h3>
//             <p>₹ {product.price}</p>

//             {/* ✅ Add to cart */}
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

// export default Mobile;


// 

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Mobile.css";

// const BASE_URL = "http://localhost:5000";

// const Mobile = () => {

//   const [products, setProducts] = useState([]);
//   const [wishlist, setWishlist] = useState([]);
//   const [toast, setToast] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // ✅ Fetch from backend
//   useEffect(() => {
//     fetch(`${BASE_URL}/api/products`)
//       .then(res => res.json())
//       .then(data => {

//         if (Array.isArray(data.data)) {
//           setProducts(data.data);
//         } else {
//           console.error("API did not return array:", data);
//           setProducts([]);
//         }

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

//   // ✅ Filter mobile products
// const mobileProducts = Array.isArray(products)
//   ? products.filter(
//       (product) =>
//         (product.category || "").toLowerCase() === "mobile"
//     )
//   : [];

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
//     <div className="mobile-page">

//       <h1>Mobile Collection</h1>

//       <div className="mobile-grid">

//         {mobileProducts.map(product => {

//           const isWishlisted = wishlist.find(
//             item => item._id === product._id
//           );

//           return (
//             <div key={product._id} className="mobile-card">

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

// export default Mobile;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Mobile.css";

// const BASE_URL = import.meta.env.VITE_API_URL;

// const Mobile = () => {
//   const [products, setProducts] = useState([]);
//   const [wishlist, setWishlist] = useState([]);
//   const [toast, setToast] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`${BASE_URL}/api/products`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data.data)) {
//           setProducts(data.data);
//         } else {
//           setProducts([]);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Fetch error:", err);
//         setLoading(false);
//       });

//     const storedWishlist =
//       JSON.parse(localStorage.getItem("wishlist")) || [];
//     setWishlist(storedWishlist);
//   }, []);

//   // ✅ SAME toast function
//   const showToast = (message, type = "success") => {
//     setToast({ message, type });
//     setTimeout(() => setToast(null), 2500);
//   };

//   const mobileProducts = Array.isArray(products)
//     ? products.filter(
//         (product) =>
//           (product.category || "").toLowerCase() === "mobile"
//       )
//     : [];

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
//     <div className="mobile-page">
//       <h1>Mobile Collection</h1>

//       {/* ✅ Toast UI */}
//       {toast && (
//         <div className={`snackbar snackbar-${toast.type}`}>
//           {toast.message}
//         </div>
//       )}

//       <div className="mobile-grid">
//         {mobileProducts.map((product) => {
//           const isWishlisted = wishlist.find(
//             (item) => item._id === product._id
//           );

//           return (
//             <div key={product._id} className="mobile-card">
//               <button
//                 className={`wishlist-btn ${
//                   isWishlisted ? "active" : ""
//                 }`}
//                 onClick={() => handleWishlist(product)}
//               >
//                 {isWishlisted ? "❤️" : "🤍"}
//               </button>

//               <Link to={`/product/${product._id}`}>
//                 <img
//                   src={
//                     product.image
//                       ? product.image.startsWith("http")
//                         ? product.image
//                         : `${BASE_URL}/uploads/${product.image}`
//                       : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23e0e0e0' width='200' height='200'/%3E%3C/svg%3E"
//                   }
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
//     </div>
//   );
// };

// export default Mobile;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL, MESSAGES, CURRENCY } from "../utils/config"; // removed CATEGORY
import { PLACEHOLDER_IMAGE } from "../utils/productImage";
import "./Mobile.css";

// ✅ Define CATEGORY locally
const CATEGORY = { mobile: "mobile", men: "men", women: "women", kids: "kids" };

const Mobile = () => {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(Array.isArray(data.data) ? data.data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });

    setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
  }, []);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2500);
  };

  const mobileProducts = products.filter(
    (p) =>
      (p.category || "").toLowerCase() === CATEGORY.mobile
  );

  const handleWishlist = (product) => {
    let updatedWishlist;
    const exists = wishlist.find((i) => i._id === product._id);

    if (exists) {
      updatedWishlist = wishlist.filter((i) => i._id !== product._id);
      showToast(MESSAGES.removedWishlist);
    } else {
      updatedWishlist = [...wishlist, product];
      showToast(MESSAGES.addedWishlist);
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find((i) => i._id === product._id);

    if (item) item.qty += 1;
    else cart.push({ ...product, qty: 1 });

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    showToast(MESSAGES.addedToCart);
  };

  if (loading) return <h2>{MESSAGES.loading}</h2>;

  return (
    <div className="mobile-page">
      <h1>{MESSAGES.mobileCollection}</h1>

      {toast && (
        <div className={`snackbar snackbar-${toast.type}`}>
          {toast.message}
        </div>
      )}

      <div className="mobile-grid">
        {mobileProducts.map((product) => {
          const isWishlisted = wishlist.some(
            (i) => i._id === product._id
          );

          return (
            <div key={product._id} className="mobile-card">
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
                      : PLACEHOLDER_IMAGE
                  }
                  alt={product.name}
                />
              </Link>

              <h3>{product.name}</h3>
              <p>
                {CURRENCY} {product.price}
              </p>

              <button
                className="add-btn"
                onClick={() => handleAddToCart(product)}
              >
                {MESSAGES.addToCart}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mobile;