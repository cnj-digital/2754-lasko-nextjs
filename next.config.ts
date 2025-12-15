import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /*output: "export",*/
  trailingSlash: true,
  images: {
    domains: ['localhost', 'cms.lasko.eu', 'img.youtube.com'],
  },
};

export default nextConfig;
