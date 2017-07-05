var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
  context:path.join(process.cwd(), 'app'),
  entry:{
    app:'main.js'
  },
  output:{
    path:path.join(process.cwd(), 'static'),
    filename:'bundle.js'
  },
  module:{
    rules:[
      {
        test: /\.jsx?$/,
        exclude:['/node_modules/'],
        loader:['babel-loader']
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
    new ExtractTextPlugin('styles.css'),
		new HtmlWebpackPlugin()
  ]

}
