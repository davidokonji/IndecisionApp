const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.bundle.js'
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['*', '.js', '.jsx'],
      },
    mode: process.env.NODE_ENV || 'development',
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.(js|jsx)$/,
            exclude: /node_modules/
        }, {
            test: /\.(css|scss)$/,
            use: ['style-loader',
             'css-loader',
             'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    }
};
