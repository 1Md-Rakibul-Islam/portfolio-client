import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Dropdown from "../../../Components/Dropdown/Dropdown";
import Logo from "../../../Components/Logo/Logo";
import useScrollPosition from "../../../Hooks/useScrollPosition";

const NavBar = () => {
  // const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrolled = useScrollPosition(50);

  useEffect(() => {
    // Function to handle outside click
    function handleClickOutside(event) {
      // Check if the click is outside the dropdown
      if (menuOpen && !event.target.closest(".dropdown")) {
        setMenuOpen(false);
      }
    }

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount or dependency change
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const menuItems = (
    <React.Fragment>
      <li className="font-normal font-poppins text-[16px]  cursor-pointer  mr-6 hover:text-purple-500 ">
        <Link to={"/"}>Home</Link>
      </li>
      {/* <li className="font-normal font-poppins text-[16px]  cursor-pointer  mr-6 hover:text-purple-500 "><a href="#skills">Skills</a></li> */}
      <li className="font-normal font-poppins text-[16px]  cursor-pointer  mr-6 hover:text-purple-500 ">
        <Link to={"/portfolio"}>Portfolio</Link>
      </li>
      <li className="font-normal font-poppins text-[16px]  cursor-pointer  mr-6 hover:text-purple-500 ">
        <Link to={"/blogs"}>Blogs</Link>
      </li>
      <li className="font-normal font-poppins text-[16px]  cursor-pointer  mr-6 hover:text-purple-500 ">
        <Link to={"/contractUs"}>Contract Us</Link>
      </li>
      <li className="font-normal font-poppins text-[16px]  cursor-pointer  mr-6 hover:text-purple-500 ">
        <Link to={"/about"}>About</Link>
      </li>
    </React.Fragment>
  );

  return (
    <nav className="relative mb-20 w-full mx-auto flex justify-center">
      <div
        className={`
      fixed top-3 md:w-[800px] w-full ${
        scrolled
          ? "md:border-b md:border-gray-200/30 md:bg-white/20 navmorphism md:backdrop-blur-xl md:px-10 rounded-full"
          : "bg-white/0"
      } z-30 transition-all mx-auto`}
      >
        <div className="flex justify-end md:justify-between py-4 ">
          <div className="hidden md:flex items-center gap-4 text-xl text-purple-400">
            <Logo />
          </div>

          <ul
            className={`list-none md:flex hidden justify-end items-center flex-1 text-white`}
          >
            {menuItems}
          </ul>
          <div className="">
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              type="button"
              className="md:hidden block mr-5 "
            >
              <span className="sr-only">Open user menu</span>
              <FaBars className="text-2xl text-white hover:text-purple-700 mt-1.5" />
            </button>
            {menuOpen && <Dropdown menuItems={menuItems} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
