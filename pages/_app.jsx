import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.scss";

import { useEffect } from "react";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Layout from "./components/layout";
import { Poppins } from "next/font/google";

export const poppinsThin = Poppins({
  variable: "--font-poppins-thin",
  weight: "100",
  style: "normal",
  subsets: ["latin"]
});

export const poppinsExtralight = Poppins({
  variable: "--font-poppins-extralight",
  weight: "200",
  style: "normal",
  subsets: ["latin"]
});

export const poppinsLight = Poppins({
  variable: "--font-poppins-light",
  weight: "300",
  style: "normal",
  subsets: ["latin"]
});

export const poppinsRegular = Poppins({
  variable: "--font-poppins-regular",
  weight: "400",
  style: "normal",
  subsets: ["latin"]
});

export const poppinsMedium = Poppins({
  variable: "--font-poppins-medium",
  weight: "500",
  style: "normal",
  subsets: ["latin"]
});

export const poppinsSemibold = Poppins({
  variable: "--font-poppins-semibold",
  weight: "600",
  style: "normal",
  subsets: ["latin"]
});

export const poppinsBold = Poppins({
  variable: "--font-poppins-bold",
  weight: "700",
  style: "normal",
  subsets: ["latin"]
});

export const poppinsExtrabold = Poppins({
  variable: "--font-poppins-extrabold",
  weight: "800",
  style: "normal",
  subsets: ["latin"]
});

export const poppinsBlack = Poppins({
  variable: "--font-poppins-black",
  weight: "900",
  style: "normal",
  subsets: ["latin"]
});

export const poppinsThinItalic = Poppins({
  variable: "--font-poppins-thin-italic",
  weight: "100",
  style: "italic",
  subsets: ["latin"]
});

export const poppinsExtralightItalic = Poppins({
  variable: "--font-poppins-extralight-italic",
  weight: "200",
  style: "italic",
  subsets: ["latin"]
});

export const poppinsLightItalic = Poppins({
  variable: "--font-poppins-light-italic",
  weight: "300",
  style: "italic",
  subsets: ["latin"]
});

export const poppinsRegularItalic = Poppins({
  variable: "--font-poppins-regular-italic",
  weight: "400",
  style: "italic",
  subsets: ["latin"]
});

export const poppinsMediumItalic = Poppins({
  variable: "--font-poppins-medium-italic",
  weight: "500",
  style: "italic",
  subsets: ["latin"]
});

export const poppinsSemiboldItalic = Poppins({
  variable: "--font-poppins-semibold-italic",
  weight: "600",
  style: "italic",
  subsets: ["latin"]
});

export const poppinsBoldItalic = Poppins({
  variable: "--font-poppins-bold-italic",
  weight: "700",
  style: "italic",
  subsets: ["latin"]
});

export const poppinsExtraboldItalic = Poppins({
  variable: "--font-poppins-extrabold-italic",
  weight: "800",
  style: "italic",
  subsets: ["latin"]
});

export const poppinsBlackItalic = Poppins({
  variable: "--font-poppins-black-italic",
  weight: "900",
  style: "italic",
  subsets: ["latin"]
});

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
