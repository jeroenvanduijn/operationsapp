import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jfwdrup73imvcrrq.public.blob.vercel-storage.com',
        pathname: '/screenshots/**',
      },
    ],
  },
};

export default nextConfig;
