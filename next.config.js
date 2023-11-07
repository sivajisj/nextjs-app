/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  rewrites: async () => {
    return [
      // Your route rewrite rules go here
    ];
  },
  images: {
    domains: ["images.pexels.com"],
  },
};

module.exports = nextConfig;
