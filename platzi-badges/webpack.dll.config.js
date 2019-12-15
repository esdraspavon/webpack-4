const path = require("path"); // Modulo de node y encargado de la gestion de rutas
const webpack = require("webpack");
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    modules: ["react", "react-dom", "react-router-dom"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[hash].dll.js",
    library: "[name]" //Con esto enlazamos de manera global nuestro codigo
  },
  optimization:{
    minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()]
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]", // Como se va a llamar el dll
      path: path.join(__dirname, "[name]-manifest.json") //Donde lo voy a ubicar
    })
  ]
};
