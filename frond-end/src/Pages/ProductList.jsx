// import ProductCard from "../Components/Productcard";
// import { products } from "../Services/Product";
// import "./ProductList.css";

// function ProductList() {
//   return (
//     <div className="product-grid">
//       {products.map((product) => (
//         <ProductCard
//           key={product.id}
//           product={product}
//         />
//       ))}
//     </div>
//   );
// }

// export default ProductList;


// ProductList.jsx
import { useSearchParams } from "react-router-dom";
import { products } from "../Services/Product";
import ProductCard from "../Components/Productcard";

function ProductList() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search")?.trim().toLowerCase() || "";

  const filteredProducts = products.filter((p) => {
    if (!searchTerm) return true;
    const term = searchTerm;
    return (
      (p.name || "").toLowerCase().includes(term) ||
      (p.category || "").toLowerCase().includes(term)
    );
  });

  return (
    <div style={{ padding: "20px", maxWidth: "1400px", margin: "0 auto" }}>
      <h1>
        {searchTerm
          ? `Results for "${searchTerm}" (${filteredProducts.length})`
          : "All Products"}
      </h1>

      {filteredProducts.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666", fontSize: "1.2rem" }}>
          No products found
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
