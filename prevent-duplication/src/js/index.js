import "../css/estilos.css";

// import text from "./text";

// text();

// if (module.hot) {
//   module.hot.accept("./text.js", function() {
//     console.log("recarga en caliente");
//     text();
//   });
// }

// import search from "./search";
// import render from "./render";

// const id = prompt("Quien es ese pokemon?");
// search(id)
//   .then(data => {
//     render(data);
//   })
//   .catch(() => {
//     console.log("no hay pokemon");
//   });
import React from "react";
import { render } from "react-dom";
import App from "./components/App";

render(<App />, document.getElementById("container"));
