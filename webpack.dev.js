'use strict';

const path = require('path');

module.exports = {
    devtool: 'sourcemaps',
    entry: [
        path.resolve(__dirname, 'src', 'app.js')
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: [ 'babel-loader' ]
            },
            {
                test: /\.css$/,
                loader: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.scss/,
                loader: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(eot|svg|woff2?|ttf)$/,
                loader: [ 'url-loader' ]
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: [ 'url-loader?limit=10000', 'img-loader' ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/assets',
        filename: 'bundle.js'
    }
};
