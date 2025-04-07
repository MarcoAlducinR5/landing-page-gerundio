import Head from "next/head";
import { Fragment } from "react";
import FileCheck from "./components/ui/svg/file-check";
import ShieldLock from "./components/ui/svg/shield-lock";
import HeadPhones from "./components/ui/svg/headphones";
import CheckDisc from "./components/ui/svg/check-disc";
import Hourglass from "./components/ui/svg/hourglass";
import Bells from "./components/ui/svg/bells";
import familyHappy from "../public/images/black-family-happy-and-hug-with-people-bonding-in-2023-11-27-04-59-51-utc 1.png"
import Image from "next/image";

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

      <aside className="d-flex flex-column flex-md-row text-center text-md-start mb-5 mt-4 my-md-5 px-1 px-md-2">
        <section className="flex-fill mitad1 mb-3 pe-md-3 pe-lg-3">
          <h1 className="texto-color2 a-h1-tx2">Smart Insurance Solutions for a Worry <div className="texto-brand">Free Life</div></h1>
          <p className="d-none d-md-block text-color5 a-txtc5">Stay protected with flexible coverage that safeguards your health, family, and assets. Choose the right plan and enjoy financial peace of mind.</p>
          <p className="d-none d-md-block text-center">
            <button type="button" className="me-2 btn btn-success texto-color3 button-btns1">Get a Free Quote</button>
            <button type="button" className="ms-2 btn btn-vop texto-color2 button-btns1">View Our Plans</button>
          </p>
        </section>
        <Image src={familyHappy} alt="Picture of the author" width={0} height={0} className="mitad2 imagen mb-3 mb-md-0 rounded-4" priority />
        <p className="flex-fill d-block d-md-none text-color5 a-txtc5">Stay protected with flexible coverage that safeguards your health, family, and assets. Choose the right plan and enjoy financial peace of mind.</p>
        <section className="d-block d-md-none d-flex flex-column align-items-center">
          <button className="mb-2 btn btn-success texto-color3 button-btns1">Get a Free Quote</button>
          <button type="button" className="mt-2 btn btn-vop texto-color2 button-btns1">View Our Plans</button>
        </section>
      </aside>

      <aside className="mitad px-2 pe-md-2 text-center text-md-start mb-4">
        <h2 className="text-color2 texto-aside1">Why Thousands Trust Us for Their Insurance Needs</h2>
        <p className="text-color5 texto-aside2 txt-a-m">Reliable, affordable, and hassle-free insurance solutions tailored for you.</p>
        <p className="text-color5 texto-aside2 txt-a-d">Reliable, affordable, and hassle-free insurance solutions tailored for you. With 24/7 support and quick claims processing.</p>
      </aside>

      <div className="d-flex flex-column flex-md-row mb-3">
        <div className="flex-fill">
          <div className="border p-4 px-md-3 mx-2 mb-4 mb-md-3 px-lg-4 rounded-3 shadow-sm">
            <FileCheck />
            <p className="texto-brand b-tb-name">Custom Plans Available</p>
            <p className="text-color5 b-tb-description">Select from a variety of plans designed to fit your lifestyle, needs, and budget, ensuring the right coverage for you and your family.</p>
          </div>
          <div className="border p-4 px-md-3 mx-2 mb-4 mb-md-3 px-lg-4 rounded-3 shadow-sm">
            <ShieldLock />
            <p className="texto-brand b-tb-name">Secure and Private</p>
            <p className="text-color5 b-tb-description">Your personal data and transactions are fully protected with the latest encryption, ensuring security and confidentiality at all times.</p>
          </div>
        </div>
        <div className="flex-fill">
          <div className="border p-4 px-md-3 mx-2 mb-4 mb-md-3 px-lg-4 rounded-3 shadow-sm">
            <HeadPhones />
            <p className="texto-brand b-tb-name">Support Anytime Anywhere</p>
            <p className="text-color5 b-tb-description">Get professional assistance 24/7 from our dedicated team, ready to guide you through policies, claims, and insurance solutions anytime.</p>
          </div>
          <div className="border p-4 px-md-3 mx-2 mb-4 mb-md-3 px-lg-4 rounded-3 shadow-sm">
            <CheckDisc />
            <p className="texto-brand b-tb-name">Global Coverage Plans</p>
            <p className="text-color5 b-tb-description">Stay protected wherever you go with worldwide insurance coverage, offering peace of mind for both travel and daily life.</p>
          </div>
        </div>
        <div className="flex-fill">
          <div className="border p-4 px-md-3 mx-2 mb-4 mb-md-3 px-lg-3 rounded-3 shadow-sm">
            <Hourglass />
            <p className="texto-brand b-tb-name">Quick Claims Process</p>
            <p className="text-color5 b-tb-description">Enjoy a fast, simple, and transparent claims process with minimal paperwork, ensuring swift approvals and hassle-free payouts.</p>
          </div>
          <div className="border p-4 px-md-3 mx-2 mb-4 mb-md-3 px-lg-3 rounded-3 shadow-sm">
            <Bells />
            <p className="texto-brand b-tb-name">Affordable Premium Options</p>
            <p className="text-color5 b-tb-description">Get high-value insurance plans with transparent pricing, no hidden fees, and competitive rates tailored to your financial needs.</p>
          </div>
        </div>
      </div>
      
      <div className="texto-brand txtb-mobile2 txtb-tablet2 txtb-desktop2">
        Shield Plus
      </div>
    </Fragment>
  );
}
