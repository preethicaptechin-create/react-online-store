// import React, { useState } from "react";
// import { products } from "../Services/Product";
// import { Link } from "react-router-dom";
// import "./Beauty.css";

// const Beauty = () => {

//   // filter beauty products
// const beautyProducts = products.filter(
//   product => product.category === "beauty"
// );
  

//   // quantity state
//   const [counts, setCounts] = useState({});

//   const addItem = id => {
//     setCounts(prev => ({
//       ...prev,
//       [id]: (prev[id] || 0) + 1
//     }));
//   };

//   const removeItem = id => {
//     setCounts(prev => ({
//       ...prev,
//       [id]: Math.max((prev[id] || 0) - 1, 0)
//     }));
//   };

//   return (
//     <div className="beauty-page">

//       <h1>Beauty Products</h1>

//       <div className="beauty-grid">

//         {beautyProducts.map(product => {

//           const qty = counts[product.id] || 0;

//           return (
//             <div key={product.id} className="beauty-card">

//               {/* <img src={product.image} alt={product.name} /> */}
//                            <Link to={`/product/${product.id}`}>
//   <img src={product.image} alt={product.name} />
// </Link>

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

// export default Beauty;



import React from "react";
import { products } from "../Services/Product";
import { Link } from "react-router-dom";
import "./Beauty.css";

const Beauty = () => {



  // filter beauty products
  const beautyProducts = products.filter(
    product => product.category === "beauty"
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
    <div className="beauty-page">

      <h1>Beauty Products</h1>

      <div className="beauty-grid">

        {beautyProducts.map(product => (

          <div key={product.id} className="beauty-card">

            {/* Click image → details page */}
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
              />
            </Link>

            <h3>{product.name}</h3>
            <p>₹ {product.price}</p>

            {/* ✅ Add to Cart */}
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

export default Beauty;
