/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  basePath: "/blog",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
