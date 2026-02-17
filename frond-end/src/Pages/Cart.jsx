// import React, { useEffect, useState } from "react";
// import { products } from "../Services/Product";
// import "./Cart.css";

// const Cart = () => {
//   const [cart, setCart] = useState([]);

//   // ✅ Load cart from localStorage
// useEffect(() => {
//   const savedCart =
//     JSON.parse(localStorage.getItem("cart")) || [];

//   console.log("Cart loaded:", savedCart);

//   setCart(savedCart);
// }, []);


//   // ✅ Save cart to localStorage
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // ✅ Increase quantity
//   const increaseQty = (id) => {
//     setCart(cart.map(item =>
//       item.id === id
//         ? { ...item, qty: item.qty + 1 }
//         : item
//     ));
//   };

//   // ✅ Decrease quantity
//   const decreaseQty = (id) => {
//     setCart(cart
//       .map(item =>
//         item.id === id
//           ? { ...item, qty: item.qty - 1 }
//           : item
//       )
//       .filter(item => item.qty > 0)
//     );
//   };

//   // ✅ Remove item
//   const removeItem = (id) => {
//     setCart(cart.filter(item => item.id !== id));
//   };

//   // ✅ Total price
//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   );

//   if (cart.length === 0) {
//     return <h2 style={{ textAlign: "center" }}>Cart is empty</h2>;
//   }

//   return (
//     <div className="cart-page">

//       <h1>Your Cart</h1>

//       {cart.map(item => (

//         <div key={item.id} className="cart-item">

//           <img src={item.image} alt={item.name} />

//           <div className="cart-info">

//             <h3>{item.name}</h3>
//             <p>₹ {item.price}</p>

//             <div className="qty-controls">

//               <button onClick={() => decreaseQty(item.id)}>−</button>

//               <span>{item.qty}</span>

//               <button onClick={() => increaseQty(item.id)}>+</button>

//             </div>

//             <button
//               className="remove-btn"
//               onClick={() => removeItem(item.id)}
//             >
//               Remove
//             </button>

//           </div>

//         </div>

//       ))}

//       <h2 className="total">
//         Total: ₹ {total}
//       </h2>

//     </div>
//   );
// };

// export default Cart;



// import React, { useEffect, useState } from "react";
// import "./Cart.css";

// const Cart = () => {

//   // ✅ Load cart from localStorage
//   const [cart, setCart] = useState(() => {
//     const saved = localStorage.getItem("cart");
//     return saved ? JSON.parse(saved) : [];
//   });

//   // ✅ Save cart when changed
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // ✅ Increase quantity
//   const increaseQty = (id) => {
//     setCart(prev =>
//       prev.map(item =>
//         item.id === id
//           ? { ...item, qty: item.qty + 1 }
//           : item
//       )
//     );
//   };

//   // ✅ Decrease quantity
//   const decreaseQty = (id) => {
//     setCart(prev =>
//       prev
//         .map(item =>
//           item.id === id
//             ? { ...item, qty: item.qty - 1 }
//             : item
//         )
//         .filter(item => item.qty > 0)
//     );
//   };

//   // ✅ Remove item
//   const removeItem = (id) => {
//     setCart(prev =>
//       prev.filter(item => item.id !== id)
//     );
//   };


// // total quantity
// const totalItems = cart.reduce(
//   (sum, item) => sum + item.qty,
//   0
// );

// // total price
// const totalPrice = cart.reduce(
//   (sum, item) => sum + item.price * item.qty,
//   0
// );




//   return (

//     <div className="cart-page">

//       <h1 className="cart-title">Your Cart</h1>

//       <div className="cart-container">

//         {/* 🛒 ITEMS SECTION */}
//         <div className="cart-items">

//           {cart.map(item => (

//             <div key={item.id} className="cart-item">

//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="cart-img"
//               />

//               <div className="cart-info">

//                 <h3>{item.name}</h3>
//                 <p className="price">₹ {item.price}</p>

//                 <div className="qty-controls">

//                   <button onClick={() => decreaseQty(item.id)}>−</button>

//                   <span>{item.qty}</span>

//                   <button onClick={() => increaseQty(item.id)}>+</button>

//                 </div>

//                 <button
//                   className="remove-btn"
//                   onClick={() => removeItem(item.id)}
//                 >
//                   Remove
//                 </button>

//               </div>

//             </div>

//           ))}

//         </div>

//         {/* 💰 SUMMARY SECTION */}
//         <div className="cart-summary">

//           <h2>Total</h2>

//           <p>Total Items: {totalItems}</p>

//           <p>Total Price: ₹ {totalPrice}</p>

//           <button className="checkout-btn">
//             Proceed to Checkout
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default Cart;




// import React, { useEffect, useState } from "react";
// import "./Cart.css";

// const Cart = () => {

