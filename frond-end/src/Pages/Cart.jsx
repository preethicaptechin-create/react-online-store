


// import React, { useEffect, useState } from "react";
// import "./Cart.css";

// import { FaShoppingCart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {

//   const navigate = useNavigate();

//   const [cart, setCart] = useState(() => {
//     const saved = localStorage.getItem("cart");

//     try {
//       return saved ? JSON.parse(saved) : [];
//     } catch (err) {
//       console.error("Failed to parse cart:", err);
//       return [];
//     }
//   });

//   // ✅ Save cart + notify header
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//     window.dispatchEvent(new Event("cartUpdated"));
//   }, [cart]);

//   // quantity controls
//   const increaseQty = (id) => {
//     setCart(prev =>
//       prev.map(item =>
//         item.id === id
//           ? { ...item, qty: item.qty + 1 }
//           : item
//       )
//     );
//   };

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

//   const removeItem = (id) => {
//     setCart(prev =>
//       prev.filter(item => item.id !== id)
//     );
//   };

//   // totals
//   const totalItems = cart.reduce(
//     (sum, item) => sum + (item.qty || 0),
//     0
//   );

//   const totalPrice = cart.reduce(
//     (sum, item) =>
//       sum + (item.price || 0) * (item.qty || 0),
//     0
//   );

//   return (

//     <div className="cart-page">

//       <h1 className="cart-title">Your Cart</h1>

//       <div className="cart-container">

//         {/* ITEMS */}
//         <div className="cart-items">

//           {cart.length === 0 ? (

//             <div className="empty-cart">

//               <FaShoppingCart className="empty-icon" />

//               <h2>Your cart is empty</h2>

//               <p>Add something you love ❤️</p>

//               <button
//                 className="shop-btn"
//                 onClick={() => navigate("/products")}
//               >
//                 Continue Shopping
//               </button>

//             </div>

//           ) : (

//             cart.map(item => (

//               <div key={item.id} className="cart-item">

//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="cart-img"
//                 />

//                 <div className="cart-info">

//                   <h3>{item.name}</h3>
//                   <p className="price">₹ {item.price}</p>

//                   <div className="qty-controls">

//                     <button onClick={() => decreaseQty(item.id)}>−</button>
//                     <span>{item.qty}</span>
//                     <button onClick={() => increaseQty(item.id)}>+</button>

//                   </div>

//                   <button
//                     className="remove-btn"
//                     onClick={() => removeItem(item.id)}
//                   >
//                     Remove
//                   </button>

//                 </div>

//               </div>

//             ))

//           )}

//         </div>

//         {/* SUMMARY — show only when cart has items */}
//         {cart.length > 0 && (

//           <div className="cart-summary">

//             <h2>Total</h2>

//             <p>Total Items: {totalItems}</p>

//             <p>Total Price: ₹ {totalPrice.toFixed(2)}</p>

//             <button className="checkout-btn">
//               Proceed to Checkout
//             </button>

//           </div>

//         )}

//       </div>

//     </div>
//   );
// };

// export default Cart;




// import React, { useEffect, useState } from "react";
// import "./Cart.css";

// import { FaShoppingCart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {

//   const navigate = useNavigate();

//   const [cart, setCart] = useState(() => {
//     const saved = localStorage.getItem("cart");

//     try {
//       return saved ? JSON.parse(saved) : [];
//     } catch (err) {
//       console.error("Failed to parse cart:", err);
//       return [];
//     }
//   });

//   // ✅ Save cart + notify header
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//     window.dispatchEvent(new Event("cartUpdated"));
//   }, [cart]);

//   // ✅ quantity controls (FIXED for _id + size)
//   const increaseQty = (_id, size) => {
//     setCart(prev =>
//       prev.map(item =>
//         item._id === _id && item.size === size
//           ? { ...item, qty: item.qty + 1 }
//           : item
//       )
//     );
//   };

//   const decreaseQty = (_id, size) => {
//     setCart(prev =>
//       prev
//         .map(item =>
//           item._id === _id && item.size === size
//             ? { ...item, qty: item.qty - 1 }
//             : item
//         )
//         .filter(item => item.qty > 0)
//     );
//   };

//   const removeItem = (_id, size) => {
//     setCart(prev =>
//       prev.filter(item =>
//         !(item._id === _id && item.size === size)
//       )
//     );
//   };

//   // totals
//   const totalItems = cart.reduce(
//     (sum, item) => sum + (item.qty || 0),
//     0
//   );

//   const totalPrice = cart.reduce(
//     (sum, item) =>
//       sum + (item.price || 0) * (item.qty || 0),
//     0
//   );

//   return (

//     <div className="cart-page">

//       <h1 className="cart-title">Your Cart</h1>

//       <div className="cart-container">

//         {/* ITEMS */}
//         <div className="cart-items">

//           {cart.length === 0 ? (

//             <div className="empty-cart">

//               <FaShoppingCart className="empty-icon" />

//               <h2>Your cart is empty</h2>

//               <p>Add something you love ❤️</p>

//               <button
//                 className="shop-btn"
//                 onClick={() => navigate("/products")}
//               >
//                 Continue Shopping
//               </button>

//             </div>

//           ) : (

//             cart.map(item => (

