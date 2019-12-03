import "../css/index.css";

// import text from "./text";

// text();

// if (module.hot) {
//   module.hot.accept("./text.js", function() {
//     console.log("recarga en caliente");
//     text();
//   });
// }

import search from "./search";
import render from "./render";

const id = prompt("Quien es ese pokemon?");
search(id)
  .then(data => {
    render(data);
  })
  .catch(() => {
    console.log("no hay pokemon");
  });
