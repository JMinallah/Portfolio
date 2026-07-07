import path from "node:path";
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Pin the workspace root to this project — otherwise Turbopack picks up
  // an unrelated lockfile in the home directory and mis-resolves node_modules.
  turbopack: {
    root: path.join(__dirname),
  },
};

// Turbopack requires plugin references to be serializable (plain strings),
// since JS functions can't be passed across the Rust boundary.
const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
  },
});

export default withMDX(nextConfig);
