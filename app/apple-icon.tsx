import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAF8F5",
        }}
      >
        <img src={svgDataUri} width={140} height={112} alt="" />
      </div>
    ),
    { ...size }
  );
}
