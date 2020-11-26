import React, { useState } from "react";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";

export default function MainLayout(props) {
  const [sidebarx, setSidebarx] = useState(false);

  const changeSidebar = () => {
    setSidebarx(sidebarx === false ? true : false);
  };

  const closeSidebar = () => {
    setSidebarx(false);
  };

  return (
    <div>
      <Navigation changeSidebar={changeSidebar}  />
      <Sidebar sidebarx={sidebarx} changeSidebar={changeSidebar} />
      <section className='h-screen pt-16 bg-gray-50 '  onClick={sidebarx === true ? closeSidebar : null}  >
        {props.children}
      </section>
    </div>
  );
}
