const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist')
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use:[{loader: 'style-loader'}, {loader: 'css-loader'}]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader'
      },
      // {
      //   test: /\.js[x]?$/,
      //   enforce: 'pre',
      //   use: [
      //     {
      //       loader: 'eslint-loader',
      //       options: {fix: true}
      //     }
      //   ],
      //   include: path.resolve(__dirname, './src/components'),
      //   exclude: /node_modules/
      // }
    ]
  },
  //module alias
  resolve: {
    alias: {
      "components": path.resolve(__dirname, './src/components/'),
      // "css": path.resolve(__dirname, './src/public/css'),
      "assets": path.resolve(__dirname, './assets/'),
      "img": path.resolve(__dirname, './src/components/main/Card/'),
      "utils": path.resolve(__dirname, './src/utils')
    }
  },
  plugins:[
    new HWP(
      {template: path.join(__dirname,'/src/index.html')}
    )
  ]
}