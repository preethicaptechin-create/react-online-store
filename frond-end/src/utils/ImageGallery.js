import React, { useEffect, useState } from "react";
import axios from "axios";

function ImageGallery() {
  const [images, setImages] = useState([]); // State to store all image URLs

  // Fetch all images from backend when component mounts
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("http://localhost:5000/images");
        setImages(res.data); // Save array of image URLs
      } catch (err) {
        console.error("Failed to fetch images:", err);
      }
    };

    fetchImages();
  }, []); // empty dependency array => run once on mount

  return (
    <div>
      <h2>Image Gallery</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map((imageUrl, idx) => (
          <img
            key={idx}
            src={imageUrl} // Display each image
            alt={`Uploaded ${idx}`}
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              margin: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;