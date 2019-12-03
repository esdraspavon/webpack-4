const path = require("path"); // Modulo de node y encargado de la gestion de rutas

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/js/index.js"),
    precios: path.resolve(__dirname, "src/js/precios.js"),
    contacto: path.resolve(__dirname, "src/js/contacto.js")
  }, // Ruta del archivo principal de nuestra aplicación JS a ser procesado por Webpack. Se pueden tener varios Entry Points.
  mode: "development", // Modo de ejecucion
  output: {
    // Configuraciones para el archivo final que generará webpack
    path: path.resolve(__dirname, "dist"), // Direccion relativa a la posicion actual donde generará el bundle
    filename: "js/[name].js" // Nombre final del bundle, [name] corresponde al key de cada entry
  }
};
