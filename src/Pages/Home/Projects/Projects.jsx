import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CardLoading from "../../../Components/Loadings/CardLoading/CardLoading";
import Project from "./Project";
import { Link } from "react-router-dom";

const Projects = () => {
  const {
    data: projects,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data } = await axios.get("projects.json");
      return data;
    },
  });

  if (isLoading) {
    return <CardLoading />;
  }

  return (
    <section className="section-py">
      <div className="container">
        <h2 className="text-4xl text-center mb-10 mx-auto text-purple-600">
          Portfolio
        </h2>
        <h2 className="text-4xl text-center my-10 mx-auto">
          {projects?.length > 0 ? "" : "No Data Found"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects?.map((project, idx) => (
            <Project key={idx} project={project}></Project>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            to={"/portfolio"}
            className="relative mt-5 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-purple-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-full group-hover:bg-opacity-0">
              See More
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
