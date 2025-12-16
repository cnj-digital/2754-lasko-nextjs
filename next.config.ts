import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /*output: "export",*/
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'cms.lasko.eu',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: '2754-lasko-statamic.test',
      },
    ],
  },
};

export default nextConfig;
