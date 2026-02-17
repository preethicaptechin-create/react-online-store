// import React, { useState } from "react";
// import { products } from "../Services/Product";
// import { Link } from "react-router-dom";
// import "./Men.css";

// const Men = () => {

//   // filter men products
// const menProducts = products.filter(
//   product => product.category === "men"
// );

// const [counts, setCounts] = useState({});

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
//     <div className="men-page">

//       <h1>Men's Collection</h1>

//       <div className="men-grid">

//         {menProducts.map(product => {

//           const qty = counts[product.id] || 0;

//           return (
//             <div key={product.id} className="men-card">

//               {/* <img src={product.image} alt={product.name} /> */}
//               <Link to={`/product/${product.id}`}>
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

// export default Men;


// import React from "react";
// import { products } from "../Services/Product";
// import { Link, useNavigate } from "react-router-dom";
// import "./Men.css";

// const Men = () => {

//   const navigate = useNavigate();

//   // filter men products
//   const menProducts = products.filter(
//     product => product.category === "men"
//   );

//   // ✅ Add to cart function
//   const handleAddToCart = (product) => {

//     const existingCart =
//       JSON.parse(localStorage.getItem("cart")) || [];

//     const item = existingCart.find(
//       i => i.id === product.id
//     );

//     if (item) {
//       item.qty += 1;
//     } else {
//       existingCart.push({ ...product, qty: 1 });
//     }

//     localStorage.setItem(
//       "cart",
//       JSON.stringify(existingCart)
//     );

//     // 👉 go to cart page
//     navigate("/cart");
//   };

//   return (
//     <div className="men-page">

//       <h1>Men's Collection</h1>

//       <div className="men-grid">

//         {menProducts.map(product => (

//           <div key={product.id} className="men-card">

//             {/* Click image → details */}
//             <Link to={`/product/${product.id}`}>
//               <img
//                 src={product.image}
//                 alt={product.name}
//               />
//             </Link>

//             <h3>{product.name}</h3>
//             <p>₹ {product.price}</p>

//             {/* ✅ Add to cart button */}
//             <button
//               className="add-btn"
//               onClick={() => handleAddToCart(product)}
//             >
//               Add to Cart
//             </button>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };

// export default Men;





// import React from "react";
// import { products } from "../Services/Product";
// import { Link, useNavigate } from "react-router-dom";
// import "./Men.css";

// const Men = () => {

//   const navigate = useNavigate();

//   // filter men products
//   const menProducts = products.filter(
//     product => product.category === "men"
//   );

//   // ✅ Add to cart function
//     const handleAddToCart = () => {

//     if (needsSize && !size) {
//       alert("Please select size");
//       return;
//     }

//     const existingCart =
//       JSON.parse(localStorage.getItem("cart")) || [];

//     const item = existingCart.find(i =>
//       needsSize
//         ? i.id === product.id && i.size === size
//         : i.id === product.id
//     );
//     if (item) {
//       item.qty += 1;
//     } else {
//       existingCart.push({ ...product, qty: 1 });
//     }

//     localStorage.setItem(
//       "cart",
//       JSON.stringify(existingCart)
//     );

//     // 👉 go to cart page
//     navigate("/cart");
//   };

//   return (
//     <div className="men-page">

//       <h1>Men's Collection</h1>

//       <div className="men-grid">

//         {menProducts.map(product => (

//           <div key={product.id} className="men-card">

//             {/* Click image → details */}
//             <Link to={`/product/${product.id}`}>
//               <img
//                 src={product.image}
//                 alt={product.name}
//               />
//             </Link>

//           <h3>{product.name}</h3>
// <p>₹ {product.price}</p>

// {/* show selected size if exists */}
// {localStorage.getItem(`size-${product.id}`) && (
//   <p className="selected-size">
//     Size: {JSON.parse(
//       localStorage.getItem(`size-${product.id}`)
//     )}
//   </p>
// )}
// <div className="size-preview">
//   {[6, 7, 8, 9, 10].map(s => {
//     const savedSize = JSON.parse(
//       localStorage.getItem(`size-${product.id}`)
//     );

//     return (
//       <span
//         key={s}
//         className={
//           savedSize === s
//             ? "size-box active"
//             : "size-box"
//         }
//       >
//         {s}
//       </span>
//     );
//   })}
// </div>


//             {/* ✅ Add to cart button */}
//             <button
//               className="add-btn"
//               onClick={() => handleAddToCart(product)}
//             >
//               Add to Cart
//             </button>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };

// export default Men;

import React, { useState } from "react";
import { products } from "../Services/Product";
import { Link } from "react-router-dom";
import "./Men.css";

const Men = () => {

  // store selected sizes per product
  const [sizes, setSizes] = useState({});

  // filter men products
  const menProducts = products.filter(
    product => product.category === "men"
  );

  // select size
  const handleSizeSelect = (productId, size) => {
    setSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

  // add to cart
  const handleAddToCart = (product) => {

    const selectedSize = sizes[product.id];

    if (!selectedSize) {
      alert("Please select size");
      return;
    }

    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const item = existingCart.find(
      i =>
        i.id === product.id &&
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

    alert("Item added to cart 🛒");
  };

  return (
    <div className="men-page">

      <h1>Men's Collection</h1>

      <div className="men-grid">

        {menProducts.map(product => {

          const selectedSize = sizes[product.id];

          return (

            <div key={product.id} className="men-card">

              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                />
              </Link>

              <h3>{product.name}</h3>
              <p>₹ {product.price}</p>

              {/* selected size */}
              {selectedSize && (
                <p className="selected-size">
                  Size: {selectedSize}
                </p>
              )}

              {/* size buttons */}
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
                      handleSizeSelect(product.id, s)
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

export default Men;
