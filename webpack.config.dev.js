const merge = require('webpack-merge');
const base = require('./webpack.config.base');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 100,
  },
  module: {
    rules: {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
  },
});
