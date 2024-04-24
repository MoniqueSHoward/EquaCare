import Logo from "../assets/images/equacare.png";
import { Link } from "react-router-dom";


const Forgotpassword = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
    <div className="col-lg-4 col-md-6 col-sm-8">
      <form>
        <h1 className="text-center mb-4" style={{ fontWeight: "bold" , color : "#27BCBB" , fontSize : "20px" , fontFamily : "sans-serif"}}>
          EquaCare
        </h1>
      <div className="mb-2 d-flex justify-content-center">
      <img src={Logo} className="Logo" alt="Logo" style={{width : "60px"}}/>
        </div>
        <div className="mb-4 text-center">
          <h4 style={{ fontWeight: "bold" }}>Enter email to reset password</h4>
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary mb-3 mx-auto d-block">
          Send Email
        </button>
        <div className='text-center'>
          <label className="form-label">
            Send me back to {" "}
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "#6366F1" }}
            >
              Login
            </Link>
          </label>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Forgotpassword