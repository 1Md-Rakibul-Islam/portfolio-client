import React from "react";
import { Link } from "react-router-dom";
import brandLogo from '../../../assets/logo.png';

const NavBar = () => {

    const menuItems = <React.Fragment>
        <li className="hover:text-purple-600"><Link to={'/'}>Home</Link></li>
        <li className="hover:text-purple-600"><a href="#skills">Skills</a></li>
        <li className="hover:text-purple-600"><Link to={'/portfolio'}>Portfolio</Link></li>
        <li className="hover:text-purple-600"><Link to={'/blogs'}>Blogs</Link></li>
        <li className="hover:text-purple-600"><Link to={'/contractUs'}>Contract Us</Link></li>
        <li className="hover:text-purple-600"><Link to={'/about'}>About</Link></li>
    </React.Fragment>

  return (
    <div className="navbar justify-between bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link to='/' className=" bg-purple-100 rounded-b-full border-spacing-2 border-purple-700">
          <img className="w-[50px]" src={brandLogo} alt="" srcset="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-8 p-0">
            {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
