var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var metadata = {
    host: 'localhost'
}
// Webpack Config
var webpackConfig = {
    metadata: metadata,
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': ['./src/vendor.ts'],
        'app': './src/app.ts',

    },

    output: {
        path: './dist',
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: ['app', 'vendor', 'polyfills'], minChunks: Infinity}),

        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency'
        }),


    ],

    module: {
        loaders: [
            // .ts files for TypeScript
            {test: /\.ts$/, loader: 'awesome-typescript-loader'},
            // Support for *.json files.
            {test: /\.json$/, loader: 'json-loader'},

            // Support for CSS as raw text
            //{test: /\.css$/, loader: 'raw-loader'},

            // support for .html as raw text
            {test: /\.html$/, loader: 'raw-loader', exclude: ['./src/index.html']},

            // support for sass imports
            // add CSS rules to your document:
            // `require("!style!css!sass!./file.scss");`
            {
                test: /\.(s)?css$/,
                loader: 'style!css!autoprefixer-loader?browsers=last 2 versions!sass',
                exclude: ['./node_modules']
            }

        ]
    }

};


// Our Webpack Defaults
var defaultConfig = {
    devtool: 'cheap-module-eval-source-map',
    cache: true,
    debug: true,
    output: {
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    // these packages have problems with their sourcemaps
                    path.join(__dirname, 'node_modules', 'rxjs'),
                    path.join(__dirname, 'node_modules', '@angular2-material'),
                ]
            }
        ],
        noParse: [
            path.join(__dirname, 'node_modules', 'zone.js', 'dist'),
            path.join(__dirname, 'node_modules', 'angular2', 'bundles')
        ]
    },

    resolve: {
        root: [path.join(__dirname, 'src')],
        extensions: ['', '.ts', '.js']
    },

    devServer: {
        historyApiFallback: true,
        watchOptions: {aggregateTimeout: 300, poll: 1000}
    },

    node: {
        global: 1,
        crypto: 'empty',
        module: 0,
        Buffer: 0,
        clearImmediate: 0,
        setImmediate: 0
    },
}

var webpackMerge = require('webpack-merge');
module.exports = webpackMerge(defaultConfig, webpackConfig);
