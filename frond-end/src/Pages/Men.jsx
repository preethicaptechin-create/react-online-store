



// import React, { useState } from "react";
// import { products } from "../Services/Product";
// import { Link } from "react-router-dom";
// import "./Men.css";

// const Men = () => {

//   // store selected sizes per product
//   const [sizes, setSizes] = useState({});

//   // ✅ toast state
//   const [toast, setToast] = useState(null);

//   // ✅ toast helper
//   const showToast = (message, type = "success") => {
//     setToast(null);
//     setTimeout(() => setToast({ message, type }), 100);
//     setTimeout(() => setToast(null), 2800);
//   };

//   // filter men products
//   const menProducts = products.filter(
//     product => product.category === "men"
//   );

//   // select size
//   const handleSizeSelect = (productId, size) => {
//     setSizes(prev => ({
//       ...prev,
//       [productId]: size
//     }));
//   };

//   // add to cart
//  const handleAddToCart = (product) => {

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

//   // ⭐ IMPORTANT — sync cart badge everywhere
//   window.dispatchEvent(new Event("cartUpdated"));

//   showToast("Item added to cart ✓", "success");
// };



//   return (
//     <div className="men-page">

//       {/* ✅ toast display */}
//       {toast && (
//         <div className={`snackbar snackbar-${toast.type}`}>
//           {toast.message}
//         </div>
//       )}

//       <h1>Men's Collection</h1>

//       <div className="men-grid">

//         {menProducts.map(product => {

//           const selectedSize = sizes[product.id];

//           return (

//             <div key={product.id} className="men-card">

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

// export default Men;



// import React, { useState, useEffect } from "react";
// import { products } from "../Services/Product";
// import { Link } from "react-router-dom";
// import "./Men.css";

// const Men = () => {

//   const [sizes, setSizes] = useState({});
//   const [toast, setToast] = useState(null);
//   const [wishlist, setWishlist] = useState([]);

//   // ✅ Load wishlist on mount
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

//   // filter men products
//   const menProducts = products.filter(
//     product => product.category?.toLowerCase() === "men"
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

//     // ✅ Remove from wishlist after adding to cart
//     let updatedWishlist = wishlist.filter(
//       item => item.id !== product.id
//     );

//     setWishlist(updatedWishlist);
//     localStorage.setItem(
//       "wishlist",
//       JSON.stringify(updatedWishlist)
//     );

//     // Sync cart badge
//     window.dispatchEvent(new Event("cartUpdated"));

//     showToast("Item added to cart ✓", "success");
//   };

//   return (
//     <div className="men-page">

//       {toast && (
//         <div className={`snackbar snackbar-${toast.type}`}>
//           {toast.message}
//         </div>
//       )}

//       <h1>Men's Collection</h1>

//       <div className="men-grid">

//         {menProducts.map(product => {

//           const selectedSize = sizes[product.id];
//           const isLiked = wishlist.find(
//             item => item.id === product.id
//           );

//           return (

//             <div key={product.id} className="men-card">

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

// export default Men;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Men.css";

// const BASE_URL = "http://localhost:5000";

// const Men = () => {

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
//   const showToast = (message, type = "success") => {
//     setToast(null);
//     setTimeout(() => setToast({ message, type }), 100);
//     setTimeout(() => setToast(null), 2800);
//   };

//   // ✅ Filter men category

//   const shoeProducts = Array.isArray(products)
//   ? products.filter(
//       (product) =>
//         (product.category || "").toLowerCase() === "men"
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

//     // remove from wishlist after add to cart
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
//     <div className="men-page">

//       {toast && (
//         <div className={`snackbar snackbar-${toast.type}`}>
//           {toast.message}
//         </div>
//       )}

//       <h1>Men's Collection</h1>

//       <div className="men-grid">

//         {menProducts.map(product => {

//           const selectedSize = sizes[product._id];
//           const isLiked = wishlist.find(
//             item => item._id === product._id
//           );

//           return (

//             <div key={product._id} className="men-card">

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

// export default Men;





import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Men.css";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Men = () => {
  const [products, setProducts] = useState([]);
  const [sizes, setSizes] = useState({});
  const [toast, setToast] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/products`);
        const data = await res.json();

        console.log("Men API Response:", data);

        if (Array.isArray(data.data)) {
          setProducts(data.data);
        } else {
          setProducts([]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
        setLoading(false);
      }
    };

    fetchProducts();

    const storedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2500);
  };

  // ✅ Proper Men filter (Safe)
  const menProducts = products.filter(
    (product) =>
      product.category &&
      product.category.toLowerCase().trim() === "men"
  );

  const handleSizeSelect = (productId, size) => {
    setSizes((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };

  const handleWishlist = (product) => {
    let updatedWishlist = [...wishlist];

    const exists = updatedWishlist.find(
      (item) => item._id === product._id
    );

    if (exists) {
      updatedWishlist = updatedWishlist.filter(
        (item) => item._id !== product._id
      );
      showToast("Removed from wishlist");
    } else {
      updatedWishlist.push(product);
      showToast("Added to wishlist ❤️");
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const handleAddToCart = (product) => {
    const selectedSize = sizes[product._id];

    if (!selectedSize) {
      showToast("Please select size", "error");
      return;
    }

    let existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const item = existingCart.find(
      (i) =>
        i._id === product._id &&
        i.size === selectedSize
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

    showToast("Item added to cart 🛒");
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="men-page">
      <h1>Men's Collection</h1>

      {toast && (
        <div className={`snackbar snackbar-${toast.type}`}>
          {toast.message}
        </div>
      )}

      <div className="men-grid">
        {menProducts.length === 0 ? (
          <p>No Men's products found</p>
        ) : (
          menProducts.map((product) => {
            const selectedSize = sizes[product._id];
            const isLiked = wishlist.find(
              (item) => item._id === product._id
            );

            return (
              <div key={product._id} className="men-card">
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
                        : "https://via.placeholder.com/200x200?text=No+Image"
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
          })
        )}
      </div>
    </div>
  );
};

export default Men;