const path = require('path') // Modulo de node y encargado de la gestion de rutas

module.exports = {
    entry: './index.js', // Ruta del archivo principal de nuestra aplicación JS a ser procesado por Webpack. Se pueden tener varios Entry Points.
    mode: 'development', // Modo de ejecucion
    output:{ // Configuraciones para el archivo final que generará webpack
        path: path.resolve(__dirname), // Direccion relativa a la posicion actual donde generará el bundle
        filename: 'bundle.js' // Nombre final del bundle
    }
}