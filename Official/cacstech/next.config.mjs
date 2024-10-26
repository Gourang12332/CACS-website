/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false
};

module.exports = {
    eslint: {
      ignoreDuringBuilds: true, // This will ignore ESLint errors during the build
    },
  };
  



export default nextConfig;
