import Head from "next/head";
import { Fragment } from "react";

export const metadataTestimonials = {
  title: "Testimonials",
  description: "Testimonials",
};

export default function Page() {
    return (
        <Fragment>
            <Head>
                <title>{metadataTestimonials.title}</title>
                <meta name="description" content={metadataTestimonials.description}/>
            </Head>
            <h1>Testimonials</h1>
        </Fragment>
    );
}