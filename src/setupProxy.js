const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy('api', {
      target: 'http://localhost:8080/',   // 请求本地 node express 接口
      changeOrigin: true, // target是域名的话，需要这个参数，
    })
  )
}
