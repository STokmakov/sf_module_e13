const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, 'src'),
    entry: {
      main: './index.js'
    },
  
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8081
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      scriptLoading: "blocking",
      inject: 'body'
    }),
 
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
};