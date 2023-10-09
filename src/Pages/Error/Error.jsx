import { Link, Navigate } from "react-router-dom";
import img from "../../assets/Images/error-illustration.png";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Error = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-3/4 mx-auto">
        <img className="w-3/4 mx-auto" src={img} alt="" />
        <h1 className="text-5xl text-center">Opps!!! Something Wrong</h1>
        <div className="link__404 text-center">
          <button onClick={() => Navigate(-1)}>Back </button>
          <Link className="text-blue-600 underline" to={"/"}> Back to Home</Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
