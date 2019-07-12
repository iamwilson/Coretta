const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        port: 5000,
        stats: {
            hash: false,
            modules: false,
            version: false,
            timings: false,
            builtAt: false,
            excludeAssets: /\.(woff2?|ttf|eot|map)$/
        }
    },
    entry: {
        app: ['babel-polyfill', './src/index.tsx']
    },
    mode: 'development',
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: ['ts-loader']
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: ['file-loader']
            },
            {
                test: /(\.css|\.scss|\.sass)$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'file-loader?name=assets/images/[name].[ext]'
            },
            {
                test: /\.ico$/,
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.eot(\?v=\d+.\d+.\d+)?$/,
                loader: 'file-loader?prefix=font/&limit=5000&name=assets/fonts/[name].[ext]'
            },
            {
                test: /\.(woff2?)$/,
                loader: 'file-loader?prefix=font/&limit=5000&name=assets/fonts/[name].[ext]'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?limit=10000&mimetype=application/octet-stream&name=assets/fonts/[name].[ext]'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?limit=10000&mimetype=image/svg+xml&name=assets/svgs/[name].[ext]'
            }
        ]
    },
    node: {
        console: false,
        global: true,
        process: true,
        Buffer: false,
        setImmediate: false
    },
    output: {
        chunkFilename: 'js/[name].bundle.js',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },
    plugins: [
        new HtmlWebpackPlugin({
            "template": "./src/index.html",
            "filename": "./index.html"
        })
    ],
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx']
    },
    target: 'web'
}