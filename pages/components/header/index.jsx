import Link from "next/link";

export default function Header() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="texto-brand txtb-mobile1 txtb-tablet1 txtb-desktop1">
              Shield Plus
            </div>
            <button className="btn btn-success btn-started1 texto-color3">
              Get Started
            </button>
            <section className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex flex-row flex-fill align-items-center">
                <div className=" flex-grow-1 centrado">
                  <div className="d-inline-flex">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 texto-color1 nav-menu-m nav-menu-t nav-menu-d">
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" href="/">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/plans">
                          Plans
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/">
                          Benefits
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/">
                          Claims
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/">
                          Testimonials
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/">
                          Constact Us
                        </Link>
                      </li>
                      <li className="nav-item btn-started1 text-start">
                        <button type="button" className="px-0 py-2 btn btn-link texto-color1 link-offset-3">Login</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mostrarBtn">
                  <button type="button" className="btn btn-link texto-color2 btn-login link-offset-3">Login</button>
                  <button className="btn btn-success texto-color3 btn-started2">
                    Get Started
                  </button>
                </div>
              </div>
            </section>
          </div>
        </nav>
      </>
    );
}