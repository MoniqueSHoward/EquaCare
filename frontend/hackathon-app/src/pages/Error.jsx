import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "70px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/">
        <button style={{ marginTop: "10px" }} className="btn btn-primary">Go Back to Home</button>
      </Link>
    </div>
  );
};

export default Error;
