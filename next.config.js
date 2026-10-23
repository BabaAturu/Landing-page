/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false, // Disable SWC minification to avoid binary dependency
  /* If you want to use the src directory strictly */
  experimental: {
    // This helps Next.js focus on the src/app structure
  }
};

module.exports = nextConfig;
