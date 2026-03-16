import aboutImg from "../../../assets/about-img.png";

const AboutMe = () => {
  return (
    <section className="section-py ">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="bg-base-200 border-x-4 border-indigo-900 rounded-tl-full rounded-bl-full rounded-br-full m-auto overflow-hidden ">
          <img src={aboutImg} alt="Rakibul Islam" />
        </div>

        <div>
          <h2 className="text-5xl text-purple-600 mt-10 lg:mb-8 md:mb-6 sm:mb-5 mb-4">
            About Me
          </h2>
          <div className="space-y-3">
            <p className="text-base text-white">
              I'm Rakibul Islam, a frontend-focused Full-Stack Software Engineer
              with over 3 years of experience building scalable SaaS platforms,
              business dashboards, and modern web applications.
            </p>
            <p className="text-base text-white">
              My primary expertise is in frontend engineering, where I design
              and develop high-performance user interfaces using React.js,
              Next.js, Vue.js, Nuxt.js, and TypeScript. I focus on building
              scalable frontend architectures, reusable component systems, and
              maintainable UI design systems that improve development efficiency
              and application performance.
            </p>
            <p className="text-base text-white">
              On the backend, I work with Node.js, Express.js, and MongoDB to
              build secure APIs and scalable services that support complex
              product workflows.
            </p>
            <p className="text-base text-white">
              Throughout my career, I have worked on SaaS products, marketplace
              platforms, and ThemeForest / CodeCanyon templates, developing
              features such as interactive dashboards, role-based systems, data
              visualization modules, and large-scale business applications.
            </p>
          </div>
          <a
            href="mailto:rakibul.islam.dev.info@gmail.com"
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
