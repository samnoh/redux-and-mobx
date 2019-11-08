const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        app: './index.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: { browsers: ['last 2 chrome versions'] },
                                modules: false
                            }
                        ],
                        [
                            '@babel/preset-react',
                            {
                                development: process.env.BABEL_ENV === 'development'
                            }
                        ]
                    ],
                    plugins: [
                        ['module-resolver', { root: ['./src'] }],
                        ['@babel/plugin-proposal-decorators', { legacy: true }],
                        ['@babel/plugin-proposal-class-properties', { loose: true }]
                    ]
                },
                exclude: path.join(__dirname, 'node_modules')
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    test: 'vendor',
                    name: 'vendor',
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js'
    }
};
