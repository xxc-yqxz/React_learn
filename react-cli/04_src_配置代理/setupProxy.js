const proxy = require('http-proxy-middleware')  // react脚手架中已下载了这个库

module.exports = function (app) {
    app.use(
        proxy('/api1', {    // 遇见/api1前缀的请求，就会触发该代理配置
            target: 'http://localhost:5000',    // 请求转发给谁
            changeOrigin: true,     // 默认值为false。控制服务器收到的响应头中Host字段的值。true则host为5000(代理服务器的host),否则为3000（react项目启动时的host）
            pathRewrite: { '^/api1': '' }   // 重写请求路径，若不写，则访问/student时，会变为访问/api1/student
        }),
        proxy('/api2', {
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: { '^/api2': '' }
        })
    )
}