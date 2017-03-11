//webpack.config.js

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.join(__dirname,'src','app-client.js'),
  output:{
    path: path.join(__dirname,'src','static','js'),
    filename:'bundle.js'
  },
  module:{
    loaders:[{
        test: path.join(__dirname,'src'),
        loader:'babel-loader',
        query:{
          presets:['react','es2015']
        }
      },
      {
        test:/\.scss$/,
        loader:ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings:false},
      mangle:true,
      sourcemap:false,
      beautify:false,
      dead_code:true
    }),
    new ExtractTextPlugin('src/static/css/style.css')
  ]
};
