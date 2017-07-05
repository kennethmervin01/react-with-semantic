var ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');
const webpack = require('webpack');

module.exports = {
  context:path.join(process.cwd(), 'app'),
  entry:{
    app:'main.js'
  },
  output:{
    path:path.join(process.cwd(), 'build'),
    filename:'bundle.js',
    publicPath:'/static/',
  },
  devServer:{
    contentBase:path.join(process.cwd(), 'build'),
    port:8081
  },
  module:{
    rules:[
      {
        test: /\.jsx?$/,
        exclude:['/node_modules/'],
        loader:['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'resolve-url-loader'] }),
        include: [path.join(process.cwd(), 'semantic'),path.join(process.cwd(), 'assets')]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        loader: 'url-loader?limit=100000'
      }

    ],
  },
  resolve:{
    modules:[
      path.join(process.cwd(), 'app'),
      path.join(process.cwd(), 'node_modules'),
    ],
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]

}
