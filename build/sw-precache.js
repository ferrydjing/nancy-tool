module.exports = {
    cacheId: `sw-cache-nancy-tool-${new Date().getTime()}`,
    filename: 'service-worker.js',
    stripPrefix: 'dist/',
    navigateFallback: '/index.html',
    staticFileGlobsIgnorePatterns: [/\.html$/],
    navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/],
    verbose: true
};
