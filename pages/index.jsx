import Head from "next/head";
import { Fragment } from "react";
import FileCheck from "./components/ui/svg/file-check";
import ShieldLock from "./components/ui/svg/shield-lock";
import HeadPhones from "./components/ui/svg/headphones";
import CheckDisc from "./components/ui/svg/check-disc";
import Hourglass from "./components/ui/svg/hourglass";
import Bells from "./components/ui/svg/bells";
import familyHappy from "../public/images/black-family-happy-and-hug-with-people-bonding-in-2023-11-27-04-59-51-utc 1.png"
import lawyerWorking from "../public/images/lawyer-working-with-client-discussing-contract-pap-2025-01-10-12-40-06-utc 1.png"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faXTwitter } from "@fortawesome/free-brands-svg-icons";

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
          <div className="p-4 px-md-3 mx-2 mb-4 mb-md-3 px-lg-4 rounded-3 shadow-sm">
            <FileCheck />
            <p className="texto-brand b-tb-name">Custom Plans Available</p>
            <p className="text-color5 b-tb-description">Select from a variety of plans designed to fit your lifestyle, needs, and budget, ensuring the right coverage for you and your family.</p>
          </div>
          <div className="p-4 px-md-3 mx-2 mb-4 mb-md-3 px-lg-4 rounded-3 shadow-sm">
            <ShieldLock />
            <p className="texto-brand b-tb-name">Secure and Private</p>
            <p className="text-color5 b-tb-description">Your personal data and transactions are fully protected with the latest encryption, ensuring security and confidentiality at all times.</p>
          </div>
        </div>
        <div className="flex-fill">
          <div className="p-4 px-md-3 mx-2 mb-4 mb-md-3 px-lg-4 rounded-3 shadow-sm">
            <HeadPhones />
            <p className="texto-brand b-tb-name">Support Anytime Anywhere</p>
            <p className="text-color5 b-tb-description">Get professional assistance 24/7 from our dedicated team, ready to guide you through policies, claims, and insurance solutions anytime.</p>
          </div>
          <div className="p-4 px-md-3 mx-2 mb-4 mb-md-3 px-lg-4 rounded-3 shadow-sm">
            <CheckDisc />
            <p className="texto-brand b-tb-name">Global Coverage Plans</p>
            <p className="text-color5 b-tb-description">Stay protected wherever you go with worldwide insurance coverage, offering peace of mind for both travel and daily life.</p>
          </div>
        </div>
        <div className="flex-fill">
          <div className="p-4 px-md-3 mx-2 mb-4 mb-md-3 px-lg-3 rounded-3 shadow-sm">
            <Hourglass />
            <p className="texto-brand b-tb-name">Quick Claims Process</p>
            <p className="text-color5 b-tb-description">Enjoy a fast, simple, and transparent claims process with minimal paperwork, ensuring swift approvals and hassle-free payouts.</p>
          </div>
          <div className="p-4 px-md-3 mx-2 mb-4 mb-md-3 px-lg-3 rounded-3 shadow-sm">
            <Bells />
            <p className="texto-brand b-tb-name">Affordable Premium Options</p>
            <p className="text-color5 b-tb-description">Get high-value insurance plans with transparent pricing, no hidden fees, and competitive rates tailored to your financial needs.</p>
          </div>
        </div>
      </div>

      <aside className="d-flex flex-column flex-md-row flex-md-row-reverse px-1">
        <section className="flex-fill ps-md-2">
          <h1 className="texto-color2 h1-txtc2 text-center text-md-start">Getting Insured Is Simple & Fast</h1>
          <section className="text-center text-md-start texto-color5 section-text">
            <p className="d-block d-md-none">Follow these easy steps to secure your insurance plan today.</p>
            <p className="d-none d-md-block">Follow these easy steps to secure your insurance plan today. No complicated paperwork, no hidden fees – just reliable coverage in minutes!</p>
          </section>
          <table className="d-none d-md-block">
            <tbody>
              <tr>
                <td className="texto-color2 a-secc-title width">01 -</td>
                <td className="texto-brand a-secc-title">Choose a Plan</td>
              </tr>
              <tr>
                <td colSpan={2} className="text-color5">
                  <p className="a-secc-description">Browse through our range of insurance plans tailored for your needs. Whether you need health, life, car, home, or travel insurance, we have a plan that fits your lifestyle and budget.</p>
                </td>
              </tr>

              <tr>
                <td className="texto-color2 a-secc-title width">02 -</td>
                <td className="texto-brand a-secc-title">Get a Free Quote</td>
              </tr>
              <tr>
                <td colSpan={2} className="text-color5">
                  <p className="a-secc-description">Fill out a quick form with basic details, and our system will generate a personalized quote instantly. No commitments, no hidden charges—just a transparent breakdown of your insurance options.</p>
                </td>
              </tr>

              <tr>
                <td className="texto-color2 a-secc-title width">03 -</td>
                <td className="texto-brand a-secc-title">Apply Online</td>
              </tr>
              <tr>
                <td colSpan={2} className="text-color5">
                  <p className="a-secc-description">Once you’ve chosen your plan, complete the application online in a few simple steps. Our digital process ensures secure and hassle-free enrollment—no lengthy paperwork required.</p>
                </td>
              </tr>

              <tr>
                <td className="texto-color2 a-secc-title width">04 -</td>
                <td className="texto-brand a-secc-title">Get Covered Instantly</td>
              </tr>
              <tr>
                <td colSpan={2} className="text-color5">
                  <p className="a-secc-description">Once your application is reviewed and approved, your policy becomes active immediately. You’ll receive a digital copy of your insurance documents, and you’re fully protected from day one.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <Image src={lawyerWorking} alt="Picture of the author" width={0} height={0} className="imagenLW rounded-4 pe-md-2" priority />
        <table className="d-block d-md-none my-3">
          <tbody>
            <tr>
              <td className="texto-color2 a-secc-title width">01 -</td>
              <td className="texto-brand a-secc-title">Choose a Plan</td>
            </tr>
            <tr>
              <td colSpan={2} className="text-color5">
                <p className="a-secc-description">Browse through our range of insurance plans tailored for your needs. Whether you need health, life, car, home, or travel insurance, we have a plan that fits your lifestyle and budget.</p>
              </td>
            </tr>

            <tr>
              <td className="texto-color2 a-secc-title width">02 -</td>
              <td className="texto-brand a-secc-title">Get a Free Quote</td>
            </tr>
            <tr>
              <td colSpan={2} className="text-color5">
                <p className="a-secc-description">Fill out a quick form with basic details, and our system will generate a personalized quote instantly. No commitments, no hidden charges—just a transparent breakdown of your insurance options.</p>
              </td>
            </tr>

            <tr>
              <td className="texto-color2 a-secc-title width">03 -</td>
              <td className="texto-brand a-secc-title">Apply Online</td>
            </tr>
            <tr>
              <td colSpan={2} className="text-color5">
                <p className="a-secc-description">Once you’ve chosen your plan, complete the application online in a few simple steps. Our digital process ensures secure and hassle-free enrollment—no lengthy paperwork required.</p>
              </td>
            </tr>

            <tr>
              <td className="texto-color2 a-secc-title width">04 -</td>
              <td className="texto-brand a-secc-title">Get Covered Instantly</td>
            </tr>
            <tr>
              <td colSpan={2} className="text-color5">
                <p className="a-secc-description">Once your application is reviewed and approved, your policy becomes active immediately. You’ll receive a digital copy of your insurance documents, and you’re fully protected from day one.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </aside>

      <aside className="d-flex flex-column flex-md-row text-center text-md-start px-2 my-5">
        <section className="mb-5 mb-md-0 flex-fill tamano">
          <p className="texto-brand txtb-mobile2 txtb-tablet2 txtb-desktop2">
            Shield Plus
          </p>
          <p className="text-color5 mf-text">
            Providing reliable coverage for health, life, travel, and assets with seamless claim processes and 24/7 support.
          </p>
          <table className="d-none d-md-block d-flex flex-column text-start texto-color1 txtc1-icons">
            <tbody>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faPhone} color="#1BA986" style={{width:38, height:38}} className="me-3 mb-1" />
                </td>
                <td>
                  <span>+(123) 456-7890</span>
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faEnvelope} color="#1BA986" style={{width:38, height:38}} className="me-3 mb-1" />
                </td>
                <td>
                  <span>support@Shield Plus.com</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="mb-5 mb-md-0 flex-fill tamano px-2">
          <p className="texto-brand txtb-quickLinks">
            Quick Links
          </p>
          <div className="text-color5 txtb-ql-mobile d-flex flex-column flex-md-row">
            <div className="flex-fill">
              <p>Insurance Plans</p>
              <p>Customer Support</p>
            </div>
            <div className="flex-fill ms-0 ms-md-3">
              <p>Claims Assistance</p>
              <p>About Us</p>
            </div>
          </div>
        </section>
        <section className="mb-5 mb-md-0 flex-fill tamano px-1 px-md-2">
          <p className="texto-brand txtb-quickLinks">
            Subscribe to Our Newsletter
          </p>
          <p className=" text-color5 txtc5-description">Providing reliable coverage for health, life, travel, and assets with seamless claim processes and 24/7 support.</p>
          <span className="input-group mb-3">
            <input type="email" className="inputEmail form-control" placeholder="Enter Your Email" aria-label="Enter Your Email" aria-describedby="button-addon2" />
            <button className="btn btn-success texto-color6 btn-email" type="button" id="button-addon2" >
              Subscribe
            </button>
          </span>
          <FontAwesomeIcon icon={faXTwitter} color="#1BA986" style={{width:39, height:36, margin:"1rem 1.5rem 0rem"}} />
          <FontAwesomeIcon icon={faFacebookF} color="#1BA986" style={{width:21, height:36, margin:"1rem 1.5rem 0rem"}} />
        </section>
        <section className="flex-fill d-block d-md-none d-flex flex-column text-start texto-color1 txtc1-icons px-3">
          <span className="d-flex align-items-center mb-3"><FontAwesomeIcon icon={faPhone} color="#1BA986" style={{width:38, height:38}} /><span className="ms-3">+(123) 456-7890</span></span>
          <span className="d-flex align-items-center mb-3"><FontAwesomeIcon icon={faEnvelope} color="#1BA986" style={{width:38, height:38}} /><span className="ms-3">support@Shield Plus.com</span></span>
        </section>
      </aside>
      
    </Fragment>
  );
}
