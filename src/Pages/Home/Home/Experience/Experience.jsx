import React from "react";

const Experience = () => {
  return (
    <div className="relative text-gray-100">
      <div className="lg:mx-40 md:mx-24">
        <div className="grid xl:gap-10 lg:gap-8 md:gap-6 gap-5 mx-4 sm:grid-cols-12">
          <div className="col-span-12 xl:col-span-3 md:col-span-4">
            <div className="sticky top-40 text-center md:text-left mb-14 before:block before:w-28 before:h-3 before:mb-5 before:rounded-md before:mx-auto md:before:mx-0 before:bg-purple-700">
              <h3 className="text-3xl font-semibold">Work Experience</h3>
            </div>
          </div>
          <div className="relative col-span-12 sm:px-4 px-10 space-y-6 md:col-span-8 xl:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-700">
              <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-purple-700">
                <h3 className="text-xl font-semibold tracking-wide">
                  Frontend Developer
                </h3>
                <h4 className="text-lg text-gray-300 my-2 tracking-wide">
                  Softivus – Uttara Dhaka, Bangladesh || (On-Site)
                </h4>
                <time className="text-xs tracking-wide uppercase text-gray-400">
                  Sep 2023 - Present (Full-Time)
                </time>
                <p className="mt-5">
                  Collaborated with project managers, backend developers, and
                  UI/UX designers to analyze project requirements. Developed
                  high-quality web applications using JavaScript, TypeScript,
                  React.js, Next.js, Vue.js, Nuxt.js, Alpine.js, GSAP, and
                  integrated APIs. Delivered exceptional user experiences by
                  adhering to coding best practices and testing project
                  features.
                </p>
              </div>
              <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-purple-700">
                <h3 className="text-xl font-semibold tracking-wide">
                  Web Application Developer
                </h3>
                <h4 className="text-lg text-gray-300 my-2 tracking-wide">
                  Thrivers Wagmi – Asansol, West Bengal, India || (Contactual)
                </h4>
                <time className="text-xs tracking-wide uppercase text-gray-400">
                  Jun 2023 - Sep 2023 || (Project Based)
                </time>
                <p className="mt-5">
                  During my freelance stint at Thrivers Wagmi, I excelled as a
                  Web Application Developer, specializing in JavaScript, React,
                  MUI, SCSS/SASS, and Tailwind CSS. I crafted engaging Front-End
                  Applications and developed robust server-side APIs using
                  Node.js, Express, and MongoDB. My focus on responsive design
                  and seamless user interactions resulted in visually appealing
                  and functional web applications.
                </p>
              </div>
              <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-purple-700">
                <h3 className="text-xl font-semibold tracking-wide">
                  Frontend Developer Intern
                </h3>
                <h4 className="text-lg text-gray-300 my-2 tracking-wide">
                  JahhahMate – Dhaka, Bangladesh || (Remote)
                </h4>
                <time className="text-xs tracking-wide uppercase text-gray-400">
                  Jun 2023 - Aug 2023 || (Full-Time)
                </time>
                <p className="mt-5">
                  Implemented designs in collaboration with designers to ensure
                  a seamless user experience. Integrated server-side APIs and
                  developed web applications using React.js, Next.js,
                  TypeScript, Tailwind CSS, and MUI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
