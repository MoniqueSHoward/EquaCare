import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Profile3 = () => {
  return (
    <>
    <Navbar/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-7 mx-auto ">
            <h1
              className="text-center my-4"
              style={{
                fontWeight: "bold",
                color: "#27BCBB",
                fontSize: "20px",
                fontFamily: "sans-serif",
              }}
            >
              Profile Setup
            </h1>
            <div className="row d-flex justify-content-center"> {/* Modified line */}
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center"
                style={{
                  border: "1px solid",
                  backgroundColor: "#31828F",
                  color: "white",
                  cursor: "pointer",
                  height: "150px",
                }}
              >
                <p className="text-center">Autism</p>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center"
                style={{
                  border: "1px solid",
                  backgroundColor: "#31828F",
                  color: "white",
                  cursor: "pointer",
                  height: "150px",
                }}
              >
                <p className="text-center">ADHD</p>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center"
                style={{
                  border: "1px solid",
                  backgroundColor: "#31828F",
                  color: "white",
                  cursor: "pointer",
                  height: "150px",
                }}
              >
                <p className="text-center">Dyslexia</p>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center"
                style={{
                  border: "1px solid",
                  backgroundColor: "#31828F",
                  color: "white",
                  cursor: "pointer",
                  height: "150px",
                }}
              >
                <p className="text-center">Other</p>
              </div>
            </div>
            <h4 className="text-center mt-3">
              Which Group do you identify with?
            </h4>

            <div className="d-flex justify-content-between"> {/* Modified line */}
              <Link to="/profile2">
                <button className="btn btn-primary mb-2">
                  Previous 
                </button>
              </Link>
              <br />
              <Link to="/profile4">
                <button className="btn btn-primary mb-2">
                  Next 
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile3;
