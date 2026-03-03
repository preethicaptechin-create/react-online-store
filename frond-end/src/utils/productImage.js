/**
 * Returns the full URL for a product image.
 * Backend stores only the filename (e.g. "1234567890-123456789.png")
 * and serves images at /uploads/filename
 */
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Inline SVG placeholder (no network request, works offline, avoids ERR_NAME_NOT_RESOLVED)
export const PLACEHOLDER_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23e0e0e0' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-size='14'%3ENo image%3C/text%3E%3C/svg%3E";

export function getProductImageUrl(image) {
  if (!image) return PLACEHOLDER_IMAGE;
  if (image.startsWith("http")) return image;
  return `${BASE_URL}/uploads/${image}`;
}
