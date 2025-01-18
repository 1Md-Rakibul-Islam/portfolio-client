import React from "react";
import aboutImg from "../../../assets/about-img.png";

const AboutMe = () => {
  return (
    <section className="section-py mx-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="bg-base-200 border-x-4 border-indigo-900 rounded-tl-full rounded-bl-full rounded-br-full m-auto overflow-hidden ">
          <img className="" src={aboutImg} alt="" />
        </div>

        <div className="">
          <h2 className="text-5xl text-purple-600 mt-10 mb-3">About Me</h2>
          <p className="text-lg text-white">
            I'm a web developer with a focus on the MERN stack, but still
            exploring other technologies and frameworks that catch my interest!
            I love building front end applications. I believe that if you do
            something with your love and passion, the chances of success are
            much higher. if you're looking for a developer to add to your team,
            I'd love to hear from you! <br /> <br />
            When I'm not coding, I'm likely at the gym or surfing the city with
            my longboard You can find me on GitHub, Twitter and LinkedIn.
          </p>
          <a
            href="mailto:rakibul9bd@gmail.com"
            className="relative mt-5 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white text-white focus:ring-4 focus:outline-none  focus:ring-purple-800"
          >
            <button className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Higher Me
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
