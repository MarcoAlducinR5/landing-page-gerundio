import Link from "next/link";
import { Fragment } from "react";

export default function Footer() {
    return (
      <Fragment>
        <div className="borde-hr1"></div>
          <div className="card border-0 text-color4">
            <div className="card-body p-0 m-0">
              <div className="d-flex flex-column flex-column-reverse flex-md-row">
                <div className="py-4 py-lg-5 tc-cuatro-b align-items-center flex-fill text-center text-md-start">© 2025 Shield Plus. All Rights Reserved.</div>
                <div className="borde-hr2"></div>
                <div className="d-flex flex-row justify-content-between justify-content-lg-evenly py-4 py-lg-5 tc-cuatro-a align-items-center flex-fill">
                  <Link className="nav-link" href="/">
                    Terms & Conditions
                  </Link>
                  <Link className="nav-link" href="/">
                    Privacy Policy
                  </Link>
                  <Link className="nav-link" href="/">
                    Licensing
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </Fragment>
    );
  }