//               <div
//                 key={`${item._id}-${item.size || ""}`}
//                 className="cart-item"
//               >

//                 <img
//                   src={`http://localhost:5000/${item.image}`}
//                   alt={item.name}
//                   className="cart-img"
//                 />

//                 <div className="cart-info">

//                   <h3>{item.name}</h3>
//                   <p className="price">₹ {item.price}</p>

//                   {item.size && <p>Size: {item.size}</p>}

//                   <div className="qty-controls">

//                     <button onClick={() => decreaseQty(item._id, item.size)}>−</button>
//                     <span>{item.qty}</span>
//                     <button onClick={() => increaseQty(item._id, item.size)}>+</button>

//                   </div>

//                   <button
//                     className="remove-btn"
//                     onClick={() => removeItem(item._id, item.size)}
//                   >
//                     Remove
//                   </button>

//                 </div>

//               </div>

//             ))

//           )}

//         </div>

//         {/* SUMMARY */}
//         {cart.length > 0 && (

//           <div className="cart-summary">

//             <h2>Total</h2>

//             <p>Total Items: {totalItems}</p>

//             <p>Total Price: ₹ {totalPrice.toFixed(2)}</p>

//             <button className="checkout-btn">
//               Proceed to Checkout
//             </button>

//           </div>

//         )}

//       </div>

//     </div>
//   );
// };

// export default Cart;





// import React, { useEffect, useState } from "react";
// import "./Cart.css";

// import { FaShoppingCart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const navigate = useNavigate();

//   const [cart, setCart] = useState(() => {
//     const saved = localStorage.getItem("cart");
//     try {
//       return saved ? JSON.parse(saved) : [];
//     } catch (err) {
//       console.error("Failed to parse cart:", err);
//       return [];
//     }
//   });

//   // ✅ Save cart + notify header
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//     window.dispatchEvent(new Event("cartUpdated"));
//   }, [cart]);

//   // ✅ Quantity controls (FIXED for _id + size)
//   const increaseQty = (_id, size) => {
//     setCart(prev =>
//       prev.map(item =>
//         item._id === _id && item.size === size
//           ? { ...item, qty: item.qty + 1 }
//           : item
//       )
//     );
//   };

//   const decreaseQty = (_id, size) => {
//     setCart(prev =>
//       prev
//         .map(item =>
//           item._id === _id && item.size === size
//             ? { ...item, qty: item.qty - 1 }
//             : item
//         )
//         .filter(item => item.qty > 0)
//     );
//   };

//   const removeItem = (_id, size) => {
//     setCart(prev =>
//       prev.filter(item => !(item._id === _id && item.size === size))
//     );
//   };

//   // totals
//   const totalItems = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
//   const totalPrice = cart.reduce(
//     (sum, item) => sum + (item.price || 0) * (item.qty || 0),
//     0
//   );

//   // ✅ Handle Checkout
//   const handleCheckout = async () => {
//     try {
//       // 1. Collect order data
//       const orderData = {
//         items: cart.map(item => ({
//           product: item._id,
//           name: item.name,
//           price: item.price,
//           quantity: item.qty,
//           size: item.size,
//         })),
//         total: totalPrice,
//         address: "123, Sample Street, City", // Replace with real address if available
//       };

//       // 2. Send order to backend
//       const token = localStorage.getItem("token"); // JWT for protected route
//       const res = await fetch("http://localhost:5000/api/orders", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(orderData),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         // 3. Clear cart
//         setCart([]);
//         localStorage.removeItem("cart");
//         window.dispatchEvent(new Event("cartUpdated"));

//         // 4. Navigate to Order Confirmation page
//         navigate(`/order-confirmation/${data._id}`);
//       } else {
//         alert(data.message || "Failed to place order");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <div className="cart-page">
//       <h1 className="cart-title">Your Cart</h1>

//       <div className="cart-container">
//         {/* ITEMS */}
//         <div className="cart-items">
//           {cart.length === 0 ? (
//             <div className="empty-cart">
//               <FaShoppingCart className="empty-icon" />
//               <h2>Your cart is empty</h2>
//               <p>Add something you love ❤️</p>
//               <button className="shop-btn" onClick={() => navigate("/products")}>
//                 Continue Shopping
//               </button>
//             </div>
//           ) : (
//             cart.map(item => (
//               <div key={`${item._id}-${item.size || ""}`} className="cart-item">
//                 <img
//                   src={`http://localhost:5000/${item.image}`}
//                   alt={item.name}
//                   className="cart-img"
//                 />
//                 <div className="cart-info">
//                   <h3>{item.name}</h3>
//                   <p className="price">₹ {item.price}</p>
//                   {item.size && <p>Size: {item.size}</p>}
//                   <div className="qty-controls">
//                     <button onClick={() => decreaseQty(item._id, item.size)}>−</button>
//                     <span>{item.qty}</span>
//                     <button onClick={() => increaseQty(item._id, item.size)}>+</button>
//                   </div>
//                   <button
//                     className="remove-btn"
//                     onClick={() => removeItem(item._id, item.size)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* SUMMARY */}
//         {cart.length > 0 && (
//           <div className="cart-summary">
//             <h2>Total</h2>
//             <p>Total Items: {totalItems}</p>
//             <p>Total Price: ₹ {totalPrice.toFixed(2)}</p>
//             <button className="checkout-btn" onClick={handleCheckout}>
//               Proceed to Checkout
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;





