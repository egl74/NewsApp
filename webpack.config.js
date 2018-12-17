const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    './app': './src/app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: './dist'
  }
};
