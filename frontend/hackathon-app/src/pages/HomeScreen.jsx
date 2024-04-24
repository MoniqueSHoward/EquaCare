import React from "react";
import Logo from "../assets/images/equacare.png";
import img1 from "../assets/images/health-care (1).jpg";
import img2 from "../assets/images/tooth-removebg-preview.png";
import img3 from "../assets/images/drug-removebg-preview.png";
import img4 from "../assets/images/eyeglasses-removebg-preview.png";
import dr from "../assets/images/serious-doctor-portrait-man-with-arms-crossed-hospital-healthcare-wellness-career-face-medical-professional-confident-surgeon-expert-mature-employee-glasses-canada.jpg";
import view from "../assets/images/rear-view-man-sitting-meeting.jpg";

const HomeScreen = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <div className="my-3 d-flex justify-content-center">
              <img
                src={Logo}
                className="Logo"
                alt="Logo"
                style={{ width: "60px" }}
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-10">
              <div className="card">
                <div className="card-title">
                  <p style={{ fontWeight: "bold" }} className="text-center">
                    Notifications
                  </p>
                  <p className="text-center">
                    Appointment with Dr.Lear at 2:00pm.
                  </p>
                  <p className="text-center">Review your CheckList</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="col-lg-3 col-md-4 col-sm-6 col-10 mx-auto mt-2">
              <b>View my Shedule</b>
              <div className="row mt-2">
                <div className="col-2">
                  <p>Mon</p>
                  <div
                    style={{
                      width: "35px",
                      backgroundColor: "#156082",
                      border: "1px solid black",
                      cursor: "pointer",
                      height: "35px",
                    }}
                    className="rounded-5 d-flex align-items-center justify-content-center"
                  >
                    <span
                      className="text-white text-center"
                      style={{ lineHeight: "35px" }}
                    >
                      1
                    </span>
                  </div>
                </div>
                <div className="col-2">
                  <p>Tues</p>
                  <div
                    style={{
                      width: "35px",
                      backgroundColor: "#156082",
                      border: "1px solid black",
                      cursor: "pointer",
                      height: "35px",
                    }}
                    className="rounded-5 d-flex align-items-center justify-content-center"
                  >
                    <span
                      className="text-white text-center"
                      style={{ lineHeight: "35px" }}
                    >
                      2
                    </span>
                  </div>
                </div>
                <div className="col-2">
                  <p>Wed</p>
                  <div
                    style={{
                      width: "35px",
                      backgroundColor: "#156082",
                      border: "1px solid black",
                      cursor: "pointer",
                      height: "35px",
                    }}
                    className="rounded-5 d-flex align-items-center justify-content-center"
                  >
                    <span
                      className="text-white text-center"
                      style={{ lineHeight: "35px" }}
                    >
                      3
                    </span>
                  </div>
                </div>
                <div className="col-2">
                  <p>Thurs</p>
                  <div
                    style={{
                      width: "35px",
                      backgroundColor: "#156082",
                      border: "1px solid black",
                      cursor: "pointer",
                      height: "35px",
                    }}
                    className="rounded-5 d-flex align-items-center justify-content-center"
                  >
                    <span
                      className="text-white text-center"
                      style={{ lineHeight: "35px" }}
                    >
                      4
                    </span>
                  </div>
                </div>
                <div className="col-2">
                  <p>Fri</p>
                  <div
                    style={{
                      width: "35px",
                      backgroundColor: "#156082",
                      border: "1px solid black",
                      cursor: "pointer",
                      height: "35px",
                    }}
                    className="rounded-5 d-flex align-items-center justify-content-center"
                  >
                    <span
                      className="text-white text-center"
                      style={{ lineHeight: "35px" }}
                    >
                      5
                    </span>
                  </div>
                </div>
              </div>
              <div className="row mt-2 ">
                <div className="col-12 ">
                  <b>Add a Task</b>
                </div>
                <div className="col-3 mt-2">
                  <img src={img1} alt="" style={{ width: "45px" }} />
                  <p>Visit the Doctor</p>
                </div>
                <div className="col-3 mt-2">
                  <img src={img2} alt="" style={{ width: "45px" }} />
                  <p>Go to Dentist</p>
                </div>
                <div className="col-3 mt-2">
                  <img src={img3} alt="" style={{ width: "45px" }} />
                  <p>Drugs</p>
                </div>
                <div className="col-3 mt-2">
                  <img src={img4} alt="" style={{ width: "45px" }} />
                  <p>Get Eye Exam</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mb-5">
                <div className="col-lg-3 col-md-4 col-sm-6 col-10 mx-auto mt-1">
                  <b style={{ color: "#123646" }}>Practice a Conversation</b>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-10 mx-auto mt-2 d-flex justify-content-center">
                  <div>
                    <img src={dr} alt="" style={{ width: "150px" }} />
                    <p style={{ fontWeight: "bold" }}>
                      Make a Doctor Appointment
                    </p>
                  </div>
                  <div>
                    <img src={view} alt="" style={{ width: "150px" }} />
                    <p style={{ fontWeight: "bold" }}>Check in at the Office</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