// import React, { useEffect, useState } from "react";
// import "./Cart.css";
// import { FaShoppingCart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const navigate = useNavigate();

//   const [cart, setCart] = useState(() => {
//     const saved = localStorage.getItem("cart");
//     try {
//       return saved ? JSON.parse(saved) : [];
//     } catch (err) {
//       console.error("Failed to parse cart:", err);
//       return [];
//     }
//   });

//   // Save cart + notify header
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//     window.dispatchEvent(new Event("cartUpdated"));
//   }, [cart]);

//   // Quantity controls
//   const increaseQty = (_id, size) => {
//     setCart(prev =>
//       prev.map(item =>
//         item._id === _id && item.size === size
//           ? { ...item, qty: item.qty + 1 }
//           : item
//       )
//     );
//   };

//   const decreaseQty = (_id, size) => {
//     setCart(prev =>
//       prev
//         .map(item =>
//           item._id === _id && item.size === size
//             ? { ...item, qty: item.qty - 1 }
//             : item
//         )
//         .filter(item => item.qty > 0)
//     );
//   };

//   const removeItem = (_id, size) => {
//     setCart(prev => prev.filter(item => !(item._id === _id && item.size === size)));
//   };

//   // Cart totals
//   const totalItems = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
//   const totalPrice = cart.reduce((sum, item) => sum + (item.price || 0) * (item.qty || 0), 0);

//   // Handle checkout
//   const handleCheckout = async () => {
//     try {
//       if (!cart.length) return alert("Cart is empty!");

//       const orderData = {
//         items: cart.map(item => ({
//           product: item._id,
//           name: item.name,
//           price: item.price,
//           quantity: item.qty,
//           size: item.size,
//         })),
//         total: totalPrice,
//         address: "123, Sample Street, City", // replace with real address if needed
//       };

//     const token = localStorage.getItem("accessToken");
//       if (!token) {
//         alert("Please login first");
//         navigate("/login");
//         return;
//       }

//       const res = await fetch("http://localhost:5000/api/orders", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(orderData),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setCart([]);
//         localStorage.removeItem("cart");
//         window.dispatchEvent(new Event("cartUpdated"));
//         navigate(`/order-confirmation/${data._id}`);
//       } else {
//         alert(data.message || "Failed to place order");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <div className="cart-page">
//       <h1 className="cart-title">Your Cart</h1>

//       <div className="cart-container">
//         {/* Cart Items */}
//         <div className="cart-items">
//           {cart.length === 0 ? (
//             <div className="empty-cart">
//               <FaShoppingCart className="empty-icon" />
//               <h2>Your cart is empty</h2>
//               <p>Add something you love ❤️</p>
//               <button className="shop-btn" onClick={() => navigate("/products")}>
//                 Continue Shopping
//               </button>
//             </div>
//           ) : (
//             cart.map(item => (
//               <div key={`${item._id}-${item.size || ""}`} className="cart-item">
//                 <img
//                   src={`http://localhost:5000/${item.image}`}
//                   alt={item.name}
//                   className="cart-img"
//                 />
//                 <div className="cart-info">
//                   <h3>{item.name}</h3>
//                   <p className="price">₹ {item.price}</p>
//                   {item.size && <p>Size: {item.size}</p>}
//                   <div className="qty-controls">
//                     <button onClick={() => decreaseQty(item._id, item.size)}>−</button>
//                     <span>{item.qty}</span>
//                     <button onClick={() => increaseQty(item._id, item.size)}>+</button>
//                   </div>
//                   <button
//                     className="remove-btn"
//                     onClick={() => removeItem(item._id, item.size)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>


//         {/* Cart Summary */}
//         {cart.length > 0 && (
//           <div className="cart-summary">
//             <h2>Total</h2>
//             <p>Total Items: {totalItems}</p>
//             <p>Total Price: ₹ {totalPrice.toFixed(2)}</p>
//             <button className="checkout-btn" onClick={handleCheckout}>
//               Proceed to Checkout
//             </button>
//               {/* <button>view order</button> */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;



// import React, { useEffect, useState } from "react";
// import "./Cart.css";
// import { FaShoppingCart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const navigate = useNavigate();

//   const [cart, setCart] = useState(() => {
//     const saved = localStorage.getItem("cart");
//     try {
//       return saved ? JSON.parse(saved) : [];
//     } catch (err) {
//       console.error("Failed to parse cart:", err);
//       return [];
//     }
//   });

//   // Save cart + notify header
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//     window.dispatchEvent(new Event("cartUpdated"));
//   }, [cart]);

//   // Quantity controls
//   const increaseQty = (_id, size) => {
//     setCart(prev =>
//       prev.map(item =>
//         item._id === _id && item.size === size
//           ? { ...item, qty: item.qty + 1 }
//           : item
//       )
//     );
//   };

//   const decreaseQty = (_id, size) => {
//     setCart(prev =>
//       prev
//         .map(item =>
//           item._id === _id && item.size === size
//             ? { ...item, qty: item.qty - 1 }
//             : item
//         )
//         .filter(item => item.qty > 0)
//     );
//   };

