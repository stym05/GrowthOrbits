import { ImageResponse } from "next/og";

export const runtime = "edge";

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
          position: "relative",
          overflow: "hidden",
          borderRadius: "16px",
          background: "#121a33",
        }}
      >
        <div
          style={{
            width: "38px",
            height: "38px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            border: "3px solid #17b0a0",
            borderRadius: "999px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              display: "flex",
              borderRadius: "999px",
              background: "#ffffff",
            }}
          />

          <div
            style={{
              width: "9px",
              height: "9px",
              display: "flex",
              position: "absolute",
              top: "-5px",
              right: "2px",
              borderRadius: "999px",
              background: "#c8871c",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}