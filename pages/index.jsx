import Head from "next/head";
import { Fragment } from "react";

export const metadataHome = {
  title: "Shield Plus",
  description: "Prueba tecnica de una Landing Page para la empresa Gerundio",
};

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
