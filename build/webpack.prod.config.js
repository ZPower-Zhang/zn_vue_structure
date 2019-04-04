'use strict'

const path = require('path')
const webpack = require('webpack')
const config = require('.../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptionCSSPlugin = require('optimize-css-assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpacl-plugin')

const webpack = merge(baseWebpackConfig, {
  module: {
    rules: [

    ]
  },
  plugins: [

    //用于在构建前清除dist目录中的内容
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'), // 根目录
      verbose: true, // 开启在控制台输出信息
    })
  ],
  resolve: {
    // 设置解析的扩展
  }
})