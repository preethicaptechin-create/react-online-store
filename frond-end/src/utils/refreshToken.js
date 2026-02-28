// export const refreshAccessToken = async () => {
//   try {
//     const res = await fetch("http://localhost:5000/api/auth/refresh-token", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         refreshToken: localStorage.getItem("refreshToken"),
//       }),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       localStorage.setItem("accessToken", data.accessToken);
//       return data.accessToken;
//     } else {
//       localStorage.clear();
//       window.location.href = "/login";
//     }

//   } catch (err) {
//     console.error("Refresh error:", err);
//     localStorage.clear();
//     window.location.href = "/login";
//   }
// };


export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  // Early exit — most common failure reason
  if (!refreshToken) {
    console.warn("No refresh token found in localStorage");
    return null; // Let caller decide what to do (usually redirect to login)
  }

  try {
    const res = await fetch("http://localhost:5000/api/auth/refresh-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
      // Very important in many setups (cookies, credentials)
      // credentials: "include",   ← uncomment if backend uses httpOnly cookies
    });

    if (!res.ok) {
      let errorData;
      try {
        errorData = await res.json();
      } catch {
        errorData = { message: `Refresh failed with status ${res.status}` };
      }

      console.warn("Refresh token request failed:", res.status, errorData);

      // 401/403 usually means refresh token is invalid, expired or revoked
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        // Do NOT clear everything — keep theme, cart, etc. if you have them
        // localStorage.clear();  ← usually too aggressive
      }

      return null; // Signal failure → caller should redirect to login
    }

    const data = await res.json();

    // Some backends return { token: "new-access-token" } or { accessToken, refreshToken }
    const newAccessToken = data.accessToken || data.token;

    if (!newAccessToken) {
      console.error("Refresh response did not contain access token", data);
      return null;
    }

    localStorage.setItem("accessToken", newAccessToken);

    // If backend supports refresh token rotation (recommended security practice)
    if (data.refreshToken) {
      localStorage.setItem("refreshToken", data.refreshToken);
      console.log("Refresh token rotated");
    }

    console.log("Access token refreshed successfully");
    return newAccessToken;

  } catch (err) {
    console.error("Refresh network error:", err);
    // Do NOT redirect here — let the calling component handle UI/redirect
    return null;
  }
};