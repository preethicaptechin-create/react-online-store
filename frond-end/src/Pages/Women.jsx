


// import React, { useState } from "react";
// import { products } from "../Services/Product";
// import { Link } from "react-router-dom";
// import "./Women.css";

// const Women = () => {

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

//   const womenProducts = products.filter(
//     product => product.category === "women"
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

//   // ⭐ ADD THIS LINE — sync cart UI everywhere
//   window.dispatchEvent(new Event("cartUpdated"));

//   showToast("Item added to cart ✓", "success");
// };

//   return (
//     <div className="women-page">

//       {/* ✅ toast display */}
//       {toast && (
//         <div className={`snackbar snackbar-${toast.type}`}>
//           {toast.message}
//         </div>
//       )}

//       <h1>Women's Collection</h1>

//       <div className="women-grid">

//         {womenProducts.map(product => {

//           const selectedSize = sizes[product.id];

//           return (

//             <div key={product.id} className="women-card">

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

// export default Women;




// 


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Women.css";

const BASE_URL = "http://localhost:5000";

const Women = () => {

  const [products, setProducts] = useState([]);
  const [sizes, setSizes] = useState({});
  const [toast, setToast] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch products from backend
  useEffect(() => {

    fetch(`${BASE_URL}/api/products`)
      .then(res => res.json())
      .then(data => {

        if (Array.isArray(data.data)) {
          setProducts(data.data);
        } else {
          console.error("API did not return array:", data);
          setProducts([]);
        }

        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setLoading(false);
      });

    const storedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);

  }, []);
  const showToast = (message, type = "success") => {
    setToast(null);
    setTimeout(() => setToast({ message, type }), 100);
    setTimeout(() => setToast(null), 2800);
  };

  // ✅ Filter women category (backend data)
const womenProducts = Array.isArray(products)
  ? products.filter(
      (product) =>
        (product.category || "").toLowerCase() === "women"
    )
  : [];

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
    showToast("Item added to cart ✓", "success");
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
      showToast("Added to wishlist ❤", "success");
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
    <div className="women-page">

      {toast && (
        <div className={`snackbar snackbar-${toast.type}`}>
          {toast.message}
        </div>
      )}

      <h1>Women's Collection</h1>

      <div className="women-grid">

        {womenProducts.map(product => {

          const selectedSize = sizes[product._id];
          const isWishlisted = wishlist.find(
            item => item._id === product._id
          );

          return (

            <div key={product._id} className="women-card">

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
        })}
      </div>
    </div>
  );
};

export default Women;