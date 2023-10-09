import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };
  const navLinks = (
    <>
      <li className="uppercase">
        <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : "")} to="/">
          Home
        </NavLink>
      </li>
      <li className="uppercase">
        <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : "")} to="/about">
          About
        </NavLink>
      </li>
      <li className="uppercase">
        <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : "")} to="/events">
          Events
        </NavLink>
      </li>

      {user ? (
        <>
          <li className="uppercase">
            <NavLink
              className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : "")}
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink
              className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : "")}
              to="/booked"
            >
              Booked Event
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Event</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {/* <Link to="/login"><a className="btn">Login</a></Link> */}
        {user ? (
          <>
            <span className="mr-3">{user.displayName}</span>
            <span className="mr-3 btn btn-ghost btn-circle avatar w-10 rounded-full">
              <img src={user.photoURL} alt="" />
            </span>
            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
