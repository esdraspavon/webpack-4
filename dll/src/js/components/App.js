import React, { useState } from "react";
import data from "./data.json";
import Loader from "./Loader.js";
import logo from "../../images/platzi.png";
import video from "../../video/que-es-core.mp4";

import "../../sass/sass.scss";
import "../../less/less.less";
import "../../stylus/stylus.styl";

function App() {
  const [loaderList, setLoaderList] = useState([]);
  function handleClick() {
    setLoaderList(data.loaders);
  }
  return (
    <div>
      <p className="sass">Esto es sass</p>
      <p className="less">Esto es less</p>
      <p className="stylus">Esto es stylus</p>
      <p className="post-css">Esto es post-css</p>
      Aplicacion hecha en react
      <video src={video} width={360} controls autoplay poster={logo} />
      <p>
        <img src={logo} alt="" width={40} />
      </p>
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
