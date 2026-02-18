




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

  // ⭐ IMPORTANT — sync cart badge everywhere
  window.dispatchEvent(new Event("cartUpdated"));

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
