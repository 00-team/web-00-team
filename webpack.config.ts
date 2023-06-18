import * as path from 'path'
import { Configuration as MainConfig } from 'webpack'
import { Configuration as devServer } from 'webpack-dev-server'

// plugins
import HtmlWP from 'html-webpack-plugin'
import CopyWP from 'copy-webpack-plugin'
import MCEWP from 'mini-css-extract-plugin'
// entry
import EntryConfig from './webpack.entry'

interface Configs extends MainConfig {
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
        new MCEWP(),
        new HtmlWP({
            filename: 'index.html',
            template: './public/template.html',
            inject: true,
            publicPath: '/',
            favicon: './static/img/favicon.ico',
        }),
        new CopyWP({
            patterns: [
                { from: './public/robots.txt' },
                { from: './public/sitemap.xml' },
            ],
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
    module: {
        rules: [
            ...(BaseConfig.module?.rules || []),
            {
                test: /\.s[ac]ss$/i,
                use: [MCEWP.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
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
    module: {
        rules: [
            ...(BaseConfig.module?.rules || []),
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MCEWP.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['autoprefixer'],
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
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
