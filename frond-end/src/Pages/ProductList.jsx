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
// import { useSearchParams } from "react-router-dom";
// import { products } from "../Services/Product";
// import ProductCard from "../Components/Productcard";

// function ProductList() {
//   const [searchParams] = useSearchParams();
//   const searchTerm = searchParams.get("search")?.trim().toLowerCase() || "";

//   const filteredProducts = products.filter((p) => {
//     if (!searchTerm) return true;
//     const term = searchTerm;
//     return (
//       (p.name || "").toLowerCase().includes(term) ||
//       (p.category || "").toLowerCase().includes(term)
//     );
//   });

//   return (
//     <div style={{ padding: "20px", maxWidth: "1400px", margin: "0 auto" }}>
//       <h1>
//         {searchTerm
//           ? `Results for "${searchTerm}" (${filteredProducts.length})`
//           : "All Products"}
//       </h1>

//       {filteredProducts.length === 0 ? (
//         <p style={{ textAlign: "center", color: "#666", fontSize: "1.2rem" }}>
//           No products found
//         </p>
//       ) : (
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
//             gap: "24px",
//           }}
//         >
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductList;




// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import axios from "axios";
// import ProductCard from "../Components/ProductCard";

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [searchParams] = useSearchParams();

//   const searchTerm = searchParams.get("search")?.trim().toLowerCase() || "";

// ;


//   useEffect(() => {
//   axios
//      .get(`${import.meta.env.VITE_API_URL}/api/products`)
//     .then((res) => {
//       console.log("Products:", res.data);
//       setProducts(res.data);
//     })
//     .catch((err) => {
//       console.error("Error:", err);
//     });
// }, []);

//  const filteredProducts = (products || []).filter((p) => {
//     if (!searchTerm) return true;
//     return (
//       (p.name || "").toLowerCase().includes(searchTerm) ||
//       (p.category || "").toLowerCase().includes(searchTerm)
//     );
//   });

//   return (
//     <div style={{ padding: "20px", maxWidth: "1400px", margin: "0 auto" }}>
//       <h1>
//         {searchTerm
//           ? `Results for "${searchTerm}" (${filteredProducts.length})`
//           : "All Products"}
//       </h1>

//       {filteredProducts.length === 0 ? (
//         <p style={{ textAlign: "center", color: "#666", fontSize: "1.2rem" }}>
//           No products found
//         </p>
//       ) : (
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
//             gap: "24px",
//           }}
//         >
//           {filteredProducts.map((product) => (
//             <ProductCard key={product._id} product={product} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductList;



// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import axios from "axios";
// import ProductCard from "../Components/ProductCard";

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [searchParams] = useSearchParams();

//   const searchTerm =
//     searchParams.get("search")?.trim().toLowerCase() || "";

//   // ✅ ADD THIS (fallback safety)
//   // const API_URL =
//   //   import.meta.env.VITE_API_URL || "http://localhost:5000"; 

//   const API_URL = import.meta.env.VITE_API_URL;
//   console.log("API URL:", API_URL);


//   useEffect(() => {
//     console.log("API URL:", API_URL);

//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get(
//           `${API_URL}/api/products`
//         );

//         if (Array.isArray(res.data)) {
//           setProducts(res.data);
//         } else {
//           console.error("API did not return array:", res.data);
//           setProducts([]);
//         }
//       } catch (error) {
//         console.error("Fetch failed:", error);
//         setProducts([]);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const filteredProducts = Array.isArray(products)
//     ? products.filter((p) => {
//         if (!searchTerm) return true;
//         return (
//           (p.name || "").toLowerCase().includes(searchTerm) ||
//           (p.category || "").toLowerCase().includes(searchTerm)
//         );
//       })
//     : [];

//   return (
//     <div style={{ padding: "20px", maxWidth: "1400px", margin: "0 auto" }}>
//       <h1>
//         {searchTerm
//           ? `Results for "${searchTerm}" (${filteredProducts.length})`
//           : "All Products"}
//       </h1>

//       {filteredProducts.length === 0 ? (
//         <p style={{ textAlign: "center", color: "#666", fontSize: "1.2rem" }}>
//           No products found
//         </p>
//       ) : (
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
//             gap: "24px",
//           }}
//         >
//           {filteredProducts.map((product) => (
//             <ProductCard key={product._id} product={product} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductList;





// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import axios from "axios";
// import ProductCard from "../Components/ProductCard";

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [searchParams] = useSearchParams();

//   const searchTerm =
//     searchParams.get("search")?.trim().toLowerCase() || "";

