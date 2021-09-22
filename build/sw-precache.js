module.exports = {
  cacheId: `sw-cache-nancy-tool`,
  skipWaiting: true,
  navigateFallback: '/index.html',
  navigateFallbackAllowlist: [/^(?!.*\.html$|\/data\/).*/]
}
