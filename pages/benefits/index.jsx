import Head from "next/head";
import { Fragment } from "react";

export const metadataBenefits = {
  title: "Benefits",
  description: "Benefits",
};

export default function Page() {
    return (
        <Fragment>
            <Head>
                <title>{metadataBenefits.title}</title>
                <meta name="description" content={metadataBenefits.description}/>
            </Head>
            <h1>Benefits</h1>
        </Fragment>
    );
}