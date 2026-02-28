// utils/authFetch.js
import { refreshAccessToken } from "./refreshToken"; // adjust path if needed

const BASE_URL = "http://localhost:5000";

export const authFetch = async (endpoint, options = {}) => {
  let token = localStorage.getItem("accessToken");

  if (!token) {
    throw new Error("No access token available");
  }

  const defaultHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const headers = { ...defaultHeaders, ...options.headers };

  let response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  // Handle 401 → try refresh
  if (response.status === 401) {
    console.log("401 → attempting token refresh...");

    const newToken = await refreshAccessToken();

    if (!newToken) {
      // Refresh failed → force logout / redirect
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      window.location.href = "/login"; // or use navigate if inside Router context
      throw new Error("Session expired - please log in again");
    }

    // Retry with new token
    headers.Authorization = `Bearer ${newToken}`;
    response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });
  }

  if (!response.ok) {
    let errorData;
    try {
      errorData = await response.json();
    } catch {
      errorData = { message: `Request failed with status ${response.status}` };
    }
    throw new Error(errorData.message || "Request failed");
  }

  return response.json();
};