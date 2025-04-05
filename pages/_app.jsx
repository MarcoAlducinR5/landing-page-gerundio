import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.scss";

import { useEffect } from "react";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Layout from "./components/layout";
import { poppinsBlack, poppinsBlackItalic, poppinsBold, poppinsBoldItalic, poppinsExtrabold, poppinsExtraboldItalic, poppinsExtralight, poppinsExtralightItalic, poppinsLight, poppinsLightItalic, poppinsMedium, poppinsMediumItalic, poppinsRegular, poppinsRegularItalic, poppinsSemibold, poppinsSemiboldItalic, poppinsThin, poppinsThinItalic } from "./components/lib/constants.js";

export default function App({ Component, pageProps }) {
  useEffect(()=>{
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  },[]);
  
  return (
    <Layout className={`${poppinsThin.variable} ${poppinsExtralight.variable}${poppinsLight.variable}${poppinsRegular.variable}${poppinsMedium.variable}${poppinsSemibold.variable}${poppinsBold.variable}${poppinsExtrabold.variable}${poppinsBlack.variable}${poppinsThinItalic.variable}${poppinsExtralightItalic.variable}${poppinsLightItalic.variable}${poppinsRegularItalic.variable}${poppinsMediumItalic.variable}${poppinsSemiboldItalic.variable}${poppinsBoldItalic.variable}${poppinsExtraboldItalic.variable}${poppinsBlackItalic.variable}`}>
        <Component {...pageProps} />
    </Layout>
  );
}
