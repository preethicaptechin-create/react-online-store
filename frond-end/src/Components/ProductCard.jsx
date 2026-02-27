



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







import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./Productcard.css";

function ProductCard({ product, sizeOptions }) {
  const [size, setSize] = useState(null);
  const [toast, setToast] = useState(null);
  const [liked, setLiked] = useState(false);
  const cardRef = useRef(null);

  const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // ✅ Check if already in wishlist
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = wishlist.find((item) => item._id === product._id);
    if (exists) setLiked(true);
  }, [product._id]);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2800);
  };

  const needsSize = ["men", "women", "kids", "shoes"].includes(
    product?.category?.toLowerCase?.() || ""
  );

  // ✅ Wishlist function
  const handleWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find((item) => item._id === product._id);

    if (exists) {
      wishlist = wishlist.filter((item) => item._id !== product._id);
      setLiked(false);
      showToast("Removed from wishlist");
    } else {
      wishlist.push(product);
      setLiked(true);
      showToast("Added to wishlist ❤️");
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  // ✅ Add To Cart
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

    try {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existingItem = cart.find((i) =>
        needsSize ? i._id === product._id && i.size === size : i._id === product._id
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
      showToast("Item added to cart");

    } catch (err) {
      console.error("Cart update failed:", err);
      showToast("Something went wrong", "error");
    }
  };

  return (
    <div ref={cardRef} className="product-card">

      <button className="wishlist-btn" onClick={handleWishlist}>
        {liked ? "❤️" : "🤍"}
      </button>

      <Link to={`/product/${product._id}`}>
        <img
          src={`${BASE_URL}/${product.image}`}
          alt={product.name}
          className="product-image"
        />
      </Link>

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
        <div className="snackbar">
          {toast.message}
        </div>
      )}

    </div>
  );
}

export default ProductCard;