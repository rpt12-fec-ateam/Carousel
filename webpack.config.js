const path = require('path');
const entryDir = path.join(__dirname, './client/index.jsx');
const outputDir = path.join(__dirname, './dist');

console.log(outputDir);

module.exports = {
  entry: entryDir,
  output: {
    path: outputDir,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  }
}