import Head from "next/head";
import { Fragment } from "react";

export const metadataClaims = {
  title: "Claims",
  description: "Claims",
};

export default function Page() {
    return (
        <Fragment>
            <Head>
                <title>{metadataClaims.title}</title>
                <meta name="description" content={metadataClaims.description}/>
            </Head>
            <h1>Claims</h1>
        </Fragment>
    );
}