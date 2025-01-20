import React from "react";
import Projects from "../Projects/Projects";
import Banner from "../Banner/Banner";
import ContactUs from "../../Shared/ContactUs/ContactUs";
import AboutMe from "../../Shared/AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Services from "../Service/Services";
import { Link } from "react-router-dom";
import Qualification from "../Qualification/Qualification";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Qualification />
      {/* <Skills /> */}
      <AboutMe />
      <Services />
      <Projects />
      <Testimonial />
      <ContactUs />
    </div>
  );
};

export default Home;
