const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_URL: `${process.env.NODE_ENV === 'development' ? 'http' : 'https'}://${
      process.env.HOST
    }`,
  },
}

module.exports = withContentlayer(nextConfig)
