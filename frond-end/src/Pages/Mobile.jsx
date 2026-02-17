// import React from "react";
// import { products } from "../Services/Product"; // adjust path if needed
// import "./Mobile.css"

// const Mobile = () => {

//   // filter shoe products
//   const mobileProducts = products.filter(product =>
//     product.name.toLowerCase().includes("mobile")
//   );

//   return (
//     <div className="mobile-page">

//       <h1>Mobile Collection</h1>

//       <div className="mobile-grid">

//         {mobileProducts.map(product => (

//           <div key={product.id} className="mobile-card">

//             <img src={product.image} alt={product.name} />

//             <h3>{product.name}</h3>

//             <p>₹ {product.price}</p>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };

// export default Mobile;

// import React, { useState } from "react";
// import { products } from "../Services/Product";
// import { Link } from "react-router-dom";
// import "./Mobile.css";

// const Mobile = () => {

//   // filter mobile products
// const mobileProducts = products.filter(
//   product => product.category === "mobile"
// );
//   // quantity state
//   const [counts, setCounts] = useState({});

//   // animation state per product
//   const [anim, setAnim] = useState({});

//   const addItem = id => {
//     setCounts(prev => ({
//       ...prev,
//       [id]: (prev[id] || 0) + 1
//     }));

//     setAnim(prev => ({ ...prev, [id]: "slide-right" }));
//     setTimeout(() => {
//       setAnim(prev => ({ ...prev, [id]: "" }));
//     }, 200);
//   };

//   const removeItem = id => {
//     setCounts(prev => ({
//       ...prev,
//       [id]: Math.max((prev[id] || 0) - 1, 0)
//     }));

//     setAnim(prev => ({ ...prev, [id]: "slide-left" }));
//     setTimeout(() => {
//       setAnim(prev => ({ ...prev, [id]: "" }));
//     }, 200);
//   };

//   return (
//     <div className="mobile-page">

//       <h1>Mobile Collection</h1>

//       <div className="mobile-grid">

//         {mobileProducts.map(product => {

//           const qty = counts[product.id] || 0;

//           return (
//             <div key={product.id} className="mobile-card">

//               {/* <img src={product.image} alt={product.name} /> */}
//                <Link to={`/product/${product.id}`}>
//                 <img src={product.image} alt={product.name} />
//               </Link>

//               <h3>{product.name}</h3>
//               <p>₹ {product.price}</p>

//               <div className="cart-controls">

//                 <button
//                   className="cart-btn"
//                   onClick={() => removeItem(product.id)}
//                 >
//                   −
//                 </button>

//                 <span>{qty}</span>

//                 <button
//                   className="cart-btn"
//                   onClick={() => addItem(product.id)}
//                 >
//                   +
//                 </button>

//               </div>


//             </div>
//           );
//         })}

//       </div>
//     </div>
//   );
// };

// export default Mobile;


import React from "react";
import { products } from "../Services/Product";
import { Link } from "react-router-dom";
import "./Mobile.css";

const Mobile = () => {



  // filter mobile products
  const mobileProducts = products.filter(
    product => product.category === "mobile"
  );

  // ✅ Add to cart
   const handleAddToCart = (product) => {

    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const item = existingCart.find(
      i => i.id === product.id
    );

    if (item) {
      item.qty += 1;
    } else {
      existingCart.push({ ...product, qty: 1 });
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(existingCart)
    );

    // ✅ feedback
    alert("Item added to cart 🛒");
  };


  return (
    <div className="mobile-page">

      <h1>Mobile Collection</h1>

      <div className="mobile-grid">

        {mobileProducts.map(product => (

          <div key={product.id} className="mobile-card">

            {/* click image → details */}
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
              />
            </Link>

            <h3>{product.name}</h3>
            <p>₹ {product.price}</p>

            {/* ✅ Add to cart */}
            <button
              className="add-btn"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Mobile;
