const path = require("path"); // Modulo de node y encargado de la gestion de rutas
const MiniCSSExtractPlugin = require("mini-css-extract-plugin"); // Modulo para empaquetar css fuera del js
const HtmlWebpackPlugin = require("html-webpack-plugin"); //Modulo para generar un html con la configuracion de weback, js, css, etc
module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/js/index.js")
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader // separa los archivos css
          },
          //"style-loader", // Inyecta el css al html
          "css-loader" //Carge los archivos css en js
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Plugins" // Titulo del documento
    }),
    new MiniCSSExtractPlugin({
      filename: "css/[name].css" // direccion y/o nombre del archivo final
    })
  ]
};
