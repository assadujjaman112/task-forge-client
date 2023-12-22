import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut} = useContext(AuthContext);
  const navigate = useNavigate();


  const handleLogOut = () => {
    logOut()
    .then (() => {
      navigate("/")
    })
    .catch(error => {
      console.error(error);
    })
  }
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/profile">Task Manger</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar w-4/5 mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="text-xl font-bold md:text-2xl lg:text-3xl">
          Task
          <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
            Forge
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleLogOut} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg">
            Log Out
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
