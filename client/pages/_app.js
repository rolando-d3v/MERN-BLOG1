import "../styles/index.css";
import "../styles/globals.css";
import Head from "next/head";
import React, { useState } from "react";
import { AppProvider } from "../hooks/context/contextLayout";
import Sidebar1 from "../components/sidebar1/Sidebar1";

function MyApp({ Component, pageProps }) {
  const [sidebarx, setSidebarx] = useState(false);

  const changeSidebar = () => {
    setSidebarx(sidebarx === false ? true : false);
  };


  const closeSidebar = () =>{
    setSidebarx(false)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/next33.png" />
      </Head>

      <div>
        <AppProvider>
          <Sidebar1 sidebarx={sidebarx} changeSidebar={changeSidebar} />
          <div onClick={sidebarx === true ? closeSidebar : null}>
            <Component {...pageProps} changeSidebar={changeSidebar}  />
          </div>
        </AppProvider>
      </div>
    </>
  );
}

export default MyApp;
