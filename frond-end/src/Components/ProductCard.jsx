



// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "./Productcard.css";

// function ProductCard({ product }) {
//   const [size, setSize] = useState(null);
//   const [toast, setToast] = useState("");

//   const needsSize = ["men", "women", "kids", "shoes"].includes(product.category);

//  if (needsSize && !size) {
//   setToast("Please select size");

//   setTimeout(() => setToast(""), 2000);
//   return;
// }

//     try {
//       let existingCart = JSON.parse(localStorage.getItem("cart")) || [];

//       const item = existingCart.find((i) =>
//         needsSize
//           ? i.id === product.id && i.size === size
//           : i.id === product.id
//       );

//       if (item) {
//         item.qty += 1;
//       } else {
//         existingCart.push({
//           ...product,
//           size: needsSize ? size : null,
//           qty: 1,
//         });
//       }

//       localStorage.setItem("cart", JSON.stringify(existingCart));

//       // Debug + notify Header
//       console.log("🟢 ProductCard: Added item → dispatching cartUpdated");
//       window.dispatchEvent(new Event("cartUpdated"));

//       setToast("Item added to cart 🛒");
// setTimeout(() => setToast(""), 2000);

//     } catch (err) {
//       console.error("Cart update failed in ProductCard:", err);
//      setToast("Something went wrong. Try again.");
// setTimeout(() => setToast(""), 2000);

//     }
//   };

//   return (
//     <div className="product-card">
//       <Link to={`/product/${product.id}`}>
//         <img
//           src={product.image}
//           alt={product.name}
//           className="product-image"
//         />
//       </Link>

//       <h3>{product.name}</h3>
//       <p>₹ {product.price}</p>
// {toast && <div className="toast">{toast}</div>}

//       {needsSize && (
//         <div className="size-selector">
//           {[6, 7, 8, 9, 10].map((s) => (
//             <button
//               key={s}
//               className={size === s ? "size-btn active" : "size-btn"}
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
//     </div>
//   );
// }

// export default ProductCard;







// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "./Productcard.css";

// function ProductCard({ product }) {
//   const [size, setSize] = useState(null);
// const [toast, setToast] = useState(null);
// const showToast = (msg, type = 'success') => {
//   setToast({ message: msg, type });
//   setTimeout(() => setToast(null), 2500);
// };

//   const needsSize = ["men", "women", "kids", "shoes"].includes(product.category);

//   // ✅ ADD FUNCTION WRAPPER
//  const handleAddToCart = () => {
//   if (needsSize && !size) {
//     showToast("Please select a size", "error");
//     // Optional: scroll to size selector or highlight it
//     document.querySelector('.size-selector')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     return;
//   }

//     try {
//       let existingCart =
//         JSON.parse(localStorage.getItem("cart")) || [];

//       const item = existingCart.find((i) =>
//         needsSize
//           ? i.id === product.id && i.size === size
//           : i.id === product.id
//       );

//       if (item) {
//         item.qty += 1;
//       } else {
//         existingCart.push({
//           ...product,
//           size: needsSize ? size : null,
//           qty: 1,
//         });
//       }

//       localStorage.setItem("cart", JSON.stringify(existingCart));

//       window.dispatchEvent(new Event("cartUpdated"));

//       setToast("Item added to cart 🛒");
//       setTimeout(() => setToast(""), 2000);

//     } catch (err) {
//       console.error("Cart update failed:", err);

//       setToast("Something went wrong. Try again.");
//       setTimeout(() => setToast(""), 2000);
//     }
//   };

//   return (
  
//  {toast && (
//   <div className={`toast toast-${toast.type}`}>
//     {toast.message}
//   </div>
// )}
//     <div className="product-card">

//       <Link to={`/product/${product.id}`}>
//         <img
//           src={product.image}
//           alt={product.name}
//           className="product-image"
//         />
//       </Link>

//       <h3>{product.name}</h3>
//       <p>₹ {product.price}</p>

     

//       {needsSize && (
//         <div className="size-selector">
//           {[6, 7, 8, 9, 10].map((s) => (
//             <button
//               key={s}
//               className={size === s ? "size-btn active" : "size-btn"}
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

//     </div>
//   );
// }

// export default ProductCard;




// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "./Productcard.css";

// function ProductCard({ product }) {
//   const [size, setSize] = useState(null);
//   const [toast, setToast] = useState(null);

