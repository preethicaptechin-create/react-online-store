// import { useEffect, useState } from "react";
// import "./Wishlist.css";

// function Wishlist() {
//   const [wishlist, setWishlist] = useState([]);

//   useEffect(() => {
//     const items = JSON.parse(localStorage.getItem("wishlist")) || [];
//     setWishlist(items);
//   }, []);
//   const moveToCart = (item) => {
//   // 1️⃣ Get existing cart
//   const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

//   // 2️⃣ Check if already in cart
//   const alreadyInCart = existingCart.find(
//     (cartItem) => cartItem._id === item._id
//   );

//   if (!alreadyInCart) {
//     existingCart.push(item);
//     localStorage.setItem("cart", JSON.stringify(existingCart));
//   }

//   // 3️⃣ Remove from wishlist
//   const updatedWishlist = wishlist.filter(
//     (wishItem) => wishItem._id !== item._id
//   );

//   setWishlist(updatedWishlist);
//   localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

//   alert("Item moved to cart 🛒");
// };

//   return (
//     <div className="wishlist-container">
//       <h2 className="wishlist-title">My Wishlist ❤️</h2>

//       {wishlist.length === 0 ? (
//         <p className="empty-text">No items in wishlist</p>
//       ) : (
//         <div className="wishlist-grid">
//           {wishlist.map((item) => (
//             <div className="wishlist-card" key={item._id}>
//               <img
//                 src={`http://localhost:5000/${item.image}`}
//                 alt={item.name}
//               />
//               <h4>{item.name}</h4>
//               <p className="price">₹{item.price}</p>
//             <button
//   className="move-btn"
//   onClick={() => moveToCart(item)}
// >
//   Move to Cart
// </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Wishlist;




// import { useEffect, useState } from "react";
// import "./Wishlist.css";

// function Wishlist() {
//   const [wishlist, setWishlist] = useState([]);
//   const [toast, setToast] = useState(null);

//   const BASE_URL = import.meta.env.VITE_API_URL;

//   useEffect(() => {
//     const storedWishlist =
//       JSON.parse(localStorage.getItem("wishlist")) || [];

//     setWishlist(storedWishlist);
//   }, []);

//   const moveToCart = (item) => {
//     const existingCart =
//       JSON.parse(localStorage.getItem("cart")) || [];

//     const alreadyInCart = existingCart.find(
//       (cartItem) => cartItem._id === item._id
//     );

//     if (alreadyInCart) {
//       alreadyInCart.qty += 1;
//     } else {
//       existingCart.push({ ...item, qty: 1 });
//     }

//     localStorage.setItem("cart", JSON.stringify(existingCart));

//     // Remove from wishlist
//     const updatedWishlist = wishlist.filter(
//       (wishItem) => wishItem._id !== item._id
//     );

//     setWishlist(updatedWishlist);
//     localStorage.setItem(
//       "wishlist",
//       JSON.stringify(updatedWishlist)
//     );

//     // Show toast
//     setToast("Item moved to cart 🛒");
//     setTimeout(() => setToast(null), 2500);
//   };

//   return (
//     <div className="wishlist-container">

//       {/* Toast */}
//       {toast && <div className="toast">{toast}</div>}

//       <h2 className="wishlist-title">My Wishlist ❤️</h2>

//       {wishlist.length === 0 ? (
//         <p className="empty-text">No items in wishlist</p>
//       ) : (
//         <div className="wishlist-grid">
//           {wishlist.map((item, index) => (
//             <div
//               className="wishlist-card"
//               key={`${item._id || item.id}-${index}`}
//             >
//               <img
//                 src={
//                   item.image
//                     ? item.image.startsWith("http")
//                       ? item.image
//                       : `${BASE_URL}/uploads/${item.image}`
//                     : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23e0e0e0' width='200' height='200'/%3E%3C/svg%3E"
//                 }
//                 alt={item.name}
//               />
//               <h4>{item.name}</h4>
//               <p className="price">₹{item.price}</p>

//               <button
//                 className="move-btn"
//                 onClick={() => moveToCart(item)}
//               >
//                 Move to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Wishlist;



import { useEffect, useState } from "react";
import "./Wishlist.css";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [toast, setToast] = useState(null);

  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const storedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(storedWishlist);
  }, []);

  const moveToCart = (item) => {
    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const alreadyInCart = existingCart.find(
      (cartItem) => cartItem._id === item._id
    );

    if (alreadyInCart) {
      alreadyInCart.qty += 1;
    } else {
      existingCart.push({ ...item, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    const updatedWishlist = wishlist.filter(
      (wishItem) => wishItem._id !== item._id
    );

    setWishlist(updatedWishlist);
    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

    setToast("Item moved to cart 🛒");
    setTimeout(() => setToast(null), 2500);
  };

  // ✅ NEW: remove from wishlist
  const removeFromWishlist = (item) => {
    const updatedWishlist = wishlist.filter(
      (wishItem) => wishItem._id !== item._id
    );

    setWishlist(updatedWishlist);
    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

    setToast("Item removed from wishlist ❌");
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div className="wishlist-container">
      {toast && <div className="toast">{toast}</div>}

      <h2 className="wishlist-title">My Wishlist ❤️</h2>

      {wishlist.length === 0 ? (
        <p className="empty-text">No items in wishlist</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item, index) => (
            <div
              className="wishlist-card"
              key={`${item._id || item.id}-${index}`}
            >
              <img
                src={
                  item.image
                    ? item.image.startsWith("http")
                      ? item.image
                      : `${BASE_URL}/uploads/${item.image}`
                    : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23e0e0e0' width='200' height='200'/%3E%3C/svg%3E"
                }
                alt={item.name}
              />
              <h4>{item.name}</h4>
              <p className="price">₹{item.price}</p>
              <div className="wishlist-actions">

              <button
                className="move-btn"
                onClick={() => moveToCart(item)}
              >
                Move to Cart
              </button>

              {/* ✅ Remove button */}
              <button
                className="remove-btn"
                onClick={() => removeFromWishlist(item)}
              >
                Remove
              </button>
             </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;