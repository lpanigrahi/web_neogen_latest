import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NXπ — The Enterprise AI Operations Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050914",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Aurora gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at 20% 20%, rgba(91,141,239,0.4) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(157,124,255,0.3) 0%, transparent 50%)",
          }}
        />
        {/* Logo mark */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "linear-gradient(135deg, #5B8DEF, #9D7CFF)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              color: "white",
              fontWeight: "700",
            }}
          >
            π
          </div>
          <span style={{ fontSize: "28px", color: "#F4F6FB", fontWeight: "600" }}>NXπ</span>
        </div>
        <h1
          style={{
            fontSize: "56px",
            color: "#F4F6FB",
            fontWeight: "700",
            lineHeight: 1.1,
            margin: "0 0 24px 0",
            maxWidth: "800px",
          }}
        >
          The Enterprise AI Operations Platform
        </h1>
        <p style={{ fontSize: "24px", color: "#B9C2D8", margin: 0, maxWidth: "700px", lineHeight: 1.4 }}>
          Connect SAP, Salesforce, and every data asset through governed agents.
        </p>
      </div>
    ),
    { ...size }
  );
}
