


// import React, { useState } from "react";
// import { products } from "../Services/Product";
// import { Link } from "react-router-dom";
// import "./Kids.css";

// const Kids = () => {

//   // store selected sizes per product
//   const [sizes, setSizes] = useState({});

//   // ✅ toast state (added)
//   const [toast, setToast] = useState(null);

//   // ✅ toast helper (added)
//   const showToast = (message, type = "success") => {
//     setToast(null);
//     setTimeout(() => setToast({ message, type }), 100);
//     setTimeout(() => setToast(null), 2800);
//   };

//   // filter kids products
//   const kidsProducts = products.filter(
//     product => product.category === "kids"
//   );

//   // select size
//   const handleSizeSelect = (productId, size) => {
//     setSizes(prev => ({
//       ...prev,
//       [productId]: size
//     }));
//   };

//   // add to cart
//   const handleAddToCart = (product) => {

//   const selectedSize = sizes[product.id];

//   if (!selectedSize) {
//     showToast("Please select size", "error");
//     return;
//   }

//   const existingCart =
//     JSON.parse(localStorage.getItem("cart")) || [];

//   const item = existingCart.find(
//     i =>
//       i.id === product.id &&
//       i.size === selectedSize
//   );

//   if (item) {
//     item.qty += 1;
//   } else {
//     existingCart.push({
//       ...product,
//       size: selectedSize,
//       qty: 1
//     });
//   }

//   localStorage.setItem(
//     "cart",
//     JSON.stringify(existingCart)
//   );

//   // ⭐ sync header/cart badge
//   window.dispatchEvent(new Event("cartUpdated"));

//   showToast("Item added to cart ✓", "success");
// };


//   return (
//     <div className="kids-page">

//       {/* ✅ toast display (added) */}
//       {toast && (
//         <div className={`snackbar snackbar-${toast.type}`}>
//           {toast.message}
//         </div>
//       )}

//       <h1>Kids Collection</h1>

//       <div className="kids-grid">

//         {kidsProducts.map(product => {

//           const selectedSize = sizes[product.id];

//           return (

//             <div key={product.id} className="kids-card">

//               <Link to={`/product/${product.id}`}>
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                 />
//               </Link>

//               <h3>{product.name}</h3>
//               <p>₹ {product.price}</p>

//               {selectedSize && (
//                 <p className="selected-size">
//                   Size: {selectedSize}
//                 </p>
//               )}

//               <div className="size-preview">
//                 {[6, 7, 8, 9, 10].map(s => (
//                   <button
//                     key={s}
//                     className={
//                       selectedSize === s
//                         ? "size-box active"
//                         : "size-box"
//                     }
//                     onClick={() =>
//                       handleSizeSelect(product.id, s)
//                     }
//                   >
//                     {s}
//                   </button>
//                 ))}
//               </div>

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

// export default Kids;



// import React, { useState, useEffect } from "react";
// import { products } from "../Services/Product";
// import { Link } from "react-router-dom";
// import "./Kids.css";

// const Kids = () => {

//   const [sizes, setSizes] = useState({});
//   const [toast, setToast] = useState(null);
//   const [wishlist, setWishlist] = useState([]);

//   // ✅ Load wishlist on page load
//   useEffect(() => {
//     const storedWishlist =
//       JSON.parse(localStorage.getItem("wishlist")) || [];
//     setWishlist(storedWishlist);
//   }, []);

//   // ✅ Toast helper
//   const showToast = (message, type = "success") => {
//     setToast(null);
//     setTimeout(() => setToast({ message, type }), 100);
//     setTimeout(() => setToast(null), 2800);
//   };

//   // filter kids products
//   const kidsProducts = products.filter(
//     product => product.category?.toLowerCase() === "kids"
//   );

//   // select size
//   const handleSizeSelect = (productId, size) => {
//     setSizes(prev => ({
//       ...prev,
//       [productId]: size
//     }));
//   };

