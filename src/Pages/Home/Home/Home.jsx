import React from "react";
import Projects from "../Projects/Projects";
import Banner from "../Banner/Banner";
import ContactUs from "../../Shared/ContactUs/ContactUs";
import AboutMe from "../../Shared/AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Services from "../Service/Services";
import { Link } from "react-router-dom";
import Qualification from "../Qualification/Qualification";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Qualification />
      {/* <Skills /> */}
      <AboutMe />
      <Services />
      <Projects />
      <div> 
        <Link className="flex justify-center" to={'/portfolio'}>
          <a className="relative mt-5 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-purple-200 focus:ring-purple-800">
              <button className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-full group-hover:bg-opacity-0">
                  See More
              </button>
          </a>
        </Link>
      </div>
      <ContactUs />
    </div>
  );
};

export default Home;
