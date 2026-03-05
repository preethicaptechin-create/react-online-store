import axios from "axios";

// const API_URL = "http://localhost:5000/api/products";

const BASE_URL = import.meta.env.VITE_API_URL;
const API_URL = `${BASE_URL}/api/products`;


// GET all products
export const getProducts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// CREATE product (admin only)
export const createProduct = async (productData, token) => {
  const formData = new FormData();
  formData.append("name", productData.name);
  formData.append("price", productData.price);
  if (productData.image) formData.append("image", productData.image);

  const res = await axios.post(API_URL, formData, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data;
};