const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const tailwindcss = require('tailwindcss');
const webpack = require("webpack");

module.exports = (env) => {
  return {
    entry: path.resolve(__dirname, 'src/scripts/index.js'),
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
          rules: [{
                  test: /\.css$/i,
                  use: [
                    {
                      loader: 'style-loader',
                    },
                    {
                      loader: 'css-loader',
                    },
                    {
                      loader: 'postcss-loader',
                    }
                  ],
              },
              {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    'file-loader',
                ],
              },
          ]
      },
    plugins: [
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "src/templates/index.html"),
          filename: "index.html",
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src/public/'),
            to: path.resolve(__dirname, 'dist/'),
            noErrorOnMissing: true,
          },
        ],
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      }),
    ],
    mode : env.mode
  }
};