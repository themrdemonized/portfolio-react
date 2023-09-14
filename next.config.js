/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.moddb.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: '/moddb/:path*',
        destination: 'https://www.moddb.com/:path*'
      }
    ]
  }
}

module.exports = nextConfig