//   const removeItem = (_id, size) => {
//     setCart(prev => prev.filter(item => !(item._id === _id && item.size === size)));
//   };

//   // Cart totals
//   const totalItems = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
//   const totalPrice = cart.reduce((sum, item) => sum + (item.price || 0) * (item.qty || 0), 0);

//   // ✅ Handle checkout: save cart to localStorage + navigate to OrderDetails
//   const handleCheckout = () => {
//     if (!cart.length) return alert("Cart is empty!");

//     localStorage.setItem("cartItems", JSON.stringify(cart));
//     localStorage.setItem("cartTotal", totalPrice);
// //     localStorage.setItem("token", response.data.token);
// // localStorage.setItem("user", JSON.stringify(response.data.user));

//     navigate("/order-details");
//   };

//   return (
//     <div className="cart-page">
//       <h1 className="cart-title">Your Cart</h1>

//       <div className="cart-container">
//         {/* Cart Items */}
//         <div className="cart-items">
//           {cart.length === 0 ? (
//             <div className="empty-cart">
//               <FaShoppingCart className="empty-icon" />
//               <h2>Your cart is empty</h2>
//               <p>Add something you love ❤️</p>
//               <button className="shop-btn" onClick={() => navigate("/products")}>
//                 Continue Shopping
//               </button>
//             </div>
//           ) : (
//             cart.map(item => (
//               <div key={`${item._id}-${item.size || ""}`} className="cart-item">
//                 <img
//                   src={`http://localhost:5000/${item.image}`}
//                   alt={item.name}
//                   className="cart-img"
//                 />
//                 <div className="cart-info">
//                   <h3>{item.name}</h3>
//                   <p className="price">₹ {item.price}</p>
//                   {item.size && <p>Size: {item.size}</p>}
//                   <div className="qty-controls">
//                     <button onClick={() => decreaseQty(item._id, item.size)}>−</button>
//                     <span>{item.qty}</span>
//                     <button onClick={() => increaseQty(item._id, item.size)}>+</button>
//                   </div>
//                   <button
//                     className="remove-btn"
//                     onClick={() => removeItem(item._id, item.size)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Cart Summary */}
//         {cart.length > 0 && (
//           <div className="cart-summary">
//             <h2>Total</h2>
//             <p>Total Items: {totalItems}</p>
//             <p>Total Price: ₹ {totalPrice.toFixed(2)}</p>
//             <button className="checkout-btn" onClick={handleCheckout}>
//               Proceed to Checkout
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;




// import React, { useEffect, useState } from "react";
// import "./Cart.css";
// import { FaShoppingCart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const navigate = useNavigate();

//   const [cart, setCart] = useState(() => {
//     const saved = localStorage.getItem("cart");
//     try {
//       return saved ? JSON.parse(saved) : [];
//     } catch (err) {
//       console.error("Failed to parse cart:", err);
//       return [];
//     }
//   });

//   // 🔥 Listen for cart updates (e.g., after order confirmation)
//   useEffect(() => {
//     const handleCartUpdate = () => {
//       const saved = JSON.parse(localStorage.getItem("cart") || "[]");
//       setCart(saved);
//     };

//     window.addEventListener("cartUpdated", handleCartUpdate);

//     return () => window.removeEventListener("cartUpdated", handleCartUpdate);
//   }, []);

//   // Save cart to localStorage on every change
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//     window.dispatchEvent(new Event("cartUpdated"));
//   }, [cart]);

//   // Quantity controls
//   const increaseQty = (_id, size) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item._id === _id && item.size === size
//           ? { ...item, qty: item.qty + 1 }
//           : item
//       )
//     );
//   };

//   const decreaseQty = (_id, size) => {
//     setCart((prev) =>
//       prev
//         .map((item) =>
//           item._id === _id && item.size === size
//             ? { ...item, qty: item.qty - 1 }
//             : item
//         )
//         .filter((item) => item.qty > 0)
//     );
//   };

//   const removeItem = (_id, size) => {
//     setCart((prev) => prev.filter((item) => !(item._id === _id && item.size === size)));
//   };

//   // Cart totals
//   const totalItems = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
//   const totalPrice = cart.reduce((sum, item) => sum + (item.price || 0) * (item.qty || 0), 0);

//   // Proceed to checkout
//   const handleCheckout = () => {
//     if (!cart.length) return alert("Cart is empty!");

//     localStorage.setItem("cartItems", JSON.stringify(cart));
//     localStorage.setItem("cartTotal", totalPrice);
//     localStorage.setItem("cart", JSON.stringify(cart));

//     navigate("/order-details");
//   };

//   return (
//     <div className="cart-page">
//       <h1 className="cart-title">Your Cart</h1>

