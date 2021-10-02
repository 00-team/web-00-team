import * as path from 'path'
import { Configuration as webpack } from 'webpack'
import { Configuration as devServer } from 'webpack-dev-server'
// plugins
import HtmlWebpackPlugin from 'html-webpack-plugin'

interface Configs extends webpack {
    devServer?: devServer
}

const BaseConfig: Configs = {
    entry: {
        main: {
            import: './src/App.tsx',
            dependOn: ['main-shared'],
        },
        projects: {
            import: './src/components/Projects',
            dependOn: ['main-shared'],
        },
        project: {
            import: './src/components/Projects/Project.tsx',
            dependOn: ['main-shared'],
        },
        navbar: {
            import: './src/layouts/Navbar.tsx',
            dependOn: ['main-shared'],
        },
        'main-shared': ['react', 'react-redux', 'react-dom'],
    },
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
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/template.html',
            inject: true,
            publicPath: '/',
            favicon: './static/img/favicon.ico',
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
