const nextConfig = {
  output: "export", // enables static export
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Remove basePath and assetPrefix for Vercel root deployment
  // basePath: process.env.NODE_ENV === "production" ? "/portfolio-website" : "",
  // assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio-website/" : "",
}

module.exports = nextConfig