//       <div className="cart-container">
//         {/* Cart Items */}
//         <div className="cart-items">
//           {cart.length === 0 ? (
//             <div className="empty-cart">
//               <FaShoppingCart className="empty-icon" />
//               <h2>Your cart is empty</h2>
//               <p>Add something you love ❤️</p>
//               <button className="shop-btn" onClick={() => navigate("/products")}>
//                 Continue Shopping
//               </button>
//             </div>
//           ) : (
//             cart.map((item) => (
//               <div key={`${item._id}-${item.size || ""}`} className="cart-item">
//                 <img
//                   src={`http://localhost:5000/${item.image}`}
//                   alt={item.name}
//                   className="cart-img"
//                 />
//                 <div className="cart-info">
//                   <h3>{item.name}</h3>
//                   <p className="price">₹ {item.price}</p>
//                   {item.size && <p>Size: {item.size}</p>}
//                   <div className="qty-controls">
//                     <button onClick={() => decreaseQty(item._id, item.size)}>−</button>
//                     <span>{item.qty}</span>
//                     <button onClick={() => increaseQty(item._id, item.size)}>+</button>
//                   </div>
//                   <button
//                     className="remove-btn"
//                     onClick={() => removeItem(item._id, item.size)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Cart Summary */}
//         {cart.length > 0 && (
//           <div className="cart-summary">
//             <h2>Total</h2>
//             <p>Total Items: {totalItems}</p>
//             <p>Total Price: ₹ {totalPrice.toFixed(2)}</p>
//             <button className="checkout-btn" onClick={handleCheckout}>
//               Proceed to Checkout
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;





// import React, { useEffect, useState } from "react";
// import "./Cart.css";
// import { FaShoppingCart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const navigate = useNavigate();

//   const [cart, setCart] = useState(() => {
//     const saved = localStorage.getItem("cart");
//     try {
//       return saved ? JSON.parse(saved) : [];
//     } catch (err) {
//       console.error("Failed to parse cart:", err);
//       return [];
//     }
//   });

//   // 🔥 Listen for cart updates (from other components)
//   useEffect(() => {
//     const handleCartUpdate = () => {
//       const saved = JSON.parse(localStorage.getItem("cart") || "[]");
//       setCart(saved);
//     };

//     window.addEventListener("cartUpdated", handleCartUpdate);
//     return () => window.removeEventListener("cartUpdated", handleCartUpdate);
//   }, []);

//   // Save cart to localStorage on changes, but **do NOT dispatch here**
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // Quantity controls
//   const increaseQty = (_id, size) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item._id === _id && item.size === size
//           ? { ...item, qty: item.qty + 1 }
//           : item
//       )
//     );
//   };

//   const decreaseQty = (_id, size) => {
//     setCart((prev) =>
//       prev
//         .map((item) =>
//           item._id === _id && item.size === size
//             ? { ...item, qty: item.qty - 1 }
//             : item
//         )
//         .filter((item) => item.qty > 0)
//     );
//   };

//   const removeItem = (_id, size) => {
//     setCart((prev) => prev.filter((item) => !(item._id === _id && item.size === size)));
//   };

//   // Cart totals
//   const totalItems = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
//   const totalPrice = cart.reduce(
//     (sum, item) => sum + (item.price || 0) * (item.qty || 0),
//     0
//   );

//   // Proceed to checkout
//   const handleCheckout = () => {
//     if (!cart.length) return alert("Cart is empty!");

//     localStorage.setItem("cartItems", JSON.stringify(cart));
//     localStorage.setItem("cartTotal", totalPrice);

//     // 🔥 Notify other components (like Header) AFTER saving to localStorage
//     window.dispatchEvent(new Event("cartUpdated"));

//     navigate("/order-details");
//   };

//   return (
//     <div className="cart-page">
//       <h1 className="cart-title">Your Cart</h1>

//       <div className="cart-container">
//         {/* Cart Items */}
//         <div className="cart-items">
//           {cart.length === 0 ? (
//             <div className="empty-cart">
//               <FaShoppingCart className="empty-icon" />
//               <h2>Your cart is empty</h2>
//               <p>Add something you love ❤️</p>
//               <button className="shop-btn" onClick={() => navigate("/products")}>
//                 Continue Shopping
//               </button>
//             </div>
//           ) : (
//             cart.map((item) => (
//               <div key={`${item._id}-${item.size || ""}`} className="cart-item">
//                 <img
//                   src={`http://localhost:5000/${item.image}`}
//                   alt={item.name}
//                   className="cart-img"
//                 />
//                 <div className="cart-info">
//                   <h3>{item.name}</h3>
//                   <p className="price">₹ {item.price}</p>
//                   {item.size && <p>Size: {item.size}</p>}
//                   <div className="qty-controls">
//                     <button onClick={() => decreaseQty(item._id, item.size)}>−</button>
//                     <span>{item.qty}</span>
//                     <button onClick={() => increaseQty(item._id, item.size)}>+</button>
//                   </div>
//                   <button
//                     className="remove-btn"
//                     onClick={() => removeItem(item._id, item.size)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Cart Summary */}
//         {cart.length > 0 && (
//           <div className="cart-summary">
//             <h2>Total</h2>
//             <p>Total Items: {totalItems}</p>
//             <p>Total Price: ₹ {totalPrice.toFixed(2)}</p>
//             <button className="checkout-btn" onClick={handleCheckout}>
//               Proceed to Checkout
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;





// import React, { useEffect, useState } from "react";
// import "./Cart.css";
// import { FaShoppingCart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// // ✅ Dynamic config
// const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
// const CURRENCY = import.meta.env.VITE_CURRENCY || "₹";
// const ROUTES = {
//   products: "/products",
//   orderDetails: "/order-details",
// };

// const Cart = () => {
//   const navigate = useNavigate();

