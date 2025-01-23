import { Fragment } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import "normalize.css";

const viewport = {
  width: "device-width",
  height: "device-height",
  "user-scalable": "no",
  "shrink-to-fit": "no",
  "initial-scale": "1.0"
};

const viewportContent = Object.entries(viewport).map((val) => `${val[0]}=${val[1]}`).join(", ");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content={viewportContent} />
      </Head>
      
      <Component {...pageProps} />
    </Fragment>
  );
};