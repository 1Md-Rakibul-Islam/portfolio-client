import portfolioImg from "../../../assets/profile2.jpg";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

// Socials array
const socials = [
  { icon: FaGithub, url: "https://github.com/1Md-Rakibul-Islam" },
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/rakibul-islam-dev" },
  { icon: FaFacebook, url: "https://facebook.com/rakibulislam10101" },
  { icon: FaTwitter, url: "https://x.com/MrRakib17184590" },
];

// TypeAnimation texts
const typeTexts = [
  "Full-Stack Web Developer",
  2000,
  "Frontend Engineer",
  2000,
  "React & Next.js Developer",
  2000,
  "SaaS Application Developer",
  2000,
  "Micro-Frontend Developer",
  2000,
];

const Banner = () => {
  const resumeLink =
    "https://drive.google.com/u/0/uc?id=1KBeOC-FdwRjgRpMK_MLS7cPeGZkY4Dys&export=download";

  return (
    <section className="section-py overflow-x-hidden min-h-screen h-full">
      <div className="relative container">
        <div className="grid grid-cols-12 items-center lg:gap-0 gap-y-10">
          {/* Text Section */}
          <div className="lg:col-start-2 lg:col-end-7 col-span-12 lg:order-1 order-2">
            <div className="max-lg:flex flex-col items-center justify-center max-lg:text-center text-white">
              <p className="text-lg text-purple-400 mb-3">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Rakibul Islam
              </h1>

              <div className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-6">
                <TypeAnimation
                  sequence={typeTexts}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: "2.2rem" }}
                />
              </div>

              {/* Social Links */}
              <div className="lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 max-lg:mt-4">
                <div className="flex lg:flex-col max-lg:items-center max-lg:justify-center gap-2.5">
                  {socials?.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="text-4xl text-purple-400 border border-purple-400 rounded-md p-1 hover:border-blue-600 transition-colors duration-200" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Description */}
              <div className="sm:mt-5 mt-3 space-y-2">
                <p className="text-base text-neutral-400">
                  I build scalable SaaS platforms, modern dashboards, and
                  high-performance web applications using technologies like
                  React.js, Next.js, Vue.js, Nuxt.js, and TypeScript.
                </p>
                <p className="text-base text-neutral-400">
                  With 3+ years of professional experience, I specialize in
                  frontend architecture, component-driven development, and
                  micro-frontend systems, while also developing robust backend
                  services using Node.js, Express.js, and MongoDB.
                </p>
                <p className="text-base text-neutral-400">
                  I’ve contributed to SaaS products, ThemeForest and CodeCanyon
                  marketplace templates, and complex business applications,
                  focusing on clean architecture, performance optimization, and
                  maintainable code.
                </p>
              </div>

              {/* Resume Button */}
              <div className="mt-8">
                <a
                  href={resumeLink}
                  download
                  className="px-8 py-3 bg-gradient-to-r from-indigo-800 via-purple-500 to-pink-500 font-semibold rounded-full text-white transition-transform transform hover:scale-105"
                >
                  DOWNLOAD RESUME
                </a>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:col-start-8 lg:col-end-13 col-span-12 order-1 lg:order-2">
            <div className="max-lg:flex justify-center items-center">
              <div className="w-[300px] sm:w-[360px] md:w-[480px] xl:w-[520px] border-[20px] border-gray-200/30 rounded-full">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={portfolioImg}
                  alt="Rakibul Islam"
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
