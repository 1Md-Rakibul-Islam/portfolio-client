import Projects from "../Projects/Projects";
import Banner from "../Banner/Banner";
import ContactUs from "../../Shared/ContactUs/ContactUs";
import AboutMe from "../../Shared/AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Services from "../Service/Services";
import Qualification from "../Qualification/Qualification";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Banner />
      <Skills />
      <Qualification />
      <AboutMe />
      <Services />
      <Projects />
      <Testimonial />
      <ContactUs />
    </>
  );
};

export default Home;
