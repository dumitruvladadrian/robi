const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const commonPaths = require('./common');

const config = {
  mode: 'development',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/
  },
  // Local Dev Server settings
  devServer: {
    host: process.env.DEV_HOST || 'localhost',
    port: process.env.DEV_PORT || '3000',
    https: process.env.DEV_PROTOCOL === 'https',
    static: commonPaths.outputPath,
    historyApiFallback: true,
    allowedHosts: 'all',
    headers: {
      'Content-Security-Policy':
        'script-src www.google-analytics.com https://static.hotjar.com https://script.hotjar.com \'unsafe-eval\' \'unsafe-inline\' localhost:*;font-src fonts.gstatic.com \'self\' data: localhost:*; img-src www.google-analytics.com https://*.hotjar.com https://run.pstmn.io/button.svg https://img.shields.io https://raster.shields.io localhost:* data: blob:; style-src fonts.googleapis.com *.cloudfront.net localhost:* \'unsafe-inline\'; child-src https://vars.hotjar.com; frame-src https://vars.hotjar.com'
    },
    proxy: [
      {
        context: ['/api/'],
        target: 'http://localhost:9090',
        secure: false,
        headers: {
          Host: 'localhost'
        }
      }
    ]
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                auto: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            }
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `
								@import "components/styles/index.scss";
							`,
            },
          },
        ]
      }
    ]
  },
  plugins: [
    // Extract all css and scss to a separate css file
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: commonPaths.public,
          to: commonPaths.outputPath
        }
      ]
    })
  ]
};

module.exports = config;
