import { Fragment } from "react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
    return (
        <Fragment>
            <div className="container">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </Fragment>
    );
}