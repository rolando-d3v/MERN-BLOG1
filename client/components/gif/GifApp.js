import React, { useEffect, useState } from "react"
import CardGif from "./CardGif";
import { useGif } from "./hooks/useGif";

export default function GifApp() {
 
  const [category, setCategory] = useState("");
  const [valuesx, setValuesx] = useState("");

  //CUSTOM HOOK
  const {dataGif, loading} = useGif(category);

  const addData = (e) => {
    setValuesx(e.target.value);
  };

  const buscarGif = (e) => {
    e.preventDefault();
    setCategory(valuesx);
    setValuesx('')
  };

  return (
    <div>
      <div className="">
        <form onSubmit={buscarGif}>
          <div>
            <label> Buscar Gif </label>
            <input
              className="px-2 py-1 rounded border border-gray-300 "
              placeholder="buscar"
              type="text"
              value={valuesx}
              onChange={addData}
            />
          </div>
          <button className="btn focus:ring-2 focus:ring-azul-800 " type="submit">
            bucars{" "}
          </button>
        </form>
      </div>
      {loading && <h3>cargando...</h3>   }
      <div className=" flex flex-wrap">
        {dataGif.map((ev) => (
          <CardGif key={ev.id} ev={ev} />
        ))}
      </div>
    </div>
  );
}
