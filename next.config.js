/** @type {import('next').NextConfig} */


const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
});
module.exports = nextConfig;
