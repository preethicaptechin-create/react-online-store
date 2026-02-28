



// import React, { useState } from "react";
// import { products } from "../Services/Product";
// import { Link } from "react-router-dom";
// import "./Shoes.css";

// const Shoes = () => {

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

//   // filter shoes
//   const shoeProducts = products.filter(product =>
//     product.name.toLowerCase().includes("shoe")
//   );

//   // select size
//   const handleSizeSelect = (productId, size) => {
//     setSizes(prev => ({
//       ...prev,
//       [productId]: size
//     }));
//   };

//   // add to cart
// const handleAddToCart = (product) => {

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

//   // ⭐ ADD THIS LINE — sync cart icon everywhere
//   window.dispatchEvent(new Event("cartUpdated"));

//   showToast("Item added to cart ✓", "success");
// };

//   return (
//     <div className="shoes-page">

//       {/* ✅ toast display */}
//       {toast && (
//         <div className={`snackbar snackbar-${toast.type}`}>
//           {toast.message}
//         </div>
//       )}

//       <h1>Shoes Collection</h1>

//       <div className="shoe-grid">

//         {shoeProducts.map(product => {

//           const selectedSize = sizes[product.id];

//           return (

//             <div key={product.id} className="shoe-card">

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

// export default Shoes;


// import React, { useState, useEffect } from "react";
// import { products } from "../Services/Product";
// import { Link } from "react-router-dom";
// import "./Shoes.css";

// const Shoes = () => {

//   const [sizes, setSizes] = useState({});
//   const [toast, setToast] = useState(null);
//   const [wishlist, setWishlist] = useState([]);

//   // load wishlist on mount
//   useEffect(() => {
//     const storedWishlist =
//       JSON.parse(localStorage.getItem("wishlist")) || [];
//     setWishlist(storedWishlist);
//   }, []);

//   // toast helper
//   const showToast = (message, type = "success") => {
//     setToast(null);
//     setTimeout(() => setToast({ message, type }), 100);
//     setTimeout(() => setToast(null), 2800);
//   };

//   // filter shoes
//   const shoeProducts = products.filter(product =>
//     product.name.toLowerCase().includes("shoe")
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

//     const selectedSize = sizes[product.id];

//     if (!selectedSize) {
//       showToast("Please select size", "error");
//       return;
//     }

//     const existingCart =
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

//     window.dispatchEvent(new Event("cartUpdated"));

//     showToast("Item added to cart ✓", "success");
//   };

//   // ❤️ wishlist toggle
//   const handleWishlist = (product) => {

//     const exists = wishlist.some(
//       item => item.id === product.id
//     );

//     let updatedWishlist;

//     if (exists) {
//       updatedWishlist = wishlist.filter(
//         item => item.id !== product.id
//       );
//       showToast("Removed from wishlist", "error");
//     } else {
//       updatedWishlist = [...wishlist, product];
//       showToast("Added to wishlist ❤", "success");
//     }

//     setWishlist(updatedWishlist);

//     localStorage.setItem(
//       "wishlist",
//       JSON.stringify(updatedWishlist)
//     );

//     window.dispatchEvent(new Event("wishlistUpdated"));
//   };

//   return (
//     <div className="shoes-page">

//       {toast && (
//         <div className={`snackbar snackbar-${toast.type}`}>
//           {toast.message}
//         </div>
//       )}

//       <h1>Shoes Collection</h1>

//       <div className="shoe-grid">

//         {shoeProducts.map(product => {

//           const selectedSize = sizes[product.id];

//           const isWishlisted = wishlist.some(
//             item => item.id === product.id
//           );

//           return (

//             <div key={product.id} className="shoe-card">

//               {/* ❤️ Wishlist Button */}
//               <button
//                 className={`wishlist-btn ${
//                   isWishlisted ? "active" : ""
//                 }`}
//                 onClick={() => handleWishlist(product)}
//               >
//                 {isWishlisted ? "❤️" : "🤍"}
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

