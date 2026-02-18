


import React, { useState } from "react";
import { products } from "../Services/Product";
import { Link } from "react-router-dom";
import "./Kids.css";

const Kids = () => {

  // store selected sizes per product
  const [sizes, setSizes] = useState({});

  // ✅ toast state (added)
  const [toast, setToast] = useState(null);

  // ✅ toast helper (added)
  const showToast = (message, type = "success") => {
    setToast(null);
    setTimeout(() => setToast({ message, type }), 100);
    setTimeout(() => setToast(null), 2800);
  };

  // filter kids products
  const kidsProducts = products.filter(
    product => product.category === "kids"
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
    showToast("Please select size", "error");
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

  // ⭐ sync header/cart badge
  window.dispatchEvent(new Event("cartUpdated"));

  showToast("Item added to cart ✓", "success");
};


  return (
    <div className="kids-page">

      {/* ✅ toast display (added) */}
      {toast && (
        <div className={`snackbar snackbar-${toast.type}`}>
          {toast.message}
        </div>
      )}

      <h1>Kids Collection</h1>

      <div className="kids-grid">

        {kidsProducts.map(product => {

          const selectedSize = sizes[product.id];

          return (

            <div key={product.id} className="kids-card">

              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                />
              </Link>

              <h3>{product.name}</h3>
              <p>₹ {product.price}</p>

              {selectedSize && (
                <p className="selected-size">
                  Size: {selectedSize}
                </p>
              )}

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

export default Kids;
