const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',

    entry: [
        './src/App.js'
    ],

    devtool: 'inline-source-map',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ["react-hot-loader/babel", "@babel/plugin-syntax-dynamic-import", "@babel/plugin-transform-runtime"]
                    }
                }
            }
        ]
    }

};
