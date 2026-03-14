import { useState } from "react";
import Education from "../Home/Education/Education";
import Experience from "../Home/Experience/Experience";

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
                index === 1 && "bg-gray-800 text-purple-700"
              } border-b`}
            >
              Education
            </button>
          </li>
        </ul>
      </div>

      {/* Tab Content */}
      {index === 0 && <Experience />}
      {index === 1 && <Education />}
    </section>
  );
};

export default Qualification;