// export default Shoes;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Shoes.css";

// const BASE_URL = "http://localhost:5000";

// const Shoes = () => {

//   const [products, setProducts] = useState([]);
//   const [sizes, setSizes] = useState({});
//   const [toast, setToast] = useState(null);
//   const [wishlist, setWishlist] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ✅ Fetch from backend
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

//   // ✅ Filter shoes by category (Recommended way)
// const shoeProducts = Array.isArray(products)
//   ? products.filter(
//       (product) =>
//         (product.category || "").toLowerCase() === "shoes"
//     )
//   : [];
//   const handleSizeSelect = (productId, size) => {
//     setSizes(prev => ({
//       ...prev,
//       [productId]: size
//     }));
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
//       showToast("Added to wishlist ❤", "success");
//     }

//     setWishlist(updatedWishlist);

//     localStorage.setItem(
//       "wishlist",
//       JSON.stringify(updatedWishlist)
//     );

//     window.dispatchEvent(new Event("wishlistUpdated"));
//   };

//   if (loading) return <h2>Loading...</h2>;

//   return (
//     <div className="shoes-page">

//       {toast && (
//         <div className={`snackbar snackbar-${toast.type}`}>
//           {toast.message}
//         </div>
//       )}

//       <h1>Shoes Collection</h1>

//       <div className="shoe-grid">

//         {shoeProducts.map(product => {

//           const selectedSize = sizes[product._id];
//           const isWishlisted = wishlist.find(
//             item => item._id === product._id
//           );

//           return (

//             <div key={product._id} className="shoe-card">

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

// export default Shoes;





import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Shoes.css";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Shoes = () => {

  const [products, setProducts] = useState([]);
  const [sizes, setSizes] = useState({});
  const [toast, setToast] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch products properly
  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/products`);
        const data = await res.json();

        console.log("Shoes API Response:", data);

        // 🔥 VERY IMPORTANT FIX
        if (Array.isArray(data.data)) {
          setProducts(data.data);
        } else if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]);
        }

        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
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

  // ✅ Safe shoes filter
  const shoeProducts = products.filter(
    (product) =>
      (product.category || "")
        .toLowerCase()
        .trim()
        .includes("shoe")   // safer than === "shoes"
  );

  const handleSizeSelect = (productId, size) => {
    setSizes(prev => ({
      ...prev,
      [productId]: size
    }));
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
      i =>
        i._id === product._id &&
        i.size === selectedSize
    );

    if (item) {
      item.qty += 1;
    } else {
      existingCart.push({
        ...product,
        size: selectedSize,
        qty: 1
      });
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(existingCart)
    );

    window.dispatchEvent(new Event("cartUpdated"));
    showToast("Item added to cart ✓");
  };

  const handleWishlist = (product) => {

    const exists = wishlist.find(
      item => item._id === product._id
    );

    let updatedWishlist;

    if (exists) {
      updatedWishlist = wishlist.filter(
        item => item._id !== product._id
      );
      showToast("Removed from wishlist", "error");
    } else {
      updatedWishlist = [...wishlist, product];
      showToast("Added to wishlist ❤");
    }

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="shoes-page">

      {toast && (
        <div className={`snackbar snackbar-${toast.type}`}>
          {toast.message}
        </div>
      )}

      <h1>Shoes Collection</h1>

      <div className="shoe-grid">

        {shoeProducts.length === 0 ? (
          <p>No Shoes Products Found</p>
        ) : (
          shoeProducts.map(product => {

            const selectedSize = sizes[product._id];
            const isWishlisted = wishlist.find(
              item => item._id === product._id
            );

            return (

              <div key={product._id} className="shoe-card">

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

                {selectedSize && (
                  <p className="selected-size">
                    Size: {selectedSize}
                  </p>
                )}

                <div className="size-preview">
                  {[6, 7, 8, 9, 10].map(s => (
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

export default Shoes;