//   // ✅ Wishlist toggle
//   const handleWishlist = (product) => {

//     let updatedWishlist = [...wishlist];

//     const exists = updatedWishlist.find(
//       item => item.id === product.id
//     );

//     if (exists) {
//       updatedWishlist = updatedWishlist.filter(
//         item => item.id !== product.id
//       );
//       showToast("Removed from wishlist", "success");
//     } else {
//       updatedWishlist.push(product);
//       showToast("Added to wishlist ❤️", "success");
//     }

//     setWishlist(updatedWishlist);
//     localStorage.setItem(
//       "wishlist",
//       JSON.stringify(updatedWishlist)
//     );
//   };

//   // ✅ Add to cart
//   const handleAddToCart = (product) => {

//     const selectedSize = sizes[product.id];

//     if (!selectedSize) {
//       showToast("Please select size", "error");
//       return;
//     }

//     let existingCart =
//       JSON.parse(localStorage.getItem("cart")) || [];

//     const item = existingCart.find(
//       i =>
//         i.id === product.id &&
//         i.size === selectedSize
//     );

//     if (item) {
//       item.qty += 1;
//     } else {
//       existingCart.push({
//         ...product,
//         size: selectedSize,
//         qty: 1
//       });
//     }

//     localStorage.setItem(
//       "cart",
//       JSON.stringify(existingCart)
//     );

//     // ✅ Remove from wishlist when added to cart
//     let updatedWishlist = wishlist.filter(
//       item => item.id !== product.id
//     );

//     setWishlist(updatedWishlist);
//     localStorage.setItem(
//       "wishlist",
//       JSON.stringify(updatedWishlist)
//     );

//     // sync header badge
//     window.dispatchEvent(new Event("cartUpdated"));

//     showToast("Item added to cart ✓", "success");
//   };

//   return (
//     <div className="kids-page">

//       {toast && (
//         <div className={`snackbar snackbar-${toast.type}`}>
//           {toast.message}
//         </div>
//       )}

//       <h1>Kids Collection</h1>

//       <div className="kids-grid">

//         {kidsProducts.map(product => {

//           const selectedSize = sizes[product.id];
//           const isLiked = wishlist.find(
//             item => item.id === product.id
//           );

//           return (

//             <div key={product.id} className="kids-card">

//               {/* ❤️ Wishlist Button */}
//               <button
//                 className={`wishlist-btn ${
//                   isLiked ? "active" : ""
//                 }`}
//                 onClick={() => handleWishlist(product)}
//               >
//                 {isLiked ? "❤️" : "🤍"}
//               </button>

//               <Link to={`/product/${product.id}`}>
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                 />
//               </Link>

//               <h3>{product.name}</h3>
//               <p>₹ {product.price}</p>

//               {selectedSize && (
//                 <p className="selected-size">
//                   Size: {selectedSize}
//                 </p>
//               )}

//               <div className="size-preview">
//                 {[6, 7, 8, 9, 10].map(s => (
//                   <button
//                     key={s}
//                     className={
//                       selectedSize === s
//                         ? "size-box active"
//                         : "size-box"
//                     }
//                     onClick={() =>
//                       handleSizeSelect(product.id, s)
//                     }
//                   >
//                     {s}
//                   </button>
//                 ))}
//               </div>

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

// export default Kids;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Kids.css";

// const BASE_URL = "http://localhost:5000";

// const Kids = () => {

//   const [products, setProducts] = useState([]);
//   const [sizes, setSizes] = useState({});
//   const [toast, setToast] = useState(null);
//   const [wishlist, setWishlist] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ✅ Fetch products from backend
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

//   const showToast = (message, type = "success") => {
//     setToast(null);
//     setTimeout(() => setToast({ message, type }), 100);
//     setTimeout(() => setToast(null), 2800);
//   };

