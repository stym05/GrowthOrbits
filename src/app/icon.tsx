// src/app/icon.tsx
import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "16px",
          background: "#121A33",
          color: "#17B0A0",
          fontSize: "34px",
          fontWeight: 700,
        }}
      >
        G
      </div>
    ),
    size,
  );
}