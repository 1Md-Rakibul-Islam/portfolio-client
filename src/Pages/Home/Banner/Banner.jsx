import React from "react";
import portfolioImg from "../../../assets/profile2.jpg";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <section className="section-py overflow-hidden min-h-screen h-full">
      <div className="relative container">
        <div className="grid grid-cols-12 items-center lg:gap-0 gap-y-10">
          <div className="lg:col-start-2 lg:col-end-7 col-span-12 lg:order-1 order-2">
            <div className="max-lg:flex flex-col items-center justify-center max-lg:text-center text-white">
              <h2 className="text-3xl">Hello There!</h2>
              <h2 className=" text-4xl md:text-6xl  my-4">I am </h2>
              <div className="text-purple-600">
                <TypeAnimation
                  sequence={[
                    "RAKIBUL ISLAM", // Types 'One'
                    1000, // Waits 1s
                    "a Full-Stack Web Developer", // Deletes 'One' and types 'Two'
                    2000,
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: "2.2rem" }}
                />
              </div>

              <div className="lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 max-lg:mt-4">
                <div className="flex lg:flex-col max-lg:items-center max-lg:justify-center gap-2.5">
                  <a
                    href="https://github.com/1Md-Rakibul-Islam"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-4xl text-purple-400 border border-purple-400 rounded-md p-1 hover:border-blue-600"></FaGithub>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rakibulislam101"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-4xl text-purple-400 border border-purple-400 rounded-md p-1 hover:border-blue-600"></FaLinkedin>
                  </a>
                  <a
                    href="https://facebook.com/rakibulislam10101"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-4xl text-purple-400 border border-purple-400 rounded-md p-1 hover:border-blue-600"></FaFacebook>
                  </a>
                  <a
                    href="https://twitter.com/MrRakib17184590"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-4xl text-purple-400 border border-purple-400 rounded-md p-1 hover:border-blue-600"></FaTwitter>
                  </a>
                </div>
              </div>

              <p className="text-base text-neutral-400 mt-5">
                I am a passionate and dedicated Web Developer with over 2 years
                of professional experience. I specialize in creating
                high-quality, scalable, and cross-browser-compatible web
                applications. My experience aligns with industry standards,
                including platforms such as ThemeForest and CodeCanyon. Known
                for writing clean, reusable, and optimized code, I excel at
                solving complex problems efficiently. I am a quick learner and
                stay ahead of emerging trends and technologies to contribute to
                impactful projects.
              </p>
              <div className="mt-8">
                <a
                  href="https://drive.google.com/u/0/uc?id=1KBeOC-FdwRjgRpMK_MLS7cPeGZkY4Dys&export=download"
                  download
                  className="px-8 py-3 bg-gradient-to-r from-indigo-800 via-purple-500 to-pink-500 font-semibold rounded-full bg-gray-100 text-gray-800"
                >
                  <span className="text-white ">DOWNLOAD RESUMI</span>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-start-8 lg:col-end-13 col-span-12 order-1 lg:order-2">
            <div className="max-lg:flex justify-center items-center">
              <div className="xxl:size-[520px] md:size-[480px] sm:size-[360px] size-[300px] border-[20px] border-gray-200/30 rounded-full">
                <img
                  className="max-w-[unset] h-full objecvt-cover rounded-full"
                  src={portfolioImg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
