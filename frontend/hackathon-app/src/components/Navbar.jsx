import React from "react";
import Logo from "../assets/images/equacare.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="col-12">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <Link to="/" style={{textDecoration : "none"}}>
              <a class="navbar-brand" href="#">
                <img
                  src={Logo}
                  className="Logo"
                  alt="Logo"
                  style={{ width: "40px" }}
                />
                <span className="ms-3">EquaCare</span>
              </a>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/profile1" style={{textDecoration :"none"}}>
                  <a class="nav-link active" aria-current="page" href="#">
                    Profile1
                  </a></Link>
                </li>
                <li class="nav-item">
                <Link to="/profile2" style={{textDecoration :"none"}}>
                  <a class="nav-link active" aria-current="page" href="#">
                    Profile2
                  </a></Link>
                </li>
                <li class="nav-item">
                <Link to="/profile3" style={{textDecoration :"none"}}>
                  <a class="nav-link active" aria-current="page" href="#">
                    Profile3
                  </a></Link>
                </li>    
                <li class="nav-item">
                <Link to="/profile4" style={{textDecoration :"none"}}>
                  <a class="nav-link active" aria-current="page" href="#">
                    Profile4
                  </a></Link>
                </li>
                <li class="nav-item">
                <Link to="/profile5" style={{textDecoration :"none"}}>
                  <a class="nav-link active" aria-current="page" href="#">
                    Profile5
                  </a></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
