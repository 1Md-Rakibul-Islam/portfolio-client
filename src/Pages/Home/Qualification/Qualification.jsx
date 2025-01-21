import React, { useState } from "react";
import Education from "../Home/Education/Education";
import Experience from "../Home/Experience/Experience";
import Skills from "../Skills/Skills";

const Qualification = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="section-py bg-purple-700/[5%]">
      {/* Tab index */}
      <div className="md:mb-8 mb-5">
        <ul className="flex justify-center flex-wrap text-sm font-medium text-center border-gray-700 text-gray-400">
          <li onClick={() => setIndex(0)} className="mr-2 hover:cursor-pointer">
            <button
              className={`inline-block p-4 hover:text-purple-700 rounded-t-lg ${
                index === 0 && "bg-gray-800 text-purple-700"
              } border-b`}
            >
              Experience
            </button>
          </li>
          <li onClick={() => setIndex(1)} className="mr-2 hover:cursor-pointer">
            <button
              className={`inline-block p-4 hover:text-purple-700 rounded-t-lg ${
                index === 2 && "bg-gray-800 text-purple-700"
              } border-b`}
            >
              Education
            </button>
          </li>
        </ul>
      </div>

      {/* Tab Content */}
      <div>
        <div hidden={index !== 0}>
          <Experience />
        </div>
        <div hidden={index !== 1}>
          <Education />
        </div>
      </div>
    </section>
  );
};

export default Qualification;
