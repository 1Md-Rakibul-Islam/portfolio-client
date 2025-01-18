import React from "react";

const Education = () => {
  return (
    <div className=" relative text-gray-100">
      <div className="lg:mx-40 md:mx-24 ">
        <div className="grid xl:gap-10 lg:gap-8 md:gap-6 gap-5 mx-4 sm:grid-cols-12">
          <div className="col-span-12 xl:col-span-3 md:col-span-4">
            <div className="sticky top-40 text-center md:text-left mb-14 before:block before:w-28 before:h-3 before:mb-5 before:rounded-md before:mx-auto md:before:mx-0 before:bg-purple-700">
              <h3 className="text-3xl font-semibold">My Educations</h3>
            </div>
          </div>
          <div className="relative col-span-12 sm:px-4 px-10 space-y-6 md:col-span-8 xl:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-700">
              <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-purple-700">
                <h3 className="text-xl font-semibold tracking-wide">
                  B.Sc in Computer Science and Engineering
                </h3>
                <h4 className="text-lg text-gray-300 my-2 tracking-wide">
                  Uttara University
                </h4>
                <time className="text-xs tracking-wide uppercase text-gray-400">
                  Jul 2023 - Present || (Evening batch)
                </time>
                <p className="mt-5">
                  I began my Bachelor’s degree in Computer Science and
                  Engineering at Uttara University. I am passionate about
                  technology and eager to deepen my knowledge in key areas such
                  as programming in C, C++, and JavaScript, as well as data
                  structures and algorithms, system design, databases, API
                  development, problem-solving, testing, and software
                  development lifecycle (SDLC). This field offers immense
                  opportunities for innovation, and I look forward to
                  contributing to research and learning from experts.
                </p>
              </div>
              <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-purple-700">
                <h3 className="text-xl font-semibold tracking-wide">
                  Diploma in Computer Science and Technology
                </h3>
                <h4 className="text-lg text-gray-300 my-2 tracking-wide">
                  Shariatpur Polytechnic Institute
                </h4>
                <time className="text-xs tracking-wide uppercase text-gray-400">
                  Jan 2007 - Dec 2024
                </time>
                <p className="mt-5">
                  I completed my Diploma in Engineering in Computer Science at
                  Shariatpur Polytechnic Institute, where I developed skills in
                  Python, Java, and JavaScript, as well as web development. This
                  program provided a solid foundation in software design and
                  problem-solving. Through hands-on projects, I enhanced my
                  coding abilities and prepared for real-world applications. My
                  education ignited a passion for continuous learning and
                  innovation in technology, equipping me with a successful
                  career in IT.
                </p>
              </div>
              <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-purple-700">
                <h3 className="text-xl font-semibold tracking-wide">SSC</h3>
                <h4 className="text-lg text-gray-300 my-2 tracking-wide">
                  Jonail M.L High School
                </h4>
                <time className="text-xs tracking-wide uppercase text-gray-400">
                  Jan 2013 - Dec 2018
                </time>
                <p className="mt-5">
                  I admitted on class six at 'Jonail M.L High School', in 2007
                  and studied there till class five (2012). The beginning of a
                  new life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
