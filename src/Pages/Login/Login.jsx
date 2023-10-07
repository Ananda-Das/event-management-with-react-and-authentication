import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get("email");
        const password = form.get("password");

        // sign in user 
        signIn(email, password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })

    }
  return (
    <div>
      <Navbar></Navbar>
      {/* login-start */}
      <div>
        <h1 className="mx-auto mt-5 text-5xl text-center font-extrabold uppercase">
          Please <span className="text-[#ce1446]">Login</span>
        </h1>
        {/* form-start */}
        <form onSubmit={handleLogin} className="card-body text-center lg:w-1/2 md:h-3/4 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type={showPassword ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required  /> <span className="absolute right-[400px] bottom-[320px] text-xl" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#ce1446] text-white font-bold hover:text-[#ce1446] ">Login</button>
          </div>
        </form>
        {/* form-end */}
        <p className="text-center">
          Do not have an Account ?{" "}
          <Link to="/register" className="text-blue-600 underline">
            Register
          </Link>
        </p>
      </div>
      {/* login-end */}
      <Footer></Footer>
    </div>
  );
};

export default Login;