//   // ✅ Filter kids category
//   // const kidsProducts = products.filter(
//   //   product =>
//   //     product.category &&
//   //     product.category.toLowerCase() === "kids"
//   // );

//   const kidsProducts = Array.isArray(products)
//   ? products.filter(
//       (product) =>
//         (product.category || "").toLowerCase() === "kids"
//     )
//   : [];

//   const handleSizeSelect = (productId, size) => {
//     setSizes(prev => ({
//       ...prev,
//       [productId]: size
//     }));
//   };

//   const handleWishlist = (product) => {

//     let updatedWishlist = [...wishlist];

//     const exists = updatedWishlist.find(
//       item => item._id === product._id
//     );

//     if (exists) {
//       updatedWishlist = updatedWishlist.filter(
//         item => item._id !== product._id
//       );
//       showToast("Removed from wishlist", "success");
//     } else {
//       updatedWishlist.push(product);
//       showToast("Added to wishlist ❤️", "success");
//     }

//     setWishlist(updatedWishlist);
//     localStorage.setItem(
//       "wishlist",
//       JSON.stringify(updatedWishlist)
//     );
//   };

//   const handleAddToCart = (product) => {

//     const selectedSize = sizes[product._id];

//     if (!selectedSize) {
//       showToast("Please select size", "error");
//       return;
//     }

//     let existingCart =
//       JSON.parse(localStorage.getItem("cart")) || [];

//     const item = existingCart.find(
//       i =>
//         i._id === product._id &&
//         i.size === selectedSize
//     );

//     if (item) {
//       item.qty += 1;
//     } else {
//       existingCart.push({
//         ...product,
//         size: selectedSize,
//         qty: 1
//       });
//     }

//     localStorage.setItem(
//       "cart",
//       JSON.stringify(existingCart)
//     );

//     // remove from wishlist when added to cart
//     let updatedWishlist = wishlist.filter(
//       item => item._id !== product._id
//     );

//     setWishlist(updatedWishlist);
//     localStorage.setItem(
//       "wishlist",
//       JSON.stringify(updatedWishlist)
//     );

//     window.dispatchEvent(new Event("cartUpdated"));

//     showToast("Item added to cart ✓", "success");
//   };

//   if (loading) return <h2>Loading...</h2>;

//   return (
//     <div className="kids-page">

//       {toast && (
//         <div className={`snackbar snackbar-${toast.type}`}>
//           {toast.message}
//         </div>
//       )}

//       <h1>Kids Collection</h1>

//       <div className="kids-grid">

//         {kidsProducts.map(product => {

//           const selectedSize = sizes[product._id];
//           const isLiked = wishlist.find(
//             item => item._id === product._id
//           );

//           return (

//             <div key={product._id} className="kids-card">

//               <button
//                 className={`wishlist-btn ${isLiked ? "active" : ""}`}
//                 onClick={() => handleWishlist(product)}
//               >
//                 {isLiked ? "❤️" : "🤍"}
//               </button>

//               <Link to={`/product/${product._id}`}>
//                 <img
//                   src={`${BASE_URL}/${product.image}`}
//                   alt={product.name}
//                 />
//               </Link>

//               <h3>{product.name}</h3>
//               <p>₹ {product.price}</p>

//               {selectedSize && (
//                 <p className="selected-size">
//                   Size: {selectedSize}
//                 </p>
//               )}

//               <div className="size-preview">
//                 {[6, 7, 8, 9, 10].map(s => (
//                   <button
//                     key={s}
//                     className={
//                       selectedSize === s
//                         ? "size-box active"
//                         : "size-box"
//                     }
//                     onClick={() =>
//                       handleSizeSelect(product._id, s)
//                     }
//                   >
//                     {s}
//                   </button>
//                 ))}
//               </div>

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

// export default Kids;






// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Kids.css";

// const BASE_URL = "http://localhost:5000";

