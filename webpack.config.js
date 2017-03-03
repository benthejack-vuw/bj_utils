const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [path.join(__dirname, "src/bjUtils.ts")],
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "bjUtils.min.js"
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
        {
          loader:"babel-loader",
          options:{
            presets:"es2015"
          }
        },
        { 
          loader:"ts-loader"
        }]

      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        dead_code: true,
        warnings: false
      }
    })
  ]
};
