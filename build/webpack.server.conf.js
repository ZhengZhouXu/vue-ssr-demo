const merge = require('webpack-merge')
const base = require('./webpack.base.conf')
// const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(base, {
  target: 'node', // 指定环境
  entry: {
    server: './entry-server.js'
  },
  output: {
    filename: 'built-server-bundle.js',
    libraryTarget: 'commonjs2'
  }
})