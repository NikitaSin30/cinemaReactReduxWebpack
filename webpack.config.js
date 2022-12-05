const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   module: {
      rules: [
         { test: /\.(svg|png|jpg)$/, use: 'file-loader' },
         { test: /\.css$/, use: ['style-loader', 'css-loader'] },
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env', '@babel/preset-react'],
               },
            },
         },
         {
            test: /\.?jsx$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env', '@babel/preset-react'],
               },
            },
         },
      ],
   },
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './public/index.html',
      }),
      new CleanWebpackPlugin(),
   ],
   devServer: {
      port: 3200,
   },
   mode: 'development',
};
