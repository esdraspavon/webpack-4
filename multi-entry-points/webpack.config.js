const path = require("path");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/js/index.js"),
    precios: path.resolve(__dirname, "src/js/precios.js"),
    contacto: path.resolve(__dirname, "src/js/contacto.js")
  }, // Rutas de los archivos de nuestra aplicación JS a ser procesados por Webpack.
  mode: "development",
  output: {
    // Configuraciones para el archivo final que generará webpack
    path: path.resolve(__dirname, "dist"), // Direccion relativa a la posicion actual donde generará el bundle
    filename: "js/[name].js" // Nombre final del bundle, [name] corresponde al key de cada entry
  }
};
