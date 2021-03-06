const path = require("path"); // Modulo de node y encargado de la gestion de rutas
const MiniCSSExtractPlugin = require("mini-css-extract-plugin"); // Modulo para empaquetar css fuera del js

const HtmlWebpackPlugin = require("html-webpack-plugin"); //Modulo para generar un html con la configuracion de webpack, js, css, etc
const webpack = require("webpack");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/js/index.js"),
    contact: path.resolve(__dirname, "src/js/contact.js")
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          //Se comenta en desarrollo, porque es menos costoso añadir los archivos directo al archivo, que crear un nuevo archivo
          // {
          //   loader: MiniCSSExtractPlugin.loader // separa los archivos css
          // },
          {
            loader: MiniCSSExtractPlugin.loader
          }, // Inyecta el css al html
          {
            loader: "css-loader",
            options: {
              importLoaders: 1 //esta configuracion hace que delegue el trabajo a postcss, primero trabaja postcss-loader y despues css-loader
            }
          },
          "postcss-loader" //Carge los archivos css en js
        ]
      },
      {
        test: /\.less$/,
        use: [
          //Se comenta en desarrollo, porque es menos costoso añadir los archivos directo al archivo, que crear un nuevo archivo
          // {
          //   loader: MiniCSSExtractPlugin.loader // separa los archivos css
          // },
          {
            loader: MiniCSSExtractPlugin.loader
          }, // Inyecta el css al html
          "css-loader", //Carge los archivos css en js
          "less-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          //Se comenta en desarrollo, porque es menos costoso añadir los archivos directo al archivo, que crear un nuevo archivo
          // {
          //   loader: MiniCSSExtractPlugin.loader // separa los archivos css
          // },
          {
            loader: MiniCSSExtractPlugin.loader
          }, // Inyecta el css al html
          "css-loader", //Carge los archivos css en js
          "sass-loader"
        ]
      },
      {
        test: /\.styl$/,
        use: [
          //Se comenta en desarrollo, porque es menos costoso añadir los archivos directo al archivo, que crear un nuevo archivo
          // {
          //   loader: MiniCSSExtractPlugin.loader // separa los archivos css
          // },
          {
            loader: MiniCSSExtractPlugin.loader
          }, // Inyecta el css al html
          "css-loader", //Carge los archivos css en js
          "stylus-loader"
        ]
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
          loader: "url-loader", // permite empaquetar las archivos anteriormente declarados
          options: {
            limit: 90000 //cantidad de bits maximo de un archivo que se admitira para convertir a base 64
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css"
    }),
    new webpack.HotModuleReplacementPlugin(), //Plugin para que solo recarge los elementos modificados en el html y no toda la pagina
    new HtmlWebpackPlugin({
      title: "webpack-dev-server", // Titulo del documento
      template: path.resolve(__dirname, "index.html") //basarse en este documento para crear el html
    }),
    //Se comenta en desarrollo, porque es menos costoso añadir los estilos directo al archivo, que crear un nuevo archivo
    // new MiniCSSExtractPlugin({
    //   filename: "css/[name].css" // direccion y/o nombre del archivo final
    // })
    new webpack.DllReferencePlugin({
      manifest: require("./modules-manifest.json")
    })
  ]
};
