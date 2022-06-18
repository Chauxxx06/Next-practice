/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com'],
  }
  /* env: {
    customKey: 'customValue',
  },
  basePath: '/dist',
  compress: true,
  async redirects () {
    return [
      {
        source: '/hi',
        destination: '/holis',
        permanent: true,
      }
    ]
  } */
}

module.exports = nextConfig
