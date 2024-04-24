import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Profile2 = () => {
  return (
    <>
    <Navbar/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
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

            <h1
              className="text-center "
              style={{
                fontWeight: "bold",
                color: "#27BCBB",
                fontSize: "20px",
                fontFamily: "sans-serif",
              }}
            >
              Emergency Contact
            </h1>
            <div className="col-lg-4 col-md-6 col-sm-7 col-11">
              <form>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your Phone:"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">RelationShip</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your RelationShip:"
                  />
                </div>
              </form>
              <h1
                className="text-center my-4"
                style={{
                  fontWeight: "bold",
                  color: "#27BCBB",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                }}
              >
                Medical Infomation
              </h1>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-7 col-11">
              <form>
                <div className="mb-3">
                  <label className="form-label">Primary Doctor</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your Primary Doctor:"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Health Insurance Company</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your Health Insurance Company:"
                  />
                </div>
              </form>
              <div className="d-flex justify-content-between"> {/* Changed here */}
                <Link to="/profile1">
                  <button className="btn btn-primary mb-2">
                    Previous 
                  </button>
                </Link>
                <Link to="/profile3">
                  <button className="btn btn-primary mb-2 ml-2">
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

export default Profile2;
