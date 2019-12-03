import React, { useState } from "react";
import data from "./data.json";
import Loader from "./Loader.js";

function App() {
  const [loaderList, setLoaderList] = useState([]);
  function handleClick() {
    setLoaderList(data.loaders);
  }
  return (
    <div>
      Aplicacion hecha en react
      <ul>
        {loaderList.map(item => (
          <Loader {...item} key={item.id} />
        ))}
      </ul>
      <button onClick={handleClick}>Mostrar loaders aprendidos</button>
    </div>
  );
}

export default App;