// const Cart = () => {
//   const [cart, setCart] = useState(() => {
//     const saved = localStorage.getItem("cart");
//     return saved ? JSON.parse(saved) : [];
//   });

//   // ────────────────────────────────────────────────
//   // Replace / add this useEffect here (this is the important part)
// useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//     console.log("🟢 Cart page: dispatched cartUpdated (after change)");
//     window.dispatchEvent(new Event("cartUpdated"));
//   }, [cart]);

//   // ✅ Increase quantity
//   const increaseQty = (id) => {
//     setCart(prev =>
//       prev.map(item =>
//         item.id === id
//           ? { ...item, qty: item.qty + 1 }
//           : item
//       )
//     );
//   };

//   // ✅ Decrease quantity
//   const decreaseQty = (id) => {
//     setCart(prev =>
//       prev
//         .map(item =>
//           item.id === id
//             ? { ...item, qty: item.qty - 1 }
//             : item
//         )
//         .filter(item => item.qty > 0)
//     );
//   };

//   // ✅ Remove item
//   const removeItem = (id) => {
//     setCart(prev =>
//       prev.filter(item => item.id !== id)
//     );
//   };

//   // ✅ totals
//   const totalItems = cart.reduce(
//     (sum, item) => sum + item.qty,
//     0
//   );

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   );

//   return (

//     <div className="cart-page">

//       <h1 className="cart-title">Your Cart</h1>

//       <div className="cart-container">

//         {/* ITEMS */}
//         <div className="cart-items">

//           {cart.length === 0 && (
//             <p>Your cart is empty</p>
//           )}

//           {cart.map(item => (

//             <div key={item.id} className="cart-item">

//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="cart-img"
//               />

//               <div className="cart-info">

//                 <h3>{item.name}</h3>
//                 <p className="price">₹ {item.price}</p>

//                 <div className="qty-controls">

//                   <button onClick={() => decreaseQty(item.id)}>−</button>

//                   <span>{item.qty}</span>

//                   <button onClick={() => increaseQty(item.id)}>+</button>

//                 </div>

//                 <button
//                   className="remove-btn"
//                   onClick={() => removeItem(item.id)}
//                 >
//                   Remove
//                 </button>

//               </div>

//             </div>

//           ))}

//         </div>

//         {/* SUMMARY */}
//         <div className="cart-summary">

//           <h2>Total</h2>

//           <p>Total Items: {totalItems}</p>

//           <p>Total Price: ₹ {totalPrice}</p>

//           <button className="checkout-btn">
//             Proceed to Checkout
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default Cart;




// import React, { useEffect, useState } from "react";
// import "./Cart.css";

// const Cart = () => {
//   const [cart, setCart] = useState(() => {
//     const saved = localStorage.getItem("cart");
//     try {
//       return saved ? JSON.parse(saved) : [];
//     } catch (err) {
//       console.error("Failed to parse cart from localStorage:", err);
//       return [];
//     }
//   });

//   // Save to localStorage + notify Header whenever cart changes
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//     console.log("🟢 Cart page: dispatched cartUpdated (after change)");
//     window.dispatchEvent(new Event("cartUpdated"));
//   }, [cart]);

//   // Increase quantity
//   const increaseQty = (id) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, qty: item.qty + 1 } : item
//       )
//     );
//   };

//   // Decrease quantity + remove if qty reaches 0
//   const decreaseQty = (id) => {
//     setCart((prev) =>
//       prev
//         .map((item) =>
//           item.id === id ? { ...item, qty: item.qty - 1 } : item
//         )
//         .filter((item) => item.qty > 0)
//     );
//   };

//   // Remove item completely
//   const removeItem = (id) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   // Totals
//   const totalItems = cart.reduce((sum, item) => sum + (item.qty || 0), 0);

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + (item.price || 0) * (item.qty || 0),
//     0
//   );

//   return (
//     <div className="cart-page">
//       <h1 className="cart-title">Your Cart</h1>

//       <div className="cart-container">
//         {/* ITEMS */}
//         <div className="cart-items">
//           {cart.length === 0 && <p>Your cart is empty</p>}

//           {cart.map((item) => (
//             <div key={item.id} className="cart-item">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="cart-img"
//               />

//               <div className="cart-info">
//                 <h3>{item.name}</h3>
//                 <p className="price">₹ {item.price}</p>

//                 <div className="qty-controls">
//                   <button onClick={() => decreaseQty(item.id)}>−</button>
//                   <span>{item.qty}</span>
//                   <button onClick={() => increaseQty(item.id)}>+</button>
//                 </div>

//                 <button
//                   className="remove-btn"
//                   onClick={() => removeItem(item.id)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* SUMMARY */}
//         <div className="cart-summary">
//           <h2>Total</h2>
//           <p>Total Items: {totalItems}</p>
//           <p>Total Price: ₹ {totalPrice.toFixed(2)}</p>

