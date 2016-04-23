var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var metadata = {
    host: 'localhost'
};
// Webpack Config
var webpackConfig = {
    devtool: 'cheap-module-eval-source-map',
    cache: false,
    debug: true,
    output: {
        path: './dist',
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },

    metadata: metadata,
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': ['./src/vendor.ts'],
        'app': './src/app.ts'

    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: ['app', 'vendor', 'polyfills'], minChunks: Infinity}),

        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency'
        }),
        new webpack.HotModuleReplacementPlugin()

    ],

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
                test: /\.(sa|sc|c)ss$/,
                loader: 'style!css?-url&-minimize&-import!autoprefixer-loader?browsers=last 2 versions!sass',
                exclude: ['./node_modules']
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$$/,
                loader: "file"
            }

        ],
        noParse: [
            path.join(__dirname, 'node_modules', 'zone.js', 'dist'),
            path.join(__dirname, 'node_modules', 'angular2', 'bundles')
        ]
    },
    resolve: {
        root: [path.join(__dirname, 'src')],
        extensions: ['', '.ts', '.js', '.sass', '.scss', '.css', '.json']
    },

    devServer: {
        outputPath: 'dist',
        historyApiFallback: true,
        watchOptions: {aggregateTimeout: 300, poll: 500}
    },

    sassLoader: {
        outputStyle: 'compressed'
    }

};


module.exports = webpackConfig;
