var webpack = require('webpack');

module.exports = {
    entry: './js/src/App.js',

    output: {
        path: '/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        inline: true,
        filename: 'bundle.js',
        publicPath: '/js/dist',
        contentBase: './'
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react'],
                    plugins:['react-hot-loader/babel']
                }
            }
        ]
    }
};
