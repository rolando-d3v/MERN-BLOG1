import "../styles/index.css";
import "../styles/globals.css";
import Head from "next/head";
import React, { useState } from "react";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/next33.png" />
      </Head>

      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
