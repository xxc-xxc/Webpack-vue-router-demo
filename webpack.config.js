// import path from 'path';
const path = require('path')
const webpack = require('webpack') // 2.热更新
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // entry: path.join(__dirname, './src/index.js'),
    // output: {
    //     path: path.join(__dirname, './dist'),
    //     filename: 'bundle.js',
    // },
    // entry: './src/main.js',
    // output: {
    //     filename: './bundle.js',
    // }
    devServer: {
        open: true,
        port: 8888,
        contentBase: 'src',
        // 1.热更新
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //3.热更新
        new htmlWebpackPlugin({ // 生成内存中的HTML页面
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html', // 生成内存页面名称
        }),
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            { test: /.\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /.\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /.\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /.\.vue$/, use: ['vue-loader'] },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    // 配置加载vue.js文件
    resolve: {
        alias: {
            // "vue$": "vue/dist/vue.js",
        }
    }
};