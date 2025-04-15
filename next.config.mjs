/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    allowedDevOrigins: ['http://192.168.56.1:3000'], // ganti dengan IP dan port yang kamu pakai
  },
};

export default nextConfig;
