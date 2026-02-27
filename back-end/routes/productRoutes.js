
// const express = require("express");
// const router = express.Router();

// const { getProducts } = require("../controllers/productController");

// router.get("/", getProducts);
// // router.get("/:id", getProductById);


// module.exports = router;


// const multer = require("multer");
// const path = require("path");

// const express = require("express");
// const router = express.Router();

// const {
//   getProducts,
//   createProduct
// } = require("../controllers/productController");

// // GET all products
// router.get("/", getProducts);

// // CREATE new product
// router.post("/", createProduct);

// // (Optional) GET product by ID
// // router.get("/:id", getProductById);

// module.exports = router;











// const express = require("express");
// const router = express.Router();

// const upload = require("../middleware/upload");

// const {
//   getProducts,
//   createProduct
// } = require("../controllers/productController");

// // GET all products
// router.get("/", getProducts);

// // CREATE product (with image upload)
// router.post("/", upload.single("image"), createProduct);

// module.exports = router;



// const express = require("express");
// const router = express.Router();

// const upload = require("../middleware/upload");
// const { protect } = require("../middleware/authMiddleware");

// const {
//   getProducts,
//   getSingleProduct,   // 👈 add this
//   createProduct
// } = require("../controllers/productController");

// // GET all products
// router.get("/", getProducts);

// // ✅ GET single product (VERY IMPORTANT)
// router.get("/:id", getSingleProduct);

// // CREATE product (with image upload)
// // router.post("/", upload.single("image"), createProduct);
// router.post("/", protect, upload.single("image"), createProduct);

// module.exports = router;





// const express = require("express");
// const router = express.Router();

// const upload = require("../middleware/upload");
// const adminAuth = require("../middleware/adminauthMiddleware");

// const {
//   getProducts,
//   getSingleProduct,
//   createProduct,
//   updateProduct,
//   deleteProduct
// } = require("../controllers/productController");

// // ✅ PUBLIC: GET all products
// router.get("/", getProducts);

// // ✅ PUBLIC: GET single product
// router.get("/:id", getSingleProduct);

// // ✅ ADMIN ONLY: CREATE product (with image)
// router.post("/", adminAuth, upload.single("image"), createProduct);

// // ✅ ADMIN ONLY: UPDATE product
// router.put("/:id", adminAuth, upload.single("image"), updateProduct);

// // ✅ ADMIN ONLY: DELETE product
// router.delete("/:id", adminAuth, deleteProduct);

// module.exports = router;


const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const adminAuth = require("../middleware/adminauthMiddleware");

const {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// PUBLIC routes
router.get("/", getProducts);
router.get("/:id", getSingleProduct);

// ADMIN routes
router.post("/", adminAuth, upload.single("image"), createProduct);
router.put("/:id", adminAuth, upload.single("image"), updateProduct);
router.delete("/:id", adminAuth, deleteProduct);

module.exports = router;