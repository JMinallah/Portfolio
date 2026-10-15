import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project — otherwise Turbopack picks up
  // an unrelated lockfile in the home directory and mis-resolves node_modules.
  turbopack: {
    root: path.join(__dirname),
  },
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
