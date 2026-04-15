import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt = `${siteConfig.name} Twitter image`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(140deg, rgb(7, 19, 37), rgb(25, 59, 109), rgb(41, 104, 169))",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ fontSize: 52, fontWeight: 700, letterSpacing: -1 }}>
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 28,
            marginTop: "18px",
            maxWidth: "920px",
            opacity: 0.9,
            textAlign: "center",
          }}
        >
          Built for SEO, AEO, and GEO performance.
        </div>
      </div>
    ),
    size,
  );
}
