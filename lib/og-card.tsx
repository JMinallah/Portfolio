import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { siteConfig } from "@/lib/site-config";

export const previewSize = { width: 1200, height: 630 };
export const previewAlt = `${siteConfig.name}, full stack developer: the portfolio's cream book cover lying on a forest floor`;

const cream = "#fcf6ec";
const forest = "#102c26";
const cloth = "#eadbbd";

async function asset(name: string) {
  return readFile(join(process.cwd(), "assets/og", name));
}

async function dataUri(name: string, type: string) {
  return `data:${type};base64,${(await asset(name)).toString("base64")}`;
}

// The link-preview image: the site's cover lying on the forest floor, with
// the name, role and address beside it, large enough to read as a thumbnail.
export async function renderPreview() {
  const [serif, sans, forestFloor, portrait] = await Promise.all([
    asset("IBMPlexSerif-SemiBold.ttf"),
    asset("IBMPlexSans-Medium.ttf"),
    dataUri("forest.jpg", "image/jpeg"),
    dataUri("portrait.jpg", "image/jpeg"),
  ]);
  const host = new URL(siteConfig.url).host;
  const showHost = host !== "example.com";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          padding: "0 80px",
          gap: 72,
          backgroundImage: `linear-gradient(rgba(16,44,38,0.35), rgba(16,44,38,0.5)), url(${forestFloor})`,
          backgroundSize: "100% 100%",
          fontFamily: "Plex Sans",
        }}
      >
        {/* The book cover */}
        <div
          style={{
            display: "flex",
            width: 340,
            height: 470,
            padding: 20,
            borderRadius: "6px 20px 20px 6px",
            backgroundColor: cloth,
            backgroundImage:
              "linear-gradient(to right, rgba(16,44,38,0.22), rgba(16,44,38,0.06) 22px, rgba(255,255,255,0.3) 25px, rgba(255,255,255,0) 30px)",
            boxShadow: "0 30px 60px -20px rgba(0,0,0,0.7)",
            transform: "rotate(-3deg)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              border: "1px solid rgba(16,44,38,0.3)",
              borderRadius: 12,
            }}
          >
            <div style={{ display: "flex", fontSize: 13, letterSpacing: 5, color: "rgba(16,44,38,0.7)" }}>
              PORTFOLIO
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 22,
                padding: 7,
                backgroundColor: "#ffffff",
                borderRadius: 3,
                boxShadow: "0 10px 24px -14px rgba(16,44,38,0.6)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- drawn by ImageResponse, not the browser */}
              <img src={portrait} width={168} height={210} alt="" style={{ borderRadius: 2 }} />
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 22,
                fontFamily: "Plex Serif",
                fontSize: 26,
                color: forest,
                textAlign: "center",
              }}
            >
              {siteConfig.name}
            </div>
            <div style={{ display: "flex", marginTop: 8, fontSize: 12, letterSpacing: 4, color: "rgba(16,44,38,0.75)" }}>
              FULL STACK DEVELOPER
            </div>
          </div>
        </div>

        {/* Beside it, readable at thumbnail size */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, color: cream }}>
          <div style={{ display: "flex", fontFamily: "Plex Serif", fontSize: 68, lineHeight: 1.05 }}>
            {siteConfig.name}
          </div>
          <div style={{ display: "flex", marginTop: 22, fontSize: 30, color: "rgba(252,246,236,0.9)" }}>
            Full stack developer · {siteConfig.location.city}, {siteConfig.location.country}
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 14, fontSize: 25, lineHeight: 1.35, color: "rgba(252,246,236,0.78)" }}>
            <span>Fast, discoverable web apps,</span>
            <span>with SEO and AEO built in.</span>
          </div>
          {showHost ? (
            <div
              style={{
                display: "flex",
                marginTop: 36,
                alignSelf: "flex-start",
                padding: "10px 22px",
                borderRadius: 999,
                backgroundColor: cream,
                color: forest,
                fontSize: 22,
              }}
            >
              {host}
            </div>
          ) : null}
        </div>
      </div>
    ),
    {
      ...previewSize,
      fonts: [
        { name: "Plex Serif", data: serif, weight: 600, style: "normal" },
        { name: "Plex Sans", data: sans, weight: 500, style: "normal" },
      ],
    }
  );
}

// Served as JPEG: the forest photo makes a PNG over 1MB, and WhatsApp skips
// preview images much larger than about 300KB.
export async function renderPreviewJpeg() {
  const png = Buffer.from(await (await renderPreview()).arrayBuffer());
  const jpeg = await sharp(png).jpeg({ quality: 80, mozjpeg: true }).toBuffer();
  return new Response(new Uint8Array(jpeg), {
    headers: { "Content-Type": "image/jpeg" },
  });
}
