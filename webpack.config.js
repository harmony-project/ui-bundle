const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLess = new ExtractTextPlugin({
  filename: 'harmony-ui.css'
});

module.exports = {
  entry: [
      './Resources/private/less/harmony-ui.less'
  ],
  output: {
    path: path.join(__dirname, 'Resources/public'),
    filename: 'harmony-ui.js'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: extractLess.extract({
          use: [{
            loader: 'css-loader?minimize'
          }, {
            loader: 'semantic-ui-less-loader'
          }],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    extractLess
  ]
};
