'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true,

    // 直接通过link标签或script标签加载的CDN文件链接
    cdn: {
      css: [
        "https://unpkg.com/element-ui/lib/theme-chalk/index.css",
      ],
      js: [ ]
    }
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    // 将assetsPublicPath从'/'修改为'./'
    // 是因为当你的项目不是部署在网站根目录下时，如http://www.example.com/my-app/，
    // 你期望的请求地址是http://www.example.com/my-app/static/js/app.js
    // 而实际的请求地址是http://www.example.com/static/js/app.js
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    
    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
    // 直接通过link标签或script标签加载的CDN文件链接
    cdn: {
      css: [
        "https://unpkg.com/element-ui/lib/theme-chalk/index.css",
      ],
      js: [
        "https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js",
        "https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js",
        "https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js",
        "https://unpkg.com/element-ui/lib/index.js",
        "https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js"
      ]
    }
  }
}
