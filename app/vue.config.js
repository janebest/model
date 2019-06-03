module.exports = {
    devServer: {
        proxy: {
            "/api": { //标志
                target: "http://localhost:4000",
                changeOrigin: true, //跨域请求
                pathRewrite: {
                    '^/api': ""
                }
            }
        }
    }
}