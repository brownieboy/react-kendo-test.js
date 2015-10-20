var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);
var BUILDJSPATH = "js/vendor.js";

var common = {
    entry: {
        app: './src/js/app.jsx'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },

};

if (TARGET === 'buildwp') {
    module.exports = merge(common, {
        entry: {
            vendor: ["react", "jquery", "es6bindall", "griddle-react", "object.omit", "react-bootstrap", "react-bootstrap-datetimepicker", "underscore"]
        },
        output: {
            path: path.resolve(ROOT_PATH, 'build'),
            filename: 'js/main.js'
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin("vendor", BUILDJSPATH),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ],
        devtool: 'source-map',
        module: {
            loaders: [{
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: path.resolve(ROOT_PATH, 'src')
            }]
        }
    })
}


var devServerCommon = {
    devServer: {
        colors: true,
        noInfo: false,
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

var startCommon = merge(common, devServerCommon);

if (TARGET === 'start' || !TARGET) {
    // react-hot loader used, with full(ish) eval source maps generated.
    console.log("start called");

    module.exports = merge(startCommon, {
        devtool: 'source-map',
        output: {
            filename: 'src/js/main.js'
        },
        module: {
            // Note: don't include the same loader in multiple places, e.g putting babel under "common" and here.
            // Webpack will error out if you try this.
            loaders: [{
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                include: path.resolve(ROOT_PATH, 'src')
            }]
        }
    });
}
