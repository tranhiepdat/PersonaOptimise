const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point of your application
  entry: './src/script.js',
  // Output configuration for the webpack bundle
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
  },
  // Development server configuration
  devServer: {
      static: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
      open: true
  },
  // Module rules for handling different file types
  module: {
      rules: [
          {
              test: /\.js$/, // Transpile all .js files from ES6 to ES5
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env']
                  }
              }
          },
          {
              test: /\.css$/, // Handle CSS files with css-loader and style-loader
              use: ['style-loader', 'css-loader']
          },
          {
              test: /\.(png|svg|jpg|jpeg|gif)$/i, // Handle image files
              type: 'asset/resource',
          },
          {
              test: /\.json$/, // Allow importing JSON files
              type: 'json',
              parser: {
                  parse: JSON.parse,
              }
          }
      ]
  },
  // Plugins configuration
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html' // HTML file to use as a template
      })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    open: {
      app: {
          name: 'chrome' // or 'chrome', 'firefox', etc., depending on your system
      }
  }
  }
  
  
};
