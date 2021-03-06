var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    app: './app/index.js',
    vendor: ['react', 'react-dom', 'firebase']
  },
  output: {
      path:     'build',
      filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'app')
        ],
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: [
          path.join(__dirname, 'app')
        ],
        loader: 'style!css'
      }
    ]
  },
  devtool: 'source-map'
};
