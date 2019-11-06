const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
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
                                targets: { browsers: ['last 2 chrome versions'] }
                            }
                        ],
                        [
                            '@babel/preset-react',
                            {
                                development: process.env.BABEL_ENV === 'development'
                            }
                        ]
                    ],
                    plugins: ['react-hot-loader/babel']
                },
                exclude: path.join(__dirname, 'node_modules')
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        port,
        open: true,
        hot: true,
        stats: {
            modules: false
        }
    }
};
