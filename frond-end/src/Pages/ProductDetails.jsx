



// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { products } from "../Services/Product";
// import "./ProductDetails.css";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [size, setSize] = useState(null);
//   const [toast, setToast] = useState(null);

//   const showToast = (message, type = "success") => {
//     setToast(null);

//     setTimeout(() => {
//       setToast({ message, type });
//     }, 100);

//     setTimeout(() => setToast(null), 2800);
//   };

//   const product = products.find((item) => item.id === Number(id));

//   if (!product) return <h2>Product not found</h2>;

//   const needsSize = ["men", "women", "kids", "shoes"].includes(
//     product.category?.toLowerCase?.() || ""
//   );

//   const handleAddToCart = () => {
//     if (needsSize && !size) {
//       showToast("Size required! Please pick one", "error");

//       const sizeEl = document.querySelector(".size-selector");
//       if (sizeEl) {
//         sizeEl.classList.add("error-flash");
//         setTimeout(() => sizeEl.classList.remove("error-flash"), 1800);
//       }

//       return;
//     }

//     try {
//       let cart = JSON.parse(localStorage.getItem("cart")) || [];

//       const existingItem = cart.find((i) =>
//         needsSize
//           ? i.id === product.id && i.size === size
//           : i.id === product.id
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

//       showToast("Added to Cart ✓", "success");

//     } catch (err) {
//       console.error("Cart update failed:", err);
//       showToast("Something went wrong. Try again.", "error");
//     }
//   };

//   return (
//     <div className="details-page">

//       <div className="details-card">

//         {/* ✅ centered overlay toast */}
//         {toast && (
//           <div className={`snackbar snackbar-${toast.type}`}>
//             {toast.message}
//           </div>
//         )}

//         <img src={product.image} alt={product.name} />

//         <div className="details-info">
//           <h2>{product.name}</h2>

//           <p className="price">₹{product.price}</p>

//           <p>Category: {product.category}</p>

//           {needsSize && (
//             <div className="size-selector">
//               <span className="size-label">Select Size:</span>

//               <div className="size-buttons">
//                 {[6, 7, 8, 9, 10].map((s) => (
//                   <button
//                     key={s}
//                     className={`size-btn ${size === s ? "active" : ""}`}
//                     onClick={() => setSize(s)}
//                   >
//                     {s}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           <button className="add-cart-btn" onClick={handleAddToCart}>
//             Add to Cart
//           </button>
//         </div>

//       </div>

//     </div>
//   );
// };

// export default ProductDetails;




// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { products } from "../Services/Product";
// import "./ProductDetails.css";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [size, setSize] = useState(null);
//   const [toast, setToast] = useState(null);
//   const [liked, setLiked] = useState(false);

//   const product = products.find((item) => item.id === Number(id));

//   // ✅ Check wishlist on load
//   useEffect(() => {
//     if (!product) return;

//     let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     const exists = wishlist.find((item) => item.id === product.id);
//     setLiked(!!exists);
//   }, [product]);

//   if (!product) return <h2>Product not found</h2>;

//   const showToast = (message, type = "success") => {
//     setToast({ message, type });
//     setTimeout(() => setToast(null), 2800);
//   };

//   const needsSize = ["men", "women", "kids", "shoes"].includes(
//     product.category?.toLowerCase?.() || ""
//   );

//   // ✅ Wishlist Function (OUTSIDE)
//   const handleWishlist = () => {
//     let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

//     const exists = wishlist.find((item) => item.id === product.id);

//     if (exists) {
//       wishlist = wishlist.filter((item) => item.id !== product.id);
//       setLiked(false);
//       showToast("Removed from Wishlist", "error");
//     } else {
//       wishlist.push(product);
//       setLiked(true);
//       showToast("Added to Wishlist ❤️", "success");
//     }

//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   };

//   // ✅ Add To Cart
//   const handleAddToCart = () => {
//     if (needsSize && !size) {
//       showToast("Size required! Please pick one", "error");

//       const sizeEl = document.querySelector(".size-selector");
//       if (sizeEl) {
//         sizeEl.classList.add("error-flash");
//         setTimeout(() => sizeEl.classList.remove("error-flash"), 1800);
//       }
//       return;
//     }

