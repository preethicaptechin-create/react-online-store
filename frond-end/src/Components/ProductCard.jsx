


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
