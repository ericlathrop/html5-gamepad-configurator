var autoprefixer = require("autoprefixer");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var fs = require("fs");
var webpack = require("webpack");

var babelOptions = JSON.parse(fs.readFileSync(".babelrc"));

var environment = process.env.NODE_ENV || "development";

module.exports = {
  entry: {
    app: [ "." ]
  },
  devServer: {
    historyApiFallback: true
  },
  devtool: "source-map",
  output: {
    path: __dirname + "/build",
    publicPath: "/assets/",
    filename: "[name].js"
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: babelOptions
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", ["css-loader", "postcss-loader", "sass-loader"])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify(environment)
      }
    })
  ],
  postcss: function() {
    return [autoprefixer({ browsers: ["last 2 versions"] })];
  },
  resolve: {
    extensions: ["", ".js", ".jsx", ".json"]
  },
  sassLoader: {
  }
};
