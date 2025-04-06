import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ['./styles'],
    prependData: `@use "utils/index" as *;`
  }
};

export default nextConfig;
