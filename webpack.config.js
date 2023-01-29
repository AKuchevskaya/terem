const HtmlWebpackPlugin = require('html-webpack-plugin'); // плагин для того, чтобы html попал в сборку
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // плагин для очищения папки dist при сборке проекта
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // плагин для подключения css файла
const path = require('path'); // подключаем утилиту, которая превращает относительный путь абсолютный

module.exports = {
    entry: {
        main: './src/pages/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: ''
    },
    mode: 'development', // добавили режим разработчика
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
       // contentBase: path.resolve(__dirname, 'dist'),
        compress: true, // это ускорит загрузку в режиме разработки
        port: 8080,
        open: true // сайт будет открываться сам при запуске run dev
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                use: 'babel-loader', 
                exclude: '/node_modules/' 
            },
            { 
                test: /\.css$/i, 
                use: [MiniCssExtractPlugin.loader, 
                  {
                    loader: "css-loader", 
                    options: { importLoaders: 1 }
                  },
                  "postcss-loader"
                ],
            },
            { 
                test: /\.(scss)$/, 
                use: [{
                    loader: 'style-loader',
                },
                'sass-loader'], 
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin
        ({ template: './src/index.html'}),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ],
}