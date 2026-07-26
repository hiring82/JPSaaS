/** @type {import('next').NextConfig} */
var multithread = import('node-cache-multithread');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  corethread: {
    method: multithread,
  },
  // Reduce build time
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
