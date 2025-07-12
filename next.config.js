/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/yahya-portfolio',
  assetPrefix: '/yahya-portfolio',
}

module.exports = nextConfig 