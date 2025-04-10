/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_WEB3_AUTH_CLIENT_ID: process.env.NEXT_PUBLIC_WEB3_AUTH_CLIENT_ID,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  },
  typescript: {
    ignoreBuildErrors: true, // ⛔️ Ignore TypeScript errors during build
  },
  eslint: {
    ignoreDuringBuilds: true, // ⛔️ Ignore ESLint errors during build
  },
};

export default nextConfig;

