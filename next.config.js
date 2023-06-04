const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_URL: process.env.URL?.startsWith('http')
      ? process.env.URL
      : `https://${process.env.VERCEL_URL || ''}`,
  },
}

module.exports = withContentlayer(nextConfig)
