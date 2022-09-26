const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 3000,
    https: false,
    proxy: {
      '/api/*': {
        target: 'http://0.0.0.0:5000',
        secure: false
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
