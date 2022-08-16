/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com"],
  },
  env: {
    graphCMS: "my value",
  },
};

module.exports = nextConfig;
