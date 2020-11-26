import React from "react";

export default function CardGif({ ev }) {
  return (
    <div className="sm:flex shadow-lg m-3 border-4 border-blue-800 hover:border-green-500 rounded-xl "
    style={{width: '36rem'}}
    >

      <div
        className=" h-64  sm:max-h-96 sm:w-full  bg-cover text-center  rounded-l-lg"
        style={{
          backgroundImage: `url(${ev.url})`,
        }}
      ></div>

      <div className=" bg-white p-4 flex flex-col justify-between leading-normal rounded-r-xl md:w-4/12 ">
        <div className="mb-8">
          <div className="text-black font-bold text-xl mb-2">{ev.nombre}</div>
          <p className="text-grey-darker text-base">
           {ev.title}
          </p>
        </div>
        <div className="text-md">
            <button className="btn bg-blue-400 hover:bg-red-700 w-full ">
              Ver
            </button>
        </div>
      </div>

    </div>
  );
}

