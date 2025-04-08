import Head from "next/head";
import { Fragment } from "react";

export const metadataContactUs = {
  title: "Contact Us",
  description: "Contact Us",
};

export default function Page() {
    return (
        <Fragment>
            <Head>
                <title>{metadataContactUs.title}</title>
                <meta name="description" content={metadataContactUs.description}/>
            </Head>
            <h1>Contact Us</h1>
        </Fragment>
    );
}