//           <button className="checkout-btn">Proceed to Checkout</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;






// import React, { useEffect, useState } from "react";
// import "./Cart.css";

// const Cart = () => {
//   const [cart, setCart] = useState(() => {
//     const saved = localStorage.getItem("cart");
//     try {
//       return saved ? JSON.parse(saved) : [];
//     } catch (err) {
//       console.error("Failed to parse cart from localStorage:", err);
//       return [];
//     }
//   });

//   // Save to localStorage + notify Header whenever cart changes
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//     console.log("🟢 Cart page: dispatched cartUpdated (after change)");
//     window.dispatchEvent(new Event("cartUpdated"));
//   }, [cart]);

//   // Increase quantity
//   const increaseQty = (id) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, qty: item.qty + 1 } : item
//       )
//     );
//   };

//   // Decrease quantity + remove if qty reaches 0
//   const decreaseQty = (id) => {
//     setCart((prev) =>
//       prev
//         .map((item) =>
//           item.id === id ? { ...item, qty: item.qty - 1 } : item
//         )
//         .filter((item) => item.qty > 0)
//     );
//   };

//   // Remove item completely
//   const removeItem = (id) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   // Totals
//   const totalItems = cart.reduce((sum, item) => sum + (item.qty || 0), 0);

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + (item.price || 0) * (item.qty || 0),
//     0
//   );

//   return (
//     <div className="cart-page">
//       <h1 className="cart-title">Your Cart</h1>

//       <div className="cart-container">
//         {/* ITEMS */}
//        <div className="cart-items">

//   {cart.length === 0 ? (

//     <div className="empty-cart">

//       <FaShoppingCart className="empty-icon" />

//       <h2>Your cart is empty</h2>

//       <p>Add something you love ❤️</p>

//       <button
//         className="shop-btn"
//         onClick={() => navigate("/products")}
//       >
//         Continue Shopping
//       </button>

//     </div>

//   ) : (

//     cart.map((item) => (
//       <div key={item.id} className="cart-item">

//         <img
//           src={item.image}
//           alt={item.name}
//           className="cart-img"
//         />

//         <div className="cart-info">

//           <h3>{item.name}</h3>
//           <p className="price">₹ {item.price}</p>

//           <div className="qty-controls">

//             <button onClick={() => decreaseQty(item.id)}>−</button>
//             <span>{item.qty}</span>
//             <button onClick={() => increaseQty(item.id)}>+</button>

//           </div>

//           <button
//             className="remove-btn"
//             onClick={() => removeItem(item.id)}
//           >
//             Remove
//           </button>

//         </div>

//       </div>
//     ))

//   )}

// </div>


//         {/* SUMMARY */}
//         <div className="cart-summary">
//           <h2>Total</h2>
//           <p>Total Items: {totalItems}</p>
//           <p>Total Price: ₹ {totalPrice.toFixed(2)}</p>

//           <button className="checkout-btn">Proceed to Checkout</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;



import React, { useEffect, useState } from "react";
import "./Cart.css";

import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const navigate = useNavigate();

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");

    try {
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      console.error("Failed to parse cart:", err);
      return [];
    }
  });

  // ✅ Save cart + notify header
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cart]);

  // quantity controls
  const increaseQty = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter(item => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCart(prev =>
      prev.filter(item => item.id !== id)
    );
  };

  // totals
  const totalItems = cart.reduce(
    (sum, item) => sum + (item.qty || 0),
    0
  );

  const totalPrice = cart.reduce(
    (sum, item) =>
      sum + (item.price || 0) * (item.qty || 0),
    0
  );

  return (

    <div className="cart-page">

      <h1 className="cart-title">Your Cart</h1>

      <div className="cart-container">

        {/* ITEMS */}
        <div className="cart-items">

          {cart.length === 0 ? (

            <div className="empty-cart">

              <FaShoppingCart className="empty-icon" />

              <h2>Your cart is empty</h2>

              <p>Add something you love ❤️</p>

              <button
                className="shop-btn"
                onClick={() => navigate("/products")}
              >
                Continue Shopping
              </button>

            </div>

          ) : (

            cart.map(item => (

              <div key={item.id} className="cart-item">

                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-img"
                />

                <div className="cart-info">

                  <h3>{item.name}</h3>
                  <p className="price">₹ {item.price}</p>

                  <div className="qty-controls">

                    <button onClick={() => decreaseQty(item.id)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>

                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))

          )}

        </div>

        {/* SUMMARY — show only when cart has items */}
        {cart.length > 0 && (

          <div className="cart-summary">

            <h2>Total</h2>

            <p>Total Items: {totalItems}</p>

            <p>Total Price: ₹ {totalPrice.toFixed(2)}</p>

            <button className="checkout-btn">
              Proceed to Checkout
            </button>

          </div>

        )}

      </div>

    </div>
  );
};

export default Cart;
