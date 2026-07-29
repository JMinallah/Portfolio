import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt = `${siteConfig.name} Open Graph image`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(120deg, rgb(30, 19, 12), rgb(72, 49, 29), rgb(150, 112, 63))",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ fontSize: 54, fontWeight: 700, letterSpacing: -1 }}>
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 30,
            marginTop: "20px",
            maxWidth: "900px",
            opacity: 0.9,
            textAlign: "center",
          }}
        >
          {siteConfig.description}
        </div>
      </div>
    ),
    size,
  );
}
