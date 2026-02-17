

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

  // ⭐ THIS LINE UPDATES HEADER COUNT
  window.dispatchEvent(new Event("cartUpdated"));

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
