export const refreshAccessToken = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/auth/refresh-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: localStorage.getItem("refreshToken"),
      }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("accessToken", data.accessToken);
      return data.accessToken;
    } else {
      localStorage.clear();
      window.location.href = "/login";
    }

  } catch (err) {
    console.error("Refresh error:", err);
    localStorage.clear();
    window.location.href = "/login";
  }
};