import Head from "next/head";
import { Fragment } from "react";
import { metadataHome } from "./utils/constants.js";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>{metadataHome.title}</title>
        <meta name="description" content={metadataHome.description}/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="texto-brand txtb-mobile2 txtb-tablet2 txtb-desktop2">
        Shield Plus
      </div>
    </Fragment>
  );
}
