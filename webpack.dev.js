const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
    entry: {
      main: './index.js'
    },
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8082
  },
  
  plugins: [
    new CleanWebpackPlugin(),
    // "hot: true" automatically applies HMR plugin, you don't have to add it manually to your webpack configuration.
    // new webpack.HotModuleReplacementPlugin(),  
    new HtmlWebpackPlugin({
      template: './index.html',
      scriptLoading: "blocking",
      inject: 'body'
    })
    
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
};