const path = require('path');

module.exports = {
  entry: {
    index: './js/js_index.js',
    about: './js/js_about.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      // "jquery" : ("../" + "node_modules/jquery/src/jquery"),
      // "tether" : ("../" + "node_modules/tether/dist/js/tether.js"),
      // "bootstrap" : ("../" + "node_modules/bootstrap/dist/js/bootstrap"),
      // "popper" : ("../" + "node_modules/popper.js/dist/poppert.js"),
    }
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  mode: 'production',
};