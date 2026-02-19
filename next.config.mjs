const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: isProd ? '/v0-portfolio-website-creation' : '',
  assetPrefix: isProd ? '/v0-portfolio-website-creation/' : '',
}

export default nextConfig
