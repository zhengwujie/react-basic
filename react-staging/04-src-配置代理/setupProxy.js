const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        proxy('/api1', {   //遇见/api1 前缀的请求，就会触发改代理配置
            target: 'http://localhost:5000', // 请求转给给谁
            changeOrigin: true, //控制服务器收到的请求头中的host
            pathRewrite: {
                '^/api1': ''  //重写请求路径
            }
        }),
        proxy('/api2', {
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: {
                '^/api2': ''
            }
        })
    )
}
