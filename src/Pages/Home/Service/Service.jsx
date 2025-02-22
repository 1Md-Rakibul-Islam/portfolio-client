import React from "react";
import { FaPhone } from "react-icons/fa";

const Service = ({ service }) => {
  const { icon, title, experience } = service;
  return (
    <div
      className="relative flex flex-col items-center text-center rounded-md hover:shadow-2xl text-gray-100 p-6 
        border-b border-gray-200/30 bg-white/20 navmorphism backdrop-blur-xl
        "
    >
      <img
        src={icon}
        alt=""
        className="absolute -top-16  bg-gray-900 p-5 rounded-full w-[100px] h-[100px] bg-body"
      />
      <div className="">
        <h2 className="z-50 text-3xl font-semibold mb-8 mt-16 tracking-wide">
          {title}
        </h2>
        <p className="text-gray-400">{experience}</p>
      </div>
    </div>
  );
};

export default Service;
