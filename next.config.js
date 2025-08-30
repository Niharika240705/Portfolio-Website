const nextConfig = {
  output: "export",
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
  basePath: process.env.NODE_ENV === "production" ? "/portfolio-website" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio-website/" : "",
}

module.exports = nextConfig
