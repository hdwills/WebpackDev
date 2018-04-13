const webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',

  entry: __dirname + '/app/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: './public',
    port: '9000',
    historyApiFallback: true,
    inline: true
  },

  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('Hello World')
  ]
}