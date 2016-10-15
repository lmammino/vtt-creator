'use strict';

var path = require('path');
var webpack = require('webpack');

var isProd = process.env.NODE_ENV === 'production';

module.exports = {
  debug: !isProd,
  devtool: isProd? false : 'source-map',
  context: path.join(__dirname),
  entry: "./global",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: isProd ? 'vtt.min.js' : 'vtt.js',
    devtoolLineToLine: !isProd,
  },
  plugins: isProd ? [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ] : []
};
