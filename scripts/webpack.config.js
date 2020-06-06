// Custom webpack configuration file, provides generation of service worker
// More information: https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
const { GenerateSW } = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    plugins: [
        new CopyPlugin([
            './src/index.html',
            './src/index.js',
            './src/manifest.json',
            './src'
        ]),
        new GenerateSW({ 
            swDest: 'sw.js',
            clientsClaim: true,
            // skipWaiting: true
         })
    ]
};
