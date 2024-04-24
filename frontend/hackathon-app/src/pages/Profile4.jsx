import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import Navbar from "../components/Navbar";

const Profile4 = () => {
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
            <div className="row d-flex justify-content-center">
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center card"
                style={{
                  border: "1px solid black",
                  color: "white",
                  cursor: "pointer",
                  width: "18rem",
                  overflow: "hidden",
                }}
              >
                <img
                  src={img1}
                  alt="Image1"
                  style={{ width: "110%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center card ms-2"
                style={{
                  border: "1px solid black",
                  
                  color: "white",
                  cursor: "pointer",

                  width: "18rem",
                  overflow: "hidden",
                }}
              >
                <img
                  src={img2}
                  alt="Image1"
                  style={{ width: "110%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center card mt-3"
                style={{
                  border: "1px solid black",
                  
                  color: "white",
                  cursor: "pointer",

                  width: "18rem",
                  overflow: "hidden",
                }}
              >
                <img
                  src={img3}
                  alt="Image1"
                  style={{ width: "110%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center ms-3 card mt-3"
                style={{
                  border: "1px solid black",
                  
                  color: "white",

                  width: "18rem",
                  overflow: "hidden",
                }}
              >
                <img
                  src={img4}
                  alt="Image1"
                  style={{ width: "110%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-5 mx-auto mt-5">
            <div className="d-flex justify-content-between"> {/* Modified line */}
              <Link to="/profile3">
                <button className="btn btn-primary mb-2">
                  Previous 
                </button>
              </Link>
              <br />
              <Link to="/profile5">
                <button className="btn btn-primary mb-2">
                  Next 
                </button>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile4;
