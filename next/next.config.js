// const { createClient } = require("@sanity/client");

/** @type {import('next').NextConfig} */
// const client = createClient({
//   projectId: "your-project-id",
//   dataset: "production",
//   useCdn: false,
//   apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
//   // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
// });
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    taint: true,
  },
  redirects: [
    { from: "/about", to: "/" },
    { from: "/old-path/*", to: "/new-path/*" },
  ],
};

module.exports = nextConfig;
