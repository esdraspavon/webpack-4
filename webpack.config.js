const path = require("path"); // Modulo de node y encargado de la gestion de rutas

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/js/index.js"),
    precios: path.resolve(__dirname, "src/js/precios.js"),
    contacto: path.resolve(__dirname, "src/js/contacto.js")
  }, // Rutas de los archivos de nuestra aplicación JS a ser procesados por Webpack.
  mode: "development", // Modo de ejecucion
  output: {
    // Configuraciones para el archivo final que generará webpack
    path: path.resolve(__dirname, "dist"), // Direccion relativa a la posicion actual donde generará el bundle
    filename: "js/[name].js" // Nombre final del bundle, [name] corresponde al key de cada entry
  },
  module: {
    rules: [
      {
        test: /\.css$/, //cuando se tope con un archivo que cumpla con esta expresion regular, debe ser una expresion regular
        use: ["style-loader", "css-loader"] // Que hacer al cumplir la regla
      }
    ]
  }
};