//   const [cart, setCart] = useState(() => {
//     const saved = localStorage.getItem("cart");
//     try {
//       return saved ? JSON.parse(saved) : [];
//     } catch (err) {
//       console.error("Failed to parse cart:", err);
//       return [];
//     }
//   });

//   // Listen for cart updates from other components
//   useEffect(() => {
//     const handleCartUpdate = () => {
//       const saved = JSON.parse(localStorage.getItem("cart") || "[]");
//       setCart(saved);
//     };
//     window.addEventListener("cartUpdated", handleCartUpdate);
//     return () => window.removeEventListener("cartUpdated", handleCartUpdate);
//   }, []);

//   // Save cart to localStorage on changes
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // Quantity controls
//   const increaseQty = (_id, size) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item._id === _id && item.size === size
//           ? { ...item, qty: item.qty + 1 }
//           : item
//       )
//     );
//   };

//   const decreaseQty = (_id, size) => {
//     setCart((prev) =>
//       prev
//         .map((item) =>
//           item._id === _id && item.size === size
//             ? { ...item, qty: item.qty - 1 }
//             : item
//         )
//         .filter((item) => item.qty > 0)
//     );
//   };

//   const removeItem = (_id, size) => {
//     setCart((prev) => prev.filter((item) => !(item._id === _id && item.size === size)));
//   };

//   // Cart totals
//   const totalItems = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
//   const totalPrice = cart.reduce(
//     (sum, item) => sum + (item.price || 0) * (item.qty || 0),
//     0
//   );

//   // Proceed to checkout
//   const handleCheckout = () => {
//     if (!cart.length) return alert("Cart is empty!");

//     localStorage.setItem("cartItems", JSON.stringify(cart));
//     localStorage.setItem("cartTotal", totalPrice);

//     window.dispatchEvent(new Event("cartUpdated"));
//     navigate(ROUTES.orderDetails);
//   };

//   return (
//     <div className="cart-page">
//       <h1 className="cart-title">Your Cart</h1>

//       <div className="cart-container">
//         {/* Cart Items */}
//         <div className="cart-items">
//           {cart.length === 0 ? (
//             <div className="empty-cart">
//               <FaShoppingCart className="empty-icon" />
//               <h2>Your cart is empty</h2>
//               <p>Add something you love ❤️</p>
//               <button className="shop-btn" onClick={() => navigate(ROUTES.products)}>
//                 Continue Shopping
//               </button>
//             </div>
//           ) : (
//             cart.map((item) => (
//               <div key={`${item._id}-${item.size || ""}`} className="cart-item">
//                 <img
//                   src={`${BASE_URL}/${item.image}`}
//                   alt={item.name}
//                   className="cart-img"
//                 />
//                 <div className="cart-info">
//                   <h3>{item.name}</h3>
//                   <p className="price">{CURRENCY} {item.price}</p>
//                   {item.size && <p>Size: {item.size}</p>}
//                   <div className="qty-controls">
//                     <button onClick={() => decreaseQty(item._id, item.size)}>−</button>
//                     <span>{item.qty}</span>
//                     <button onClick={() => increaseQty(item._id, item.size)}>+</button>
//                   </div>
//                   <button
//                     className="remove-btn"
//                     onClick={() => removeItem(item._id, item.size)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Cart Summary */}
//         {cart.length > 0 && (
//           <div className="cart-summary">
//             <h2>Total</h2>
//             <p>Total Items: {totalItems}</p>
//             <p>Total Price: {CURRENCY} {totalPrice.toFixed(2)}</p>
//             <button className="checkout-btn" onClick={handleCheckout}>
//               Proceed to Checkout
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;





// import React, { useEffect, useState } from "react";
// import "./Cart.css";
// import { FaShoppingCart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// // ✅ Dynamic config
// const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
// const CURRENCY = import.meta.env.VITE_CURRENCY || "₹";
// const ROUTES = {
//   products: "/products",
//   orderDetails: "/order-details",
// };

// const Cart = () => {
//   const navigate = useNavigate();

//   const [cart, setCart] = useState(() => {
//     const saved = localStorage.getItem("cart");
//     try {
//       return saved ? JSON.parse(saved) : [];
//     } catch (err) {
//       console.error("Failed to parse cart:", err);
//       return [];
//     }
//   });

//   // Listen for cart updates from other components
//   useEffect(() => {
//     const handleCartUpdate = () => {
//       const saved = JSON.parse(localStorage.getItem("cart") || "[]");
//       setCart(saved);
//     };
//     window.addEventListener("cartUpdated", handleCartUpdate);
//     return () => window.removeEventListener("cartUpdated", handleCartUpdate);
//   }, []);

//   // Save cart to localStorage on changes (fallback)
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // ✅ Quantity controls with instant header badge update
//   // const increaseQty = (_id, size) => {
//   //   setCart((prev) => {
//   //     const updated = prev.map((item) =>
//   //       item._id === _id && item.size === size
//   //         ? { ...item, qty: item.qty + 1 }
//   //         : item
//   //     );
//   //     localStorage.setItem("cart", JSON.stringify(updated));
//   //     window.dispatchEvent(new Event("cartUpdated"));
//   //     return updated;
//   //   });
//   // };

