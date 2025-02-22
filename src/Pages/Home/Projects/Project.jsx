import React from "react";
import { Link } from "react-router-dom";
import { FaEye, FaGithub } from "react-icons/fa";

const Project = ({ project }) => {
  const {
    _id,
    image,
    title,
    subject,
    description,
    technologies,
    gitHubClient,
    gitHubServer,
    liveLink,
  } = project;

  // console.log(image);

  return (
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <figure className="h-[480px] w-full">
        <img
          className="w-full overflow-scroll transition-transform duration-500  group-hover:scale-125"
          src={image[0]}
          alt=""
        />
      </figure>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/80 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center p-5 transition-all duration-500 group-hover:translate-y-0">
        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-2xl font-bold text-white mb-5 uppercase">
            {title}
          </h1>
          <div className="mb-12 w-20 h-1.5 bg-purple-700" />

          <div className="w-full h-[200px] text-white">
            <div className="flex mb-2 rounded-lg justify-center items-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 w-36">
              <span className="font-bold px-2 py-1">Technologies:</span>
            </div>
            <p className="">{technologies}</p>
            <div className="flex justify-evenly items-center gap-5 mt-5">
              <>
                {gitHubClient && (
                  <a
                    href={gitHubClient}
                    className="flex flex-col justify-center items-center"
                    target="blank"
                  >
                    <FaGithub className="text-2xl text-purple-700"></FaGithub>
                    <span className="">Client</span>
                  </a>
                )}
              </>
              <>
                {gitHubServer && (
                  <a
                    href={gitHubServer}
                    className="flex flex-col justify-center items-center"
                    target="blank"
                  >
                    <FaGithub className="text-2xl text-purple-700"></FaGithub>
                    <span className="">Server</span>
                  </a>
                )}
              </>
              <>
                {liveLink && (
                  <a
                    href={liveLink}
                    className="flex flex-col justify-center items-center"
                    target="blank"
                  >
                    <FaEye className="text-2xl text-purple-700"></FaEye>
                    <span className="">Live</span>
                  </a>
                )}
              </>
            </div>
            {/* <div className="flex justify-center items-center mt-8">
              <Link to={`/project/details/${title}`}>
                <a
                  className="text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-800 font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2"
                  href={gitHubClient}
                  target="blank"
                >
                  <span className="">Details</span>
                </a>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