// const Kids = () => {
//   const [products, setProducts] = useState([]);
//   const [sizes, setSizes] = useState({});
//   const [toast, setToast] = useState(null);
//   const [wishlist, setWishlist] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ✅ Fetch products from backend
//   useEffect(() => {
//     fetch(`${BASE_URL}/api/products`)
//       .then(res => res.json())
//       .then(data => {
//         console.log("Kids API Response:", data);

//         if (data.success) {
//           setProducts(data.data);   // ⭐ FIXED HERE
//         } else {
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

//   const showToast = (message, type = "success") => {
//     setToast(null);
//     setTimeout(() => setToast({ message, type }), 100);
//     setTimeout(() => setToast(null), 2800);
//   };

//   // ✅ Filter kids category safely
//   const kidsProducts = Array.isArray(products)
//     ? products.filter(
//         (product) =>
//           (product.category || "").toLowerCase().trim() === "kids"
//       )
//     : [];

//   const handleSizeSelect = (productId, size) => {
//     setSizes(prev => ({
//       ...prev,
//       [productId]: size
//     }));
//   };

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

//   const handleAddToCart = (product) => {
//     const selectedSize = sizes[product._id];

//     if (!selectedSize) {
//       showToast("Please select size", "error");
//       return;
//     }

//     const existingCart =
//       JSON.parse(localStorage.getItem("cart")) || [];

//     const item = existingCart.find(
//       i =>
//         i._id === product._id &&
//         i.size === selectedSize
//     );

//     if (item) {
//       item.qty += 1;
//     } else {
//       existingCart.push({
//         ...product,
//         size: selectedSize,
//         qty: 1
//       });
//     }

//     localStorage.setItem(
//       "cart",
//       JSON.stringify(existingCart)
//     );

//     window.dispatchEvent(new Event("cartUpdated"));
//     showToast("Item added to cart ✓", "success");
//   };

//   if (loading) return <h2>Loading...</h2>;

//   return (
//     <div className="kids-page">

//       {toast && (
//         <div className={`snackbar snackbar-${toast.type}`}>
//           {toast.message}
//         </div>
//       )}

//       <h1>Kids Collection</h1>

//       {kidsProducts.length === 0 ? (
//         <h3>No Kids products found</h3>
//       ) : (
//         <div className="kids-grid">
//           {kidsProducts.map(product => {

//             const selectedSize = sizes[product._id];
//             const isLiked = wishlist.find(
//               item => item._id === product._id
//             );

//             return (
//               <div key={product._id} className="kids-card">

//                 <button
//                   className={`wishlist-btn ${isLiked ? "active" : ""}`}
//                   onClick={() => handleWishlist(product)}
//                 >
//                   {isLiked ? "❤️" : "🤍"}
//                 </button>

//                 <Link to={`/product/${product._id}`}>
//                   <img
//                     src={
//                       product.image
//                         ? product.image.startsWith("http")
//                           ? product.image
//                           : `${BASE_URL}/uploads/${product.image}`
//                         : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23e0e0e0' width='200' height='200'/%3E%3C/svg%3E"
//                     }
//                     alt={product.name}
//                   />
//                 </Link>

//                 <h3>{product.name}</h3>
//                 <p>₹ {product.price}</p>

//                 {selectedSize && (
//                   <p className="selected-size">
//                     Size: {selectedSize}
//                   </p>
//                 )}

//                 <div className="size-preview">
//                   {[6, 7, 8, 9, 10].map(s => (
//                     <button
//                       key={s}
//                       className={
//                         selectedSize === s
//                           ? "size-box active"
//                           : "size-box"
//                       }
//                       onClick={() =>
//                         handleSizeSelect(product._id, s)
//                       }
//                     >
//                       {s}
//                     </button>
//                   ))}
//                 </div>

//                 <button
//                   className="add-btn"
//                   onClick={() => handleAddToCart(product)}
//                 >
//                   Add to Cart
//                 </button>

