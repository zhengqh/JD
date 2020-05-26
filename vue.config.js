const path = require("path");
module.exports = {
    configureWebpack: (config) => {
        config.resolve = {
            // 配置解析别名
            extensions: [".js", ".json", ".vue"], // 自动添加文件名后缀
            alias: {
                "styles": path.resolve(__dirname, "./src/assets/styles"),
                "@c": path.resolve(__dirname, "./src/components"),
            },
        };
    },
    chainWebpack: config => {
        config.module
            .rule('scss')
            .oneOf('vue')
            .use('px2rem-loader')
            .before('postcss-loader') // this makes it work.
            .loader('px2rem-loader')
            .options({
                remUnit: 32
            })
            .end()
    }
};