import * as path from 'path'
import { Configuration as webpack } from 'webpack'
import { Configuration as devServer } from 'webpack-dev-server'

// plugins
import HtmlWP from 'html-webpack-plugin'
import CopyWP from 'copy-webpack-plugin'
// entry
import EntryConfig from './webpack.entry'

interface Configs extends webpack {
    devServer?: devServer
}

const BaseConfig: Configs = {
    entry: EntryConfig,
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].[id].chunk.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        sourceMapFilename: 'SourceMaps/[file].map',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /\.s[ac]ss$/i,
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
                            name: (path: string) => {
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
    resolve: {
        extensions: ['.mjs', '.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWP({
            filename: 'index.html',
            template: './public/template.html',
            inject: true,
            publicPath: '/',
            favicon: './static/img/favicon.ico',
        }),
        new CopyWP({
            patterns: [{ from: './public/robots.txt' }],
        }),
    ],
    optimization: {
        emitOnErrors: false,
        chunkIds: 'named',
        splitChunks: {
            chunks: 'all',
            maxSize: 240000,
        },
    },
}

const DevConfig: Configs = {
    ...BaseConfig,
    devtool: 'source-map',
    devServer: {
        port: 8000,
        hot: false,
        historyApiFallback: true,
        devMiddleware: {
            writeToDisk: true,
        },
    },
}

const BuildConfig: Configs = {
    ...BaseConfig,
    optimization: {
        ...BaseConfig.optimization,
        minimize: true,
        chunkIds: 'deterministic',
    },
}

module.exports = (
    _: unknown,
    { mode }: { mode: 'development' | 'production' }
) => {
    if (mode === 'development') {
        return DevConfig
    } else {
        return BuildConfig
    }
}
