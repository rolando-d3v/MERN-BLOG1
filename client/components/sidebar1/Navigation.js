import React from "react";
import { FaBars } from "react-icons/fa";


export default function Navigation(props) {

  const {changeSidebar} = props

  return (
    <div className="border h-screen grid place-items-center">
      <button className="p-4 fixed focus:outline-none " onClick={changeSidebar}>
        <FaBars className="text-indigo-600 text-3xl" />
      </button>
      <button
        className="bg-indigo-600 text-indigo-200 px-2 py-1 rounded"
        // onClick={openModal}
      >
        show modal
      </button>
    </div>
  );
}
