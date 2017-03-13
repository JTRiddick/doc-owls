//webpack.config.js

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractSCSS = new ExtractTextPlugin({
  filename:"style.scss",
  allChunks:true
})
let extractCSS = new ExtractTextPlugin('../css/style.css');

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
        // loader:ExtractTextPlugin.extract('css-loader!sass-loader')
        loader: extractCSS.extract('css-loader?modules=true!sass-loader?sourceMap=true')
      }
    ]
  },
  plugins:[
    extractCSS,
    extractSCSS,
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
    new ExtractTextPlugin('../css/style.css')
  ]
};
