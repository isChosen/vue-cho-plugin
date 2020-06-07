const path = require('path');

module.exports = {
  // 基本路径
  publicPath: './',
  // publicPath: '/dist/',
  devServer: {
    port: 2020
  },
  /* chainWebpack: config => {
    config
    .entry('app').add(path.resolve(__dirname, 'src/lib/selfButton/index.js')).end()
    .output.filename('chobutton.js').library('chobutton').libraryTarget('umd')
  } */
};

