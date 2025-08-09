module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{js,css,html,png,svg,webmanifest}'],
  swDest: 'dist/sw.js',
  skipWaiting: true,
  clientsClaim: true,
  runtimeCaching: [{
    urlPattern: ({url}) => url.origin === self.location.origin,
    handler: 'StaleWhileRevalidate'
  }]
}