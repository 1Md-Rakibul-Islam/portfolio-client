import React, { useState } from "react";
import { Link } from "react-router-dom";
import brandLogo from '../../../assets/logo.png';
import Dropdown from "../../../Components/Dropdown/Dropdown";
import useScrollPosition from "../../../Hooks/useScrollPosition";

const NavBar = () => {

  // const { user, logOut } = useContext(AuthContext);
  const [userOpen, setUserOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const handleLogOut = () => {
    localStorage.removeItem("CodersStackBox");
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };



  const scrolled = useScrollPosition(50);

    const menuItems = <React.Fragment>
        <li className="font-normal font-poppins text-[16px]  cursor-pointer  mr-6 "><Link to={'/'}>Home</Link></li>
        {/* <li className="font-normal font-poppins text-[16px]  cursor-pointer  mr-6 "><a href="#skills">Skills</a></li> */}
        <li className="font-normal font-poppins text-[16px]  cursor-pointer  mr-6 "><Link to={'/portfolio'}>Portfolio</Link></li>
        <li className="font-normal font-poppins text-[16px]  cursor-pointer  mr-6 "><Link to={'/blogs'}>Blogs</Link></li>
        <li className="font-normal font-poppins text-[16px]  cursor-pointer  mr-6 "><Link to={'/contractUs'}>Contract Us</Link></li>
        <li className="font-normal font-poppins text-[16px]  cursor-pointer  mr-6 "><Link to={'/about'}>About</Link></li>
    </React.Fragment>

  return (
    <nav className="relative mb-20 w-full mx-auto flex justify-center">
      <div className={`
      fixed top-3 md:w-[800px] w-full ${
        scrolled
          ? "md:border-b md:border-gray-200/30 md:bg-white/20 navmorphism md:backdrop-blur-xl md:px-10 rounded-full"
          : "bg-white/0"
      } z-30 transition-all mx-auto`}>
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <div className="flex justify-end md:justify-between py-4 ">
          <img className="hidden md:block w-[35px]" src={brandLogo} alt="" srcset="" />
          
          <ul
            className={`list-none md:flex hidden justify-end items-center flex-1 text-white`}
          >
            {menuItems}
              {/* {user?.uid ? ( */}
          </ul>
          <div className="">
                        <button onClick={() => setUserOpen(true)} type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" >
                          <span className="sr-only">Open user menu</span>
                          <img className="w-8 h-8 rounded-full" src="" alt="user photo" />
                        </button>
                          { userOpen && <Dropdown
                            menuItems={menuItems}
                          // userOpen={userOpen}
                          // setUserOpen={setUserOpen}
                          // user={user}
                        />}
                      </div>
        </div>
      </div>
    </nav>

  );
};

export default NavBar;