//   const showToast = (message, type = "success") => {
//     setToast({ message, type });
//     setTimeout(() => setToast(null), 2500);
//   };

//   // Fix: make category check more robust (many backends use lowercase or different naming)
//   const needsSize = ["men", "women", "kids", "shoes"].includes(
//     product?.category?.toLowerCase?.()
//   );

//   const handleAddToCart = () => {
//     if (needsSize && !size) {
//       showToast("Please select a size", "error");
//       // Optional: highlight + scroll (nice UX)
//       const sizeEl = document.querySelector(".size-selector");
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

//       showToast("Item added to cart ✓", "success");

//     } catch (err) {
//       console.error("Cart update failed:", err);
//       showToast("Something went wrong. Try again.", "error");
//     }
//   };

//   return (
//     <>
//       {toast && (
//         <div className={`toast toast-${toast.type}`}>
//           {toast.message}
//         </div>
//       )}

//       <div className="product-card">
//         <Link to={`/product/${product.id}`}>
//           <img
//             src={product.image}
//             alt={product.name}
//             className="product-image"
//           />
//         </Link>

//         <h3>{product.name}</h3>
//         <p>₹{product.price}</p>

//         {needsSize && (
//           <div className="size-selector">
//             {[6, 7, 8, 9, 10].map((s) => (
//               <button
//                 key={s}
//                 className={`size-btn ${size === s ? "active" : ""}`}
//                 onClick={() => setSize(s)}
//               >
//                 {s}
//               </button>
//             ))}
//           </div>
//         )}

//         <button className="add-btn" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//       </div>
//     </>
//   );
// }

// export default ProductCard;



// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "./Productcard.css";

// function ProductCard({ product }) {
//   const [size, setSize] = useState(null);
//   const [toast, setToast] = useState(null);

//   const showToast = (message, type = "success") => {
//     setToast({ message, type });
//     setTimeout(() => setToast(null), 2800); // slightly longer so user can read
//   };

//   const needsSize = ["men", "women", "kids", "shoes"].includes(
//     product?.category?.toLowerCase?.() || ""
//   );

//   const handleAddToCart = () => {
//     if (needsSize && !size) {
//       showToast("Size required! Please pick one", "error");

//       // Highlight + smooth scroll to size selector (good UX)
//       const sizeEl = document.querySelector(".size-selector");
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

//       // Improved success message – shows name + size when relevant
//       showToast(
//         `Added: ${product.name}${size ? ` (Size ${size})` : ""} ✓`,
//         "success"
//       );
//     } catch (err) {
//       console.error("Cart update failed:", err);
//       showToast("Something went wrong. Try again.", "error");
//     }
//   };

//   return (
//     <>
//       {toast && (
//         <div className={`toast toast-${toast.type}`}>
//           {toast.message}
//         </div>
//       )}

//       <div className="product-card">
//         <Link to={`/product/${product.id}`}>
//           <img
//             src={product.image}
//             alt={product.name}
//             className="product-image"
//           />
//         </Link>

//         <h3>{product.name}</h3>
//         <p>₹{product.price}</p>

//         {needsSize && (
//           <div className="size-selector">
//             {[6, 7, 8, 9, 10].map((s) => (
//               <button
//                 key={s}
//                 className={`size-btn ${size === s ? "active" : ""}`}
//                 onClick={() => setSize(s)}
//               >
//                 {s}
//               </button>
//             ))}
//           </div>
//         )}

//         <button className="add-btn" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//       </div>
//     </>
//   );
// }

// export default ProductCard;




// import { Link } from "react-router-dom";
// import { useState, useRef } from "react";          // ← add useRef
// import "./Productcard.css";

// function ProductCard({ product }) {
//   const [size, setSize] = useState(null);
//   const [toast, setToast] = useState(null);
//   const cardRef = useRef(null);                     // ← new ref for the card

//   const showToast = (message, type = "success") => {
//     setToast({ message, type });
//     setTimeout(() => setToast(null), 2800);
//   };

//   const needsSize = ["men", "women", "kids", "shoes"].includes(
//     product?.category?.toLowerCase?.() || ""
//   );

//   const handleAddToCart = () => {
//     if (needsSize && !size) {
//       showToast("Size required! Please pick one", "error");

//       // Look for .size-selector **only inside this card**
//       const sizeEl = cardRef.current?.querySelector(".size-selector");
//       if (sizeEl) {
//         sizeEl.scrollIntoView({ behavior: "smooth", block: "center" });
//         sizeEl.classList.add("error-flash");
//         setTimeout(() => sizeEl.classList.remove("error-flash"), 2000);
//       }
//       return;
//     }

