


// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { products } from "../Services/Product";
// import "./ProductDetails.css";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [size, setSize] = useState(null);
//   const [toast, setToast] = useState(null);

//  const showToast = (message, type = "success") => {
//   setToast(null);                // clear previous first
//   setTimeout(() => {
//     setToast({ message, type });
//   }, 100);
//   setTimeout(() => setToast(null), 2800);
// };

//   const product = products.find((item) => item.id === Number(id));

//   if (!product) {
//     return <h2>Product not found</h2>;
//   }

//   const needsSize = ["men", "women", "kids", "shoes"].includes(
//     product.category?.toLowerCase?.() || ""
//   );

//   const handleAddToCart = () => {
//     if (needsSize && !size) {
//       showToast("Size required! Please pick one", "error");

//       // Optional: highlight size area
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

//       // Short, confident message like popular e-commerce apps
//       showToast("Added to Cart ✓", "success");

//       // Alternative messages you can swap in:
//       // showToast("Item added successfully!", "success");
//       // showToast(`Added: ${product.name}${size ? ` (${size})` : ""}`, "success");

//     } catch (err) {
//       console.error("Cart update failed:", err);
//       showToast("Something went wrong. Try again.", "error");
//     }
//   };

//   return (
// <div className="details-page">
//   <div className="details-card">

//     {toast && (
//       <div className={`snackbar snackbar-${toast.type}`}>
//         {toast.message}
//       </div>
//     )}

      

//       <div className="details-card">
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



import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../Services/Product";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [size, setSize] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast(null);

    setTimeout(() => {
      setToast({ message, type });
    }, 100);

    setTimeout(() => setToast(null), 2800);
  };

  const product = products.find((item) => item.id === Number(id));

  if (!product) return <h2>Product not found</h2>;

  const needsSize = ["men", "women", "kids", "shoes"].includes(
    product.category?.toLowerCase?.() || ""
  );

  const handleAddToCart = () => {
    if (needsSize && !size) {
      showToast("Size required! Please pick one", "error");

      const sizeEl = document.querySelector(".size-selector");
      if (sizeEl) {
        sizeEl.classList.add("error-flash");
        setTimeout(() => sizeEl.classList.remove("error-flash"), 1800);
      }

      return;
    }

    try {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existingItem = cart.find((i) =>
        needsSize
          ? i.id === product.id && i.size === size
          : i.id === product.id
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

    } catch (err) {
      console.error("Cart update failed:", err);
      showToast("Something went wrong. Try again.", "error");
    }
  };

  return (
    <div className="details-page">

      <div className="details-card">

        {/* ✅ centered overlay toast */}
        {toast && (
          <div className={`snackbar snackbar-${toast.type}`}>
            {toast.message}
          </div>
        )}

        <img src={product.image} alt={product.name} />

        <div className="details-info">
          <h2>{product.name}</h2>

          <p className="price">₹{product.price}</p>

          <p>Category: {product.category}</p>

          {needsSize && (
            <div className="size-selector">
              <span className="size-label">Select Size:</span>

              <div className="size-buttons">
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
