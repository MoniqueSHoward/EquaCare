import React from "react";
import P1image from "../assets/images/healthcare_assistant_standing.png";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Profile1 = () => {
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
            <img src={P1image} alt="" className="img1" />
            <h3
              className="text-center my-4"
              style={{
                fontWeight: "bold",
                color: "#27BCBB",
                fontSize: "20px",
                fontFamily: "sans-serif",
              }}
            >
              All About You:
            </h3>
            <div className="col-lg-4 col-md-6 col-sm-7 col-11">
              <form>
                <div className="mb-3">
                  <label className="form-label">Name:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your Name:"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Address:</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your Address:"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Zip</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your Zip Code:"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email:</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your Email:"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">BirthDay:</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Enter your Birthday:"
                    name="birthday"
                  />
                </div>
              </form>
              <div className="text-center">
                <Link to="/profile2">
                  <button className="btn btn-primary mb-2 d-flex justify-content-center">
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

export default Profile1;

// import React, { useState } from "react";
// import P1image from "../assets/images/healthcare_assistant_standing.png";
// import "../styles/Home.css";
// import { Link } from "react-router-dom";

// const Profile1 = () => {
//   // State to hold input values
//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     zip: "",
//     email: "",
//     birthday: ""
//   });

//   // Handler to update input values
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   // Log form data to console
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-12 d-flex flex-column align-items-center">
//             <h1
//               className="text-center my-4"
//               style={{
//                 fontWeight: "bold",
//                 color: "#27BCBB",
//                 fontSize: "20px",
//                 fontFamily: "sans-serif",
//               }}
//             >
//               Profile Setup
//             </h1>
//             <img src={P1image} alt="" className="img1" />
//             <h3
//               className="text-center my-4"
//               style={{
//                 fontWeight: "bold",
//                 color: "#27BCBB",
//                 fontSize: "20px",
//                 fontFamily: "sans-serif",
//               }}
//             >
//               All About You:
//             </h3>
//             <div className="col-lg-4 col-md-6 col-sm-7 col-11">
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <label className="form-label">Name:</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter your Name:"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Address:</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter your Address:"
//                     name="address"
//                     value={formData.address}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Zip:</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter your Zip Code:"
//                     name="zip"
//                     value={formData.zip}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Email:</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     placeholder="Enter your Email:"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                   />
//                 </div>
// <div className="mb-3">
//   <label className="form-label">BirthDay:</label>
//   <input
//     type="date"
//     className="form-control"
//     placeholder="Enter your Birthday:"
//     name="birthday"
//     value={formData.birthday}
//     onChange={handleInputChange}
//   />
// </div>
//                 <div className="text-center">
//                   <button type="submit" className="btn btn-primary mb-2">
//                     Submit
//                   </button>
//                   <br />
//                   <Link to="/profile2">
//                     <button className="btn btn-primary mb-2 ml-2">
//                       Next Page
//                     </button>
//                   </Link>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile1;
