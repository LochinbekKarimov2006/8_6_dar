import React from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

const ErrorPage = ({
  errorCode = "404",
  errorMessage = "Afsuski, siz qidirayotgan sahifa topilmadi.",
}) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #e0f1fe, #ccfbf1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "400px", width: "100%", textAlign: "center" }}>
        <AlertTriangle
          style={{
            width: "48px",
            height: "48px",
            color: "#eab308",
            margin: "0 auto",
          }}
        />
        <h2
          style={{
            marginTop: "1.5rem",
            fontSize: "1.875rem",
            fontWeight: "bold",
            color: "#1f2937",
          }}
        >
          Xatolik yuz berdi
        </h2>
        <p
          style={{
            marginTop: "0.5rem",
            fontSize: "0.875rem",
            color: "#4b5563",
          }}
        >
          Xato kodi: {errorCode}
        </p>

        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            backgroundColor: "#fee2e2",
            borderRadius: "0.375rem",
            border: "1px solid #f87171",
          }}
        >
          <h3 style={{ fontWeight: "bold", color: "#991b1b" }}>Diqqat!</h3>
          <p style={{ marginTop: "0.5rem", color: "#7f1d1d" }}>
            {errorMessage}
          </p>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <button
            onClick={() => window.location.reload()}
            style={{
              width: "100%",
              padding: "0.5rem 1rem",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "0.25rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <RefreshCw
              style={{ marginRight: "0.5rem", width: "16px", height: "16px" }}
            />
            Sahifani yangilash
          </button>
          <button
            onClick={() => (window.location.href = "/")}
            style={{
              width: "100%",
              padding: "0.5rem 1rem",
              backgroundColor: "white",
              color: "#3b82f6",
              border: "1px solid #3b82f6",
              borderRadius: "0.25rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Home
              style={{ marginRight: "0.5rem", width: "16px", height: "16px" }}
            />
            Bosh sahifaga qaytish
          </button>
        </div>

        <p
          style={{ marginTop: "2rem", fontSize: "0.875rem", color: "#4b5563" }}
        >
          Agar muammo davom etsa, iltimos{" "}
          <a
            href="https://t.me/NT20959"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#3b82f6", textDecoration: "none" }}
          >
            yordam markazimiz
          </a>{" "}
          bilan bog'laning.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
