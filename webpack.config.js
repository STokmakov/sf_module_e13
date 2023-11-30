const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
      main: './index.js'
    },
    devServer: {
      static: path.resolve(__dirname, './dist'),
      open: true,
      compress: true,
      hot: true,
      port: 8080
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './index.html',
        scriptLoading: "blocking",
        inject: 'body'
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist')
    },
  };