//   const increaseQty = (_id, size) => {
//     setCart((prev) => {
//       const updated = prev.map((item) =>
//         item._id === _id && item.size === size
//           ? { ...item, qty: item.qty + 1 }
//           : item
//       );
//       localStorage.setItem("cart", JSON.stringify(updated));
//       // NO dispatch here anymore
//       return updated;
//     });
//   };

//   // same for decreaseQty and removeItem

//   // And add at the top level:
//   useEffect(() => {
//     window.dispatchEvent(new Event("cartUpdated"));
//   }, [cart]);

//   const decreaseQty = (_id, size) => {
//     setCart((prev) => {
//       const updated = prev
//         .map((item) =>
//           item._id === _id && item.size === size
//             ? { ...item, qty: item.qty - 1 }
//             : item
//         )
//         .filter((item) => item.qty > 0);
//       localStorage.setItem("cart", JSON.stringify(updated));
//       window.dispatchEvent(new Event("cartUpdated"));
//       return updated;
//     });
//   };

//   const removeItem = (_id, size) => {
//     setCart((prev) => {
//       const updated = prev.filter((item) => !(item._id === _id && item.size === size));
//       localStorage.setItem("cart", JSON.stringify(updated));
//       window.dispatchEvent(new Event("cartUpdated"));
//       return updated;
//     });
//   };

//   // Cart totals
//   const totalItems = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
//   const totalPrice = cart.reduce(
//     (sum, item) => sum + (item.price || 0) * (item.qty || 0),
//     0
//   );

//   // Proceed to checkout
//   const handleCheckout = () => {
//     if (!cart.length) return alert("Cart is empty!");

//     localStorage.setItem("cartItems", JSON.stringify(cart));
//     localStorage.setItem("cartTotal", totalPrice);

//     window.dispatchEvent(new Event("cartUpdated"));
//     navigate(ROUTES.orderDetails);
//   };

//   return (
//     <div className="cart-page">
//       <h1 className="cart-title">Your Cart</h1>

//       <div className="cart-container">
//         {/* Cart Items */}
//         <div className="cart-items">
//           {cart.length === 0 ? (
//             <div className="empty-cart">
//               <FaShoppingCart className="empty-icon" />
//               <h2>Your cart is empty</h2>
//               <p>Add something you love ❤️</p>
//               <button className="shop-btn" onClick={() => navigate(ROUTES.products)}>
//                 Continue Shopping
//               </button>
//             </div>
//           ) : (
//             cart.map((item) => (
//               <div key={`${item._id}-${item.size || ""}`} className="cart-item">
//                 <img
//                   src={`${BASE_URL}/${item.image}`}
//                   alt={item.name}
//                   className="cart-img"
//                 />
//                 <div className="cart-info">
//                   <h3>{item.name}</h3>
//                   <p className="price">{CURRENCY} {item.price}</p>
//                   {item.size && <p>Size: {item.size}</p>}
//                   <div className="qty-controls">
//                     <button onClick={() => decreaseQty(item._id, item.size)}>−</button>
//                     <span>{item.qty}</span>
//                     <button onClick={() => increaseQty(item._id, item.size)}>+</button>
//                   </div>
//                   <button
//                     className="remove-btn"
//                     onClick={() => removeItem(item._id, item.size)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Cart Summary */}
//         {cart.length > 0 && (
//           <div className="cart-summary">
//             <h2>Total</h2>
//             <p>Total Items: {totalItems}</p>
//             <p>Total Price: {CURRENCY} {totalPrice.toFixed(2)}</p>
//             <button className="checkout-btn" onClick={handleCheckout}>
//               Proceed to Checkout
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;


// import React, { useEffect, useState } from "react";
// import "./Cart.css";
// import { FaShoppingCart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// // Dynamic config
// const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
// const CURRENCY = import.meta.env.VITE_CURRENCY || "₹";
// const ROUTES = {
//   products: "/products",
//   orderDetails: "/order-details",
// };

// const Cart = () => {
//   const navigate = useNavigate();

//   const [cart, setCart] = useState(() => {
//     const saved = localStorage.getItem("cart");
//     try {
//       return saved ? JSON.parse(saved) : [];
//     } catch (err) {
//       console.error("Failed to parse cart:", err);
//       return [];
//     }
//   });

//   // ────────────────────────────────────────────────
//   //   IMPORTANT: Remove this block completely
//   //   Cart should NOT listen to its own event
//   // ────────────────────────────────────────────────
//   // useEffect(() => {
//   //   const handleCartUpdate = () => {
//   //     const saved = JSON.parse(localStorage.getItem("cart") || "[]");
//   //     setCart(saved);
//   //   };
//   //   window.addEventListener("cartUpdated", handleCartUpdate);
//   //   return () => window.removeEventListener("cartUpdated", handleCartUpdate);
//   // }, []);

//   // Sync to localStorage + notify other components (Header, badge, etc.)
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//     window.dispatchEvent(new Event("cartUpdated"));
//   }, [cart]);

//   const updateCart = (updater) => {
//     setCart((prev) => {
//       const nextCart = updater(prev);
//       return nextCart;
//     });
//   };

//   const increaseQty = (_id, size) => {
//     updateCart((prev) =>
//       prev.map((item) =>
//         item._id === _id && item.size === size
//           ? { ...item, qty: item.qty + 1 }
//           : item
//       )
//     );
//   };

