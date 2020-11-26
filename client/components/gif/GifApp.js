import React, { useEffect, useState } from "react";
import { obtenerApi } from "./apiGif";
import CardGif from "./CardGif";

export default function GifApp() {
  const [gifData, setGifData] = useState([]);
  const [category, setCategory] = useState("");
  const [valuesx, setValuesx] = useState("");

  useEffect(() => {
    const rex = async () => {
      const rexu = await obtenerApi(category);
      setGifData(rexu);
    };
    rex();
  }, [category]);

  const addData = (e) => {
    setValuesx(e.target.value);
  };

  const buscarGif = (e) => {
    e.preventDefault();
    setCategory(valuesx);
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
          <button className="btn" type="submit">
            bucars{" "}
          </button>
        </form>
      </div>
      <div className=" flex flex-wrap">
        {gifData.map((ev) => (
          <CardGif key={ev.id} ev={ev} />
        ))}
      </div>
    </div>
  );
}
