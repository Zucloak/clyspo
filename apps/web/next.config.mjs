/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    "@cap/ui",
    "@cap/utils",
    "@cap/web-api-contract",
    "next-mdx-remote",
  ],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ["@cap/ui", "@cap/utils", "@cap/web-api-contract"],
  },
  images: {
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
