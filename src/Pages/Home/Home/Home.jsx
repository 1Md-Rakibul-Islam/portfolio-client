import React from "react";
import { Link } from "react-router-dom";
import Projects from "../Projects/Projects";
import Banner from "../Banner/Banner";
import ContactUs from "../../Shared/ContactUs/ContactUs";
import AboutMe from "../../Shared/AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Services from "../Service/Services";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Skills />
      <AboutMe />
      <Services />
      <Projects />
        <Link className="flex justify-center" to={'/portfolio'}>
          <button className="mx-auto btn btn-outline btn-md btn-primary mt-5">See More</button>
        </Link>
      <ContactUs />
    </div>
  );
};

export default Home;
