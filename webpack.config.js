const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/App.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        sourceMapFilename: 'SourceMaps/[file].map',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: [/\.s[ac]ss$/i, /\.css$/i],
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(ico|mp4)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: path => {
                                if (path.search('favicon.ico') !== -1)
                                    return 'favicon.ico'
                                else return 'static/[name].[ext]'
                            },
                        },
                    },
                ],
                type: 'javascript/auto',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/template.html',
            inject: true,
            publicPath: '/',
            favicon: './static/img/favicon.ico',
        }),
    ],
    devtool: 'source-map',
    devServer: {
        port: 8000,
        hot: false,
        historyApiFallback: true,
        client: {
            logging: 'verbose',
        },
        devMiddleware: {
            serverSideRender: true,
            writeToDisk: true,
        },
    },
}
