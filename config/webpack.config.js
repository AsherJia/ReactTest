const path = require('path');
const webpack = require('webpack');
const node_modules = path.resolve(__dirname, '../node_modules');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const dir_src = path.resolve(__dirname, '../src');
const dir_build = path.resolve(__dirname, '../build');

module.exports = {
  entry:[
    "webpack-dev-server/client?http://localhost:8080/",
    "webpack/hot/dev-server",
    path.resolve(dir_src, 'todo/index.jsx')
  ],
  output: {
    path: dir_build, // for standalone building
    filename: 'bundle.js',
    publicPath: '/'
  },
  // webpack-dev-server默认配置项，建议使用
  //devServer: {
  //  contentBase: dir_build
  //},
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
/*        query: {
          cacheDirectory: true,
          plugins: ['transform-decorators-legacy' ],
          presets: ['es2015', 'react', 'stage-0']
        }*/
      },{
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin(),
    new CleanWebpackPlugin(['build']),
    new CopyWebpackPlugin([
      { from: 'deps', to: 'deps' },
      { from: 'views/home.html', to: 'index.html' }
    ]),
  ],
  stats: {
    colors: true // Nice colored output
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map'
};
