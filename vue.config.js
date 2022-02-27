module.exports = {
  // 設定正向代理伺服器，解決跨域問題
  devServer: {
    proxy: {
      '/ajax': {
        target: 'http://m.maoyan.com', // 貓演電影
        changeOrigin: true
      }
    }
  }
}
