module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  devServer: {
    proxy: {
      '/addons': {
        target: 'http://129.211.166.170/addons',
        changeOrigin: true,
        pathRewrite: {
          '^/addons': ''
        }
      }
    }
  }
}