//               </div>
//             );
//           })}
//         </div>
//       )}

//     </div>
//   );
// };

// export default Kids;





import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Kids.css";

const BASE_URL = import.meta.env.VITE_API_URL;

const Kids = () => {
  const [products, setProducts] = useState([]);
  const [sizes, setSizes] = useState({});
  const [toast, setToast] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = () => {
    fetch(`${BASE_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.success && Array.isArray(data.data)) {
          setProducts(data.data);
        } else if (Array.isArray(data?.data)) {
          setProducts(data.data);
        } else {
          setProducts([]);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
    setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
  }, []);

  useEffect(() => {
    const onRefresh = () => fetchProducts();
    window.addEventListener("productsUpdated", onRefresh);
    return () => window.removeEventListener("productsUpdated", onRefresh);
  }, []);

  const showToast = (message, type = "success") => {
    setToast(null);
    setTimeout(() => setToast({ message, type }), 100);
    setTimeout(() => setToast(null), 2800);
  };

  const kidsProducts = Array.isArray(products)
    ? products.filter(
        (product) =>
          (product.category || "").toLowerCase().trim() === "kids"
      )
    : [];

  const handleSizeSelect = (productId, size) => {
    setSizes((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };

  const handleWishlist = (product) => {
    const exists = wishlist.find((item) => item._id === product._id);

    let updatedWishlist;

    if (exists) {
      updatedWishlist = wishlist.filter(
        (item) => item._id !== product._id
      );
      showToast("Removed from wishlist", "error");
    } else {
      updatedWishlist = [...wishlist, product];
      showToast("Added to wishlist ❤️", "success");
    }

    setWishlist(updatedWishlist);
    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  const handleAddToCart = (product) => {
    const selectedSize = sizes[product._id];

    if (!selectedSize) {
      showToast("Please select size", "error");
      return;
    }

    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const item = existingCart.find(
      (i) => i._id === product._id && i.size === selectedSize
    );

    if (item) {
      item.qty += 1;
    } else {
      existingCart.push({
        ...product,
        size: selectedSize,
        qty: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    window.dispatchEvent(new Event("cartUpdated"));
    showToast("Item added to cart ✓", "success");
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="kids-page">
      {toast && (
        <div className={`snackbar snackbar-${toast.type}`}>
          {toast.message}
        </div>
      )}

      <h1>Kids Collection</h1>

      {kidsProducts.length === 0 ? (
        <h3>No Kids products found</h3>
      ) : (
        <div className="kids-grid">
          {kidsProducts.map((product) => {
            const selectedSize = sizes[product._id];
            const isLiked = wishlist.find(
              (item) => item._id === product._id
            );

            return (
              <div key={product._id} className="kids-card">
                <button
                  className={`wishlist-btn ${
                    isLiked ? "active" : ""
                  }`}
                  onClick={() => handleWishlist(product)}
                >
                  {isLiked ? "❤️" : "🤍"}
                </button>

                <Link to={`/product/${product._id}`}>
                  <img
                    src={
                      product.image
                        ? product.image.startsWith("http")
                          ? product.image
                          : `${BASE_URL}/uploads/${product.image}`
                        : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23e0e0e0' width='200' height='200'/%3E%3C/svg%3E"
                    }
                    alt={product.name}
                  />
                </Link>

                <h3>{product.name}</h3>
                <p>₹ {product.price}</p>

                {selectedSize && (
                  <p className="selected-size">
                    Size: {selectedSize}
                  </p>
                )}

                <div className="size-preview">
                  {[6, 7, 8, 9, 10].map((s) => (
                    <button
                      key={s}
                      className={
                        selectedSize === s
                          ? "size-box active"
                          : "size-box"
                      }
                      onClick={() =>
                        handleSizeSelect(product._id, s)
                      }
                    >
                      {s}
                    </button>
                  ))}
                </div>

                <button
                  className="add-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Kids;