const path = require("path"); // Modulo de node y encargado de la gestion de rutas
const HtmlWebpackPlugin = require("html-webpack-plugin"); //Modulo para generar un html con la configuracion de webpack, js, css, etc
const webpack = require("webpack");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    publicPath: "http://localhost:9000/", // Al no hacer build de la app, es necesario consumir los archivos desde la url de webpack
    chunkFilename: "js/[id].[chunkhash].js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
    port: 9000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },

      {
        // @babel/plugin-transform-runtime es necesario para transpilar funciones asincronas, junto con el core "@babel/runtime"
        test: /\.js$/, //archivos js
        use: "babel-loader", // traspila codigo js
        exclude: /node_modules/ //omitir traspilar codigo que se encuentra aqui
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: "file-loader", // exporta y retorna un enlace
          options: {
            outputPath: "assets/" //A que carpeta iran los assets
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //Plugin para que solo recarge los elementos modificados en el html y no toda la pagina
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html") //basarse en este documento para crear el html
    })
  ]
};
