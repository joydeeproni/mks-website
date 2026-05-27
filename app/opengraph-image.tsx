import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "MKS Exports — Bags Made Responsibly for Global Brands";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const svgBuffer = await readFile(
    join(process.cwd(), "public", "mks-logo.svg")
  );
  const svgDataUri = `data:image/svg+xml;base64,${svgBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAF8F5",
        }}
      >
        <img src={svgDataUri} width={400} height={320} alt="" />
        <p
          style={{
            marginTop: 32,
            fontSize: 28,
            color: "#3D3229",
            fontFamily: "sans-serif",
          }}
        >
          Bags Made Responsibly for Global Brands
        </p>
      </div>
    ),
    { ...size }
  );
}
