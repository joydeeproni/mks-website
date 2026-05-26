import type { NextConfig } from "next";

/* GitHub Pages serves under a project path (joydeeproni.github.io/mks-website),
   so basePath + assetPrefix only apply when GITHUB_PAGES=true (set by the
   deploy workflow). Local dev keeps clean root paths. */
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "mks-website";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isPages ? `/${repo}` : "",
  assetPrefix: isPages ? `/${repo}/` : "",
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    // Static export has no runtime optimizer — emit plain <img> tags.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
