import Head from "next/head";
import { Fragment } from "react";
import { metadataPlans } from "../utils/constants";

export default function Page() {
    return (
        <Fragment>
            <Head>
                <title>{metadataPlans.title}</title>
                <meta name="description" content={metadataPlans.description}/>
            </Head>
            <h1>Plans</h1>
        </Fragment>
    );
}