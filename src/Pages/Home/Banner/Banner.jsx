import React from "react";
import portfolioImg from "../../../assets/profile2.jpg";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between items-center lg:flex-row lg:gap-0 gap-y-10 flex-col-reverse lg:pt-12">
          <div className="w-full flex flex-row-reverse justify-evenly gap-10 mx-auto">
            <div className="w-[480px] text-white">
              <h2 className="text-3xl">Hello THERE !</h2>
              <h2 className=" text-4xl md:text-6xl  my-5">I am</h2>
              <div className="text-purple-600">
                <TypeAnimation
                  sequence={[
                    "RAKIBUL ISLAM", // Types 'One'
                    1000, // Waits 1s
                    "a Full-Stack Web Developer", // Deletes 'One' and types 'Two'
                    2000,
                    () => {
                      // console.log('Done typing!'); // Place optional callbacks anywhere in the array
                    },
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: "2.2rem" }}
                />
              </div>
              <div className="mt-16">
                {/* <p className='mb-10'>Web Application Developer(MERN)</p> */}
                {/* <Link  to='/portfolio'><button className='btn btn-secondary mr-5'>PORTFOLIO</button></a> */}
                <a
                  href="https://drive.google.com/u/0/uc?id=1KBeOC-FdwRjgRpMK_MLS7cPeGZkY4Dys&export=download"
                  download
                  className="px-8 py-3 bg-gradient-to-r from-indigo-800 via-purple-500 to-pink-500 font-semibold rounded-full bg-gray-100 text-gray-800"
                >
                  <span className="text-white ">DOWNLOAD RESUMI</span>
                </a>
              </div>
            </div>
            <div className="">
              <a
                href="https://github.com/1Md-Rakibul-Islam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-4xl text-purple-400 mb-2 border border-purple-400 rounded-md p-1 hover:border-blue-600"></FaGithub>
              </a>

              <a
                href="https://www.linkedin.com/in/1md-rakibul-islam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-4xl text-purple-400 mb-2 border border-purple-400 rounded-md p-1 hover:border-blue-600"></FaLinkedin>
              </a>

              <a
                href="https://facebook.com/profaile.rakibul.islam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-4xl text-purple-400 mb-2 border border-purple-400 rounded-md p-1 hover:border-blue-600"></FaFacebook>
              </a>

              <a
                href="https://twitter.com/MrRakib17184590"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-4xl text-purple-400 mb-2 border border-purple-400 rounded-md p-1 hover:border-blue-600"></FaTwitter>
              </a>
            </div>
          </div>
          <div className="w-[360px] h-[360px] md:w-full md:h-full overflow-hidden  flex items-center justify-evenly rounded-full">
            <div className="border-b border-gray-200/30 bg-white/20 navmorphism backdrop-blur-xl p-3 md:p-5 rounded-full">
              <img
                className="w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full"
                src={portfolioImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
