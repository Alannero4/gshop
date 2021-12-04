module.exports = {
    publicPath:'/',
    lintOnSave:false,
    devServer:{
        disableHostCheck:true,
        host: "localhost", //也可以直接写IP地址这样方便真机测试
        port: 8080, // 端口号
        https:false,
        hotOnly:false,
        open: true, 
        proxy: {
            '/api': { 
              target: 'http://localhost:4000',
              changeOrigin: true, // 支持跨域
              pathRewrite: {// 重写路径: 去掉路径中开头的'/api'
                '^/api': ''
              }
            }
          }
          
    }
}