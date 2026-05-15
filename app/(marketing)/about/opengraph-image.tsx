import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "About NXπ — Negentrophi";
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
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 80% 20%, rgba(157,124,255,0.3) 0%, transparent 50%)",
          }}
        />
        <p style={{ fontSize: "18px", color: "#9D7CFF", fontWeight: "600", margin: "0 0 16px 0", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          ABOUT
        </p>
        <h1 style={{ fontSize: "52px", color: "#F4F6FB", fontWeight: "700", lineHeight: 1.1, margin: "0 0 24px 0" }}>
          We exist to reverse entropy in the enterprise.
        </h1>
        <p style={{ fontSize: "22px", color: "#B9C2D8", margin: 0 }}>
          NXπ — Built for the regulated enterprise.
        </p>
      </div>
    ),
    { ...size }
  );
}
