import React from "react"

import Navigation from "../components/sidebar1/Navigation";
import Modal from "../components/sidebar1/Modal";

export default function Home(props) {

const {changeSidebar} = props
 

  return (
    <div  className=''  >
      <Navigation  changeSidebar={changeSidebar}  />
      <Modal />
    </div>
  );
}
