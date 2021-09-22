module.exports = {
  cacheId: `sw-cache-nancy-tool-${new Date().getTime()}`,
  skipWaiting: true,
  navigateFallback: '/index.html',
  exclude: [/\.html$/],
  navigateFallbackAllowlist: [/^(?!.*\.html$|\/data\/).*/]
}
