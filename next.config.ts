import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-ninjas.com',
        pathname: '/images/**',
      },
    ],
  },
  sassOptions: {
    includePaths: ['./src'],
  },
};

export default nextConfig;
