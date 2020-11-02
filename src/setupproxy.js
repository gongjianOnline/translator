const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  // /baidu 就是axios要调的路径
  app.use(createProxyMiddleware('/translate',
    {
      target: "http://api.fanyi.baidu.com/",
      changeOrigin:true,
      pathRewrite: {
        "^/translate": "/"
      },
      "secure":false 	//如果访问的是https类的链接，就需要设置为true
    }))
}