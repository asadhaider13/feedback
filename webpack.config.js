const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: [path.resolve(__dirname, 'index.ts'), path.resolve(__dirname, 'lib/feedback.scss')],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'feedback.js',
        publicPath: "/dist"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'expose-loader',
                        options: 'Feedback'
                    }, {
                        loader: 'ts-loader',

                        options: {
                            transpileOnly: true,
                            experimentalWatchApi: true,
                        }
                    }
                ],
                exclude: /node_modules/,
            },
            {
                'test': /\.jsx?$/,
                'loaders': ['babel-loader'],
                'exclude': /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".scss", '.css']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "feedback.css",
            chunkFilename: "feedback.css"
        })
    ]
};