//   // ✅ SAFE fallback (VERY IMPORTANT)
//   const API_URL =
//     import.meta.env.VITE_API_URL || "http://localhost:5000";

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         // const res = await axios.get(`${API_URL}/api/products`);
//         const res = await axios.get(
//   `${API_URL}/api/products?search=${searchTerm}`
// );

//         if (Array.isArray(res.data)) {
//           setProducts(res.data);
//         } else {
//           console.error("API did not return array:", res.data);
//           setProducts([]);
//         }
//       } catch (error) {
//         console.error("Fetch failed:", error);
//         setProducts([]);
//       }
//     };

//     fetchProducts();
//   }, [API_URL]);

//   const filteredProducts = products.filter((p) => {
//     if (!searchTerm) return true;

//     return (
//       (p.name || "").toLowerCase().includes(searchTerm) ||
//       (p.category || "").toLowerCase().includes(searchTerm)
//     );
//   });

//   return (
//     <div style={{ padding: "20px", maxWidth: "1400px", margin: "0 auto" }}>
//       <h1>
//         {searchTerm
//           ? `Results for "${searchTerm}" (${filteredProducts.length})`
//           : "All Products"}
//       </h1>

//       {filteredProducts.length === 0 ? (
//         <p style={{ textAlign: "center", color: "#666", fontSize: "1.2rem" }}>
//           No products found
//         </p>
//       ) : (
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
//             gap: "24px",
//           }}
//         >
//           {filteredProducts.map((product) => (
//             <ProductCard key={product._id} product={product} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductList;




// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import axios from "axios";
// import ProductCard from "../Components/ProductCard";

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [searchParams] = useSearchParams();

//   const searchTerm =
//     searchParams.get("search")?.trim().toLowerCase() || "";

//   const API_URL =
//     import.meta.env.VITE_API_URL || "http://localhost:5000";

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get(
//           `${API_URL}/api/products?search=${searchTerm}`
//         );

//         // ✅ FIX HERE
//         if (Array.isArray(res.data.data)) {
//           setProducts(res.data.data);   // ✅ HERE
//         } else {
//           console.error("API did not return array:", res.data);
//           setProducts([]);
//         }
//       } catch (error) {
//         console.error("Fetch failed:", error);
//         setProducts([]);
//       }
//     };

//     fetchProducts();
//   }, [API_URL, searchTerm]); // ✅ searchTerm add panniruken

//   const filteredProducts = products.filter((p) => {
//     if (!searchTerm) return true;

//     return (
//       (p.name || "").toLowerCase().includes(searchTerm) ||
//       (p.category || "").toLowerCase().includes(searchTerm)
//     );
//   });

//   return (
//     <div style={{ padding: "20px", maxWidth: "1400px", margin: "0 auto" }}>
//       <h1>
//         {searchTerm
//           ? `Results for "${searchTerm}" (${filteredProducts.length})`
//           : "All Products"}
//       </h1>

//       {filteredProducts.length === 0 ? (
//         <p style={{ textAlign: "center", color: "#666", fontSize: "1.2rem" }}>
//           No products found
//         </p>
//       ) : (
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
//             gap: "24px",
//           }}
//         >
//           {filteredProducts.map((product) => (
//             <ProductCard key={product._id} product={product} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductList;

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
import "./ProductList.css"

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();

  // 🔹 pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8; // ⭐ 4 columns × 2 rows

  const searchTerm =
    searchParams.get("search")?.trim().toLowerCase() || "";

  const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `${API_URL}/api/products?search=${searchTerm}`
        );

        if (Array.isArray(res.data.data)) {
          setProducts(res.data.data);
          setCurrentPage(1); // ⭐ search change aagum pothu page reset
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Fetch failed:", error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, [API_URL, searchTerm]);

  // 🔹 filter
  const filteredProducts = products.filter((p) => {
    if (!searchTerm) return true;

    return (
      (p.name || "").toLowerCase().includes(searchTerm) ||
      (p.category || "").toLowerCase().includes(searchTerm)
    );
  });

  // 🔹 pagination calculation
  const totalPages = Math.ceil(
    filteredProducts.length / ITEMS_PER_PAGE
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentProducts = filteredProducts.slice(
    startIndex,
    endIndex
  );

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
        <>
          {/* PRODUCTS GRID */}
          <div
            className="products-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
            }}
          >
            {currentProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                marginTop: "30px",
              }}
            >
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  style={{
                    background:
                      currentPage === i + 1 ? "#2f6bff" : "#fff",
                    color:
                      currentPage === i + 1 ? "#fff" : "#000",
                    border: "1px solid #ddd",
                    padding: "6px 12px",
                    borderRadius: "6px",
                  }}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ProductList;