//   const decreaseQty = (_id, size) => {
//     updateCart((prev) =>
//       prev
//         .map((item) =>
//           item._id === _id && item.size === size
//             ? { ...item, qty: item.qty - 1 }
//             : item
//         )
//         .filter((item) => item.qty > 0)
//     );
//   };

//   const removeItem = (_id, size) => {
//     updateCart((prev) =>
//       prev.filter((item) => !(item._id === _id && item.size === size))
//     );
//   };

//   const totalItems = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
//   const totalPrice = cart.reduce(
//     (sum, item) => sum + (item.price || 0) * (item.qty || 0),
//     0
//   );

//   const handleCheckout = () => {
//     if (!cart.length) {
//       alert("Cart is empty!");
//       return;
//     }

//     localStorage.setItem("cartItems", JSON.stringify(cart));
//     localStorage.setItem("cartTotal", totalPrice.toFixed(2));

//     window.dispatchEvent(new Event("cartUpdated"));
//     navigate(ROUTES.orderDetails);
//   };

//   return (
//     <div className="cart-page">
//       <h1 className="cart-title">Your Cart</h1>

//       <div className="cart-container">
//         {/* Cart Items */}
//         <div className="cart-items">
//           {cart.length === 0 ? (
//             <div className="empty-cart">
//               <FaShoppingCart className="empty-icon" />
//               <h2>Your cart is empty</h2>
//               <p>Add something you love ❤️</p>
//               <button
//                 className="shop-btn"
//                 onClick={() => navigate(ROUTES.products)}
//               >
//                 Continue Shopping
//               </button>
//             </div>
//           ) : (
//             cart.map((item) => (
//               <div
//                 key={`${item._id}-${item.size || ""}`}
//                 className="cart-item"
//               >
//                 <img
//                   src={`${BASE_URL}/${item.image}`}
//                   alt={item.name}
//                   className="cart-img"
//                 />
//                 <div className="cart-info">
//                   <h3>{item.name}</h3>
//                   <p className="price">
//                     {CURRENCY} {item.price}
//                   </p>
//                   {item.size && <p>Size: {item.size}</p>}
//                   <div className="qty-controls">
//                     <button onClick={() => decreaseQty(item._id, item.size)}>
//                       −
//                     </button>
//                     <span>{item.qty}</span>
//                     <button onClick={() => increaseQty(item._id, item.size)}>
//                       +
//                     </button>
//                   </div>
//                   <button
//                     className="remove-btn"
//                     onClick={() => removeItem(item._id, item.size)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Cart Summary */}
//         {cart.length > 0 && (
//           <div className="cart-summary">
//             <h2>Total</h2>
//             <p>Total Items: {totalItems}</p>
//             <p>Total Price: {CURRENCY} {totalPrice.toFixed(2)}</p>
//             <button className="checkout-btn" onClick={handleCheckout}>
//               Proceed to Checkout
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;





import React, { useEffect, useState } from "react";
import "./Cart.css";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Import dynamic config
import { BASE_URL, CURRENCY, ROUTES, MESSAGES, SYMBOLS } from "../utils/config";

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

  // Sync to localStorage + notify other components
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cart]);

  const updateCart = (updater) => {
    setCart((prev) => {
      const nextCart = updater(prev);
      return nextCart;
    });
  };

  const increaseQty = (_id, size) => {
    updateCart((prev) =>
      prev.map((item) =>
        item._id === _id && item.size === size
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decreaseQty = (_id, size) => {
    updateCart((prev) =>
      prev
        .map((item) =>
          item._id === _id && item.size === size
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (_id, size) => {
    updateCart((prev) =>
      prev.filter((item) => !(item._id === _id && item.size === size))
    );
  };

  const totalItems = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.qty || 0),
    0
  );

  const handleCheckout = () => {
    if (!cart.length) {
      alert(MESSAGES.cartEmptyAlert);
      return;
    }

    localStorage.setItem("cartItems", JSON.stringify(cart));
    localStorage.setItem("cartTotal", totalPrice.toFixed(2));

    window.dispatchEvent(new Event("cartUpdated"));
    navigate(ROUTES.orderDetails);
  };

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>

      <div className="cart-container">
        {/* Cart Items */}
        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <FaShoppingCart className="empty-icon" />
              <h2>{MESSAGES.emptyCart}</h2>
              <p>{MESSAGES.emptyCartDesc}</p>
              <button
                className="shop-btn"
                onClick={() => navigate(ROUTES.products)}
              >
                {MESSAGES.continueShopping}
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={`${item._id}-${item.size || ""}`}
                className="cart-item"
              >
                <img
                  src={`${BASE_URL}/${item.image}`}
                  alt={item.name}
                  className="cart-img"
                />
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p className="price">
                    {CURRENCY} {item.price}
                  </p>
                  {item.size && <p>Size: {item.size}</p>}
                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(item._id, item.size)}>
                      {SYMBOLS.decrease}
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item._id, item.size)}>
                      {SYMBOLS.increase}
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item._id, item.size)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="cart-summary">
            <h2>Total</h2>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: {CURRENCY} {totalPrice.toFixed(2)}</p>
            <button className="checkout-btn" onClick={handleCheckout}>
              {MESSAGES.checkout}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;