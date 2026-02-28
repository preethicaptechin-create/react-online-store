import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function UploadGallery() {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);

  const fetchImages = async () => {
    setFetching(true);
    try {
      const res = await axios.get(`${API_URL}/images`);
      if (Array.isArray(res.data)) {
        setImages(res.data);
      } else {
        setImages([]);
      }
    } catch (err) {
      setImages([]);
      console.error("Failed to fetch images:", err);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleUpload = async () => {
    if (!file) return alert("Select a file first");
    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      await axios.post(`${API_URL}/upload`, formData);
      setFile(null);
      fetchImages();
      alert("Upload successful!");
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Image Upload & Gallery</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button
          onClick={handleUpload}
          style={{ marginLeft: "10px" }}
          disabled={loading}
        >
          Upload
        </button>
        {loading && <span style={{ marginLeft: "10px" }}>Uploading...</span>}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {fetching ? (
          <p>Loading images...</p>
        ) : images.length === 0 ? (
          <p>No images uploaded yet.</p>
        ) : (
          images.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`Uploaded ${idx}`}
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                margin: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/200x200?text=Image+Not+Found";
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default UploadGallery;
