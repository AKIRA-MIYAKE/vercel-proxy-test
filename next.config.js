module.exports = {
  basePath: '/m/dash',
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
      {
        source: '/:path*',
        destination: `https://example.com/:path*`,
        basePath: false,
      },
      {
        source: '/',
        destination: `https://example.com`,
        basePath: false,
      },
    ]
  },
}