//     try {
//       let cart = JSON.parse(localStorage.getItem("cart")) || [];

//       const existingItem = cart.find((i) =>
//         needsSize
//           ? i.id === product.id && i.size === size
//           : i.id === product.id
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

//       showToast("Added to Cart ✓", "success");

//     } catch (err) {
//       console.error("Cart update failed:", err);
//       showToast("Something went wrong. Try again.", "error");
//     }
//   };

//   return (
//     <div className="details-page">
//       <div className="details-card">

//         {toast && (
//           <div className={`snackbar snackbar-${toast.type}`}>
//             {toast.message}
//           </div>
//         )}

//         {/* ✅ Image Wrapper with Wishlist */}
//         <div className="image-wrapper">
//           <img src={product.image} alt={product.name} />

//           <button
//             className={`wishlist-btn ${liked ? "active" : ""}`}
//             onClick={handleWishlist}
//           >
//             ❤
//           </button>
//         </div>

//         <div className="details-info">
//           <h2>{product.name}</h2>
//           <p className="price">₹{product.price}</p>
//           <p>Category: {product.category}</p>

//           {needsSize && (
//             <div className="size-selector">
//               <span className="size-label">Select Size:</span>
//               <div className="size-buttons">
//                 {[6, 7, 8, 9, 10].map((s) => (
//                   <button
//                     key={s}
//                     className={`size-btn ${size === s ? "active" : ""}`}
//                     onClick={() => setSize(s)}
//                   >
//                     {s}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           <button className="add-cart-btn" onClick={handleAddToCart}>
//             Add to Cart
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ProductDetails;



import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const BASE_URL = "http://localhost:5000";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [size, setSize] = useState(null);
  const [toast, setToast] = useState(null);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch product from backend
  useEffect(() => {
    fetch(`${BASE_URL}/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, [id]);

  // ✅ Check wishlist after product loads
  useEffect(() => {
    if (!product) return;

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = wishlist.find((item) => item._id === product._id);
    setLiked(!!exists);
  }, [product]);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2800);
  };

  if (loading) return <h2>Loading...</h2>;
  if (!product) return <h2>Product not found</h2>;

  const needsSize = ["men", "women", "kids", "shoes"].includes(
    product.category?.toLowerCase?.() || ""
  );

  // ✅ Wishlist
  const handleWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find((item) => item._id === product._id);

    if (exists) {
      wishlist = wishlist.filter((item) => item._id !== product._id);
      setLiked(false);
      showToast("Removed from Wishlist", "error");
    } else {
      wishlist.push(product);
      setLiked(true);
      showToast("Added to Wishlist ❤️", "success");
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };

  // ✅ Add To Cart
  const handleAddToCart = () => {
    if (needsSize && !size) {
      showToast("Size required!", "error");
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find((i) =>
      needsSize
        ? i._id === product._id && i.size === size
        : i._id === product._id
    );

    if (existingItem) {
      existingItem.qty += 1;
    } else {
      cart.push({
        ...product,
        size: needsSize ? size : null,
        qty: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));

    showToast("Added to Cart ✓", "success");
  };

  return (
    <div className="details-page">
      <div className="details-card">

        {toast && (
          <div className={`snackbar snackbar-${toast.type}`}>
            {toast.message}
          </div>
        )}

        <div className="image-wrapper">
          <img
            src={`${BASE_URL}/${product.image}`}
            alt={product.name}
          />
          {/* <img
          src={`http://localhost:5000/${product.image}`}
          alt={product.name}
          className="product-image"
        /> */}
          {/* <img
            src={`http://localhost:5000/uploads/${product.image}`}
            alt={product.name}
            className="product-image"
          /> */}

         
          <button
            className={`wishlist-btn ${liked ? "active" : ""}`}
            onClick={handleWishlist}
          >
            {liked ? "❤️" : "🤍"}
          </button>
        </div>

        <div className="details-info">
          <h2>{product.name}</h2>
          <p className="price">₹{product.price}</p>
          <p>Category: {product.category}</p>

          {needsSize && (
            <div className="size-selector">
              {[6, 7, 8, 9, 10].map((s) => (
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

          <button className="add-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;