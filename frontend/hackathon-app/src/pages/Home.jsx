import React from "react";
import HomeLogo from "../assets/images/healthcare_assistant.png";
import Logo from "../assets/images/equacare.png";
import "../styles/Home.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <h1
              className="my-4"
              style={{
                fontWeight: "bold",
                color: "#27BCBB",
                fontSize: "20px",
                fontFamily: "sans-serif",
              }}
            >
              EquaCare
            </h1>
            <div className="mb-2 d-flex justify-content-center">
              <img
                src={Logo}
                className="Logo"
                alt="Logo"
                style={{ width: "60px" }}
              />
            </div>
            <img src={HomeLogo} alt="" className="img" />
            <div className="col-lg-3 col-md-5 col-sm-7 col-12 text-center my-3">
              <p style={{ color: "#273rBB" }}>
                Making encounters with healthcare providers easier before,
                during, and after each visit for patients with Autism.
              </p>
            </div>
            <Link to="/chat">
              <button className="btn btn-primary mb-2">Start</button>
            </Link>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;
