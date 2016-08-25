"use strict";

let path = require('path');
let webpack = require('webpack');


module.exports = {
  entry: path.join(__dirname, 'index.js'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false,
      mangle: {
        eval: true
      }
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist')
  }
};