var path = require('path');
module.exports = {
  entry: './src/service.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "demo.js",
    library: "Demo",
    libraryTarget: "var"
  }, 
  module: {
    rules: [ {test: /\.js$/, use: 'babel-loader'} ],
  },
  devtool: 'source-map'
}
