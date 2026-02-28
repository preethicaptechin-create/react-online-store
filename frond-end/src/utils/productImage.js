/**
 * Returns the full URL for a product image.
 * Backend stores only the filename (e.g. "1234567890-123456789.png")
 * and serves images at /uploads/filename
 */
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export function getProductImageUrl(image) {
  if (!image) return "https://via.placeholder.com/300x300?text=No+Image";
  if (image.startsWith("http")) return image;
  return `${BASE_URL}/uploads/${image}`;
}
