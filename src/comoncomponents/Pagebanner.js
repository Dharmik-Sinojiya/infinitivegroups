import React from "react";
import { useLocation, Link } from "react-router-dom";
import "@fontsource/poppins"; // If using npm-installed fonts

export default function PageBanner({ title }) {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  return (
    <div
     style={{
  minHeight: "250px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  backgroundImage: "url('/img/banner2.jpg')", // ✅ Image background
  backgroundSize: "cover",      // Makes image cover the container
  backgroundPosition: "center", // Centers the image
  backgroundRepeat: "no-repeat",
  color: "#ffffffff",
  position: "relative",
  fontFamily: "'Poppins', sans-serif",
}}

    >
      {/* Optional overlay */}
      <div
        style={{
          padding: "30px 20px",
          borderRadius: "8px",
          fontFamily: "'Poppins', sans-serif", // 👈 Change font here
        }}
      >
        <h2 style={{ margin: 0, fontWeight: 700 }}>{title}</h2>
        <p style={{ marginTop: "10px", color: "#ffffffff" }}>
          <Link to="/" style={{ color: "#FFD700", textDecoration: "none" }}>
            Home
          </Link>
          {pathParts.map((part, index) => (
            <span key={index}>
              {" "}
              /{" "}
              <span style={{ textTransform: "capitalize", color: "#00d9ff" }}>
                {decodeURIComponent(part)}
              </span>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
