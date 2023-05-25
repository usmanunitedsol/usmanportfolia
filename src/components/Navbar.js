import React, { useEffect } from "react";
import brand_logo from "../images/brand_logo.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  // for navigation location
  let location = useLocation();
  React.useEffect(() => {
    
  }, [location]);

  return (
    <div className="container">
      <div className="row navbar_row">
        <div className="col-sm-12 col-lg-4 d-flex align-items-center">
          <img src={brand_logo} className="img-fluid logo" alt="brand" />
        </div>
        <div className="col-sm-12 col-lg-8">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav align-items-center  me-auto mb-2 mb-lg-0">
                  <li className="nav-item d-flex align-items-center">
                    <i class="bi bi-house-door"></i>
                    <Link
                      className={`nav-link  ${location.pathname==='/' ? 'active' : "" }`}
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item d-flex align-items-center">
                    <i class="bi bi-file-person"></i>
                    <Link className={`nav-link  ${location.pathname==='/about' ? 'active' : "" }`} to="/about">
                      About
                    </Link>
                  </li>

                  <li className="nav-item d-flex align-items-center">
                    <i class="bi bi-cast"></i>
                    <Link className={`nav-link  ${location.pathname==='/projects' ? 'active' : "" }`} to="/projects">
                      Projects
                    </Link>
                  </li>
                  <li className="nav-item d-flex align-items-center">
                    <i class="bi bi-journal"></i>
                    <Link className={`nav-link  ${location.pathname==='/resume' ? 'active' : "" }`} to="/resume">
                      Resume
                    </Link>
                  </li>

                  <li className="nav-item d-flex align-items-center">
                    <i class="bi bi-newspaper"></i>
                    <Link className={`nav-link  ${location.pathname==='/blog' ? 'active' : "" }`} to="/blog">
                      Blogs
                    </Link>
                  </li>

                  <li className="nav-item ">
                    <a
                      href="#"
                      class="btn btn-secondary  navbar_button btn-lg disabled"
                      tabindex="-1"
                      role="button"
                      aria-disabled="true"
                    >
                      <i class="bi bi-link-45deg"></i>
                      <i class="bi bi-star"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
