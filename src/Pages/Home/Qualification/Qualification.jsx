import { useState } from "react";
import Education from "../Home/Education/Education";
import Experience from "../Home/Experience/Experience";

const tabs = [
  {
    id: "exp",
    label: "Experience",
    component: Experience,
    title: "Experience",
  },
  {
    id: "edu",
    label: "Education",
    component: Education,
    title: "Education",
  },
];

const Qualification = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const ActiveComponent = activeTab?.component;

  return (
    <section className="section-py bg-purple-700/[5%]">
      {/* Tabs */}
      <div className="md:mb-8 mb-5">
        <ul className="flex justify-center flex-wrap text-sm font-medium text-center text-gray-400">
          {tabs?.map((tab) => (
            <li
              key={tab?.id}
              onClick={() => setActiveTab(tab)}
              className="mr-2 cursor-pointer"
            >
              <button
                className={`inline-block p-4 rounded-t-lg border-b transition-colors duration-300
                ${
                  activeTab?.id === tab?.id
                    ? "bg-gray-800 text-purple-500 border-purple-500"
                    : "hover:text-purple-500 border-gray-700"
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="relative text-gray-100">
        <div className="lg:mx-40 md:mx-24">
          <div className="grid xl:gap-10 lg:gap-8 md:gap-6 gap-5 mx-4 sm:grid-cols-12">
            {/* Title */}
            <div className="col-span-12 xl:col-span-3 md:col-span-4">
              <div className="sticky top-40 text-center md:text-left mb-14 before:block before:w-28 before:h-3 before:mb-5 before:rounded-md before:mx-auto md:before:mx-0 before:bg-purple-700">
                <h3 className="text-3xl font-semibold">{activeTab?.title}</h3>
              </div>
            </div>

            {/* Dynamic Component */}
            <div className="col-span-12 md:col-span-8 xl:col-span-9">
              <ActiveComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
