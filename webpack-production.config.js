var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var assets = require('postcss-assets');
var path = require('path');


var BUILD_DIR = path.resolve(__dirname, 'bin/client/app');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = {
  entry: [
    './src/server.js'
  ],
  devServer: {
    historyApiFallback: true,
    stats: {
      chunks: false,
      children: false 
    }
  }, 
  output: {
    path: __dirname + '/bin/www/',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module : {
    preLoaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader' }
    ],
    loaders: [
      {test: /.json$/, exclude: /node_modules/, loader: 'json-loader'},
      {test: /.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&camelCase!postcss-loader') }
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'React': 'React',
    'ReactDOM': 'ReactDOM'
  },
  postcss: function () {
    return [
      autoprefixer, 
      assets({
        loadPaths: ['**'],
        basePath: 'client/'
      })
    ];
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css']
  },
  plugins: [
    new ExtractTextPlugin('[name].[hash].css'),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/client/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};