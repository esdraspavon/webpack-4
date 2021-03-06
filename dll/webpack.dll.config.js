const path = require("path"); // Modulo de node y encargado de la gestion de rutas
const webpack = require("webpack");

module.exports = {
  entry: {
    modules: ["react", "react-dom"]
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    library: "[name]" //Con esto enlazamos de manera global nuestro codigo
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]", // Como se va a llamar el dll
      path: path.join(__dirname, "[name]-manifest.json") //Donde lo voy a ubicar
    })
  ]
};
