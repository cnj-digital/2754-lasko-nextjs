import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  /* config options here */
  /*output: "export",*/
  trailingSlash: true,
  images: {
    unoptimized: isDev, // Disable optimization in dev to avoid SSL issues with .test domains
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
      {
        protocol: 'http',
        hostname: '2754-lasko-statamic.test',
      },
    ],
  },
};

export default nextConfig;
