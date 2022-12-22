import React from "react";
import { Link } from "react-router-dom";
import Projects from "../Projects/Projects";
import Banner from "../Banner/Banner";
import ContactUs from "../../Shared/ContactUs/ContactUs";
import AboutMe from "../../Shared/AboutMe/AboutMe";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
        <Link className="flex justify-center" to={'/portfolio'}>
          <button className="mx-auto btn btn-outline btn-md btn-primary mt-5">See More</button>
        </Link>
      <AboutMe></AboutMe>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