//     // ... rest of add to cart logic remains exactly the same ...

//     showToast(
//       `Added: ${product.name}${size ? ` (Size ${size})` : ""} ✓`,
//       "success"
//     );
//   };

//   return (
//     <div ref={cardRef} className="product-card">       {/* ← attach ref here */}
//       {toast && (
//         <div className={`toast toast-${toast.type}`}>
//           {toast.message}
//         </div>
//       )}

//       <Link to={`/product/${product.id}`}>
//         <img
//           src={product.image}
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
//         Add to card
//       </button>
//     </div>
//   );
// }

// export default ProductCard;






// import { Link } from "react-router-dom";
// import { useState, useRef } from "react";
// import "./Productcard.css";

// function ProductCard({ product }) {
//   const [size, setSize] = useState(null);
//   const [toast, setToast] = useState(null);
//   const cardRef = useRef(null);

//   const showToast = (message, type = "success") => {
//     setToast({ message, type });
//     setTimeout(() => setToast(null), 2800);
//   };

//   const needsSize = ["men", "women", "kids", "shoes"].includes(
//     product?.category?.toLowerCase?.() || ""
//   );

//   const handleAddToCart = () => {
//     if (needsSize && !size) {
//       showToast("Size required! Please pick one", "error");

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

//       showToast(
//         `Added: ${product.name}${size ? ` (Size ${size})` : ""} ✓`,
//         "success"
//       );
//     } catch (err) {
//       console.error("Cart update failed:", err);
//       showToast("Something went wrong. Try again.", "error");
//     }
//   };

//   return (
//     <div ref={cardRef} className="product-card">
//       {toast && (
//         <div className={`toast toast-${toast.type}`}>
//           {toast.message}
//         </div>
//       )}

//       <Link to={`/product/${product.id}`}>
//         <img
//           src={product.image}
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
//     </div>
//   );
// }

// export default ProductCard;


// import { Link } from "react-router-dom";
// import { useState, useRef } from "react";
// import "./Productcard.css";

// function ProductCard({ product }) {
//   const [size, setSize] = useState(null);
//   const [toast, setToast] = useState(null);
//   const cardRef = useRef(null);

//   const showToast = (message, type = "success") => {
//     setToast({ message, type });
//     setTimeout(() => setToast(null), 2800);
//   };

// //   const showToast = (message, type = "success") => {
// //   console.log("TOAST FIRED:", message);
// //   setToast({ message, type });
// //   setTimeout(() => setToast(null), 2800);
// // };


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

//       // Improved message — short & confident like Flipkart/Meesho
//       showToast("Added to Cart ✓", "success");
//       // Alternative options you can try:
//       // showToast("Item added successfully!", "success");
//       // showToast(`1 item added to cart`, "success");

//     } catch (err) {
//       console.error("Cart update failed:", err);
//      showToast("Item added to cart"); 
//     }
//   };

//   return (
//     <div ref={cardRef} className="product-card">
   

//     <button
//       className="snackbar-btn"
//       onClick={() => window.location.href = "/cart"}
//     >
//       GO TO CART
//     </button>
//   </div>
// )}



//       <Link to={`/product/${product.id}`}>
//         <img
//           src={product.image}
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
//       <button className="add-btn" onClick={handleAddToCart}>
//   Add to Cart
// </button>

// {toast && (
//   <div className="snackbar">
//     {toast.message}
//   </div>
// )}

//     </div>
//   );
// }

// export default ProductCard;



import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import "./Productcard.css";

function ProductCard({ product }) {
  const [size, setSize] = useState(null);
  const [toast, setToast] = useState(null);
  const cardRef = useRef(null);

  // ✅ FIXED toast function
  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2800);
  };

  const needsSize = ["men", "women", "kids", "shoes"].includes(
    product?.category?.toLowerCase?.() || ""
  );

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

      // ✅ show success toast
      showToast("Item added to cart");

    } catch (err) {
      console.error("Cart update failed:", err);
      showToast("Something went wrong", "error");
    }
  };

  return (
    <div ref={cardRef} className="product-card">

      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </Link>

      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

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

      <button className="add-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>

      {/* ✅ snackbar message */}
      {toast && (
        <div className="snackbar">
          {toast.message}
        </div>
      )}

    </div>
  );
}

export default ProductCard;
