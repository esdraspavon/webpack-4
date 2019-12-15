const path = require("path"); // Modulo de node y encargado de la gestion de rutas
const MiniCSSExtractPlugin = require("mini-css-extract-plugin"); // Modulo para empaquetar css fuera del js

const HtmlWebpackPlugin = require("html-webpack-plugin"); //Modulo para generar un html con la configuracion de webpack, js, css, etc
const webpack = require("webpack");

const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); //Modulo de limpieza

const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[hash].js", // Es bueno que los archivos que mandemos a produccion tengan un hash, ya que esto nos dará el beneficio de que el navegador no guarde el archivo en cache
    publicPath: "http://localhost:3001/",
    chunkFilename: "js/[id].[chunkhash].js"
  },
  optimization:{
    minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          //Se comenta en desarrollo, porque es menos costoso añadir los archivos directo al archivo, que crear un nuevo archivo
          {
            loader: MiniCSSExtractPlugin.loader
          }, // Inyecta el css al html
          "css-loader" //Carge los archivos css en js
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
            limit: 1000, // cantidad de bits maximo de un archivo que se admitira para convertir a base 64
            name: '[hash].[ext]',
            outputPath:'assets' // carpeta a donde irán los archivos
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "css/[name].[hash].css",
      chunkFilename: "css/[id].[hash].css"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html") //basarse en este documento para crear el html
    }),
    //Se comenta en desarrollo, porque es menos costoso añadir los estilos directo al archivo, que crear un nuevo archivo
    // new MiniCSSExtractPlugin({
    //   filename: "css/[name].css" // direccion y/o nombre del archivo final
    // })
    new webpack.DllReferencePlugin({
      manifest: require("./modules-manifest.json")
    }),
    new AddAssetHtmlPlugin({
      filepath:path.resolve(__dirname, "dist/js/*.dll.js"), //que archivo/s quiero agreguar al html, el * es un comodin.
      outputPath: 'js', //Direccion a donde va el/los archivo/s
      publicPath: 'http://localhost:3001/js' //Desde donde quiero leer el/los archivos, similar al publicpath del output de webpack

    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/app.*'],
    })
  ]
};
