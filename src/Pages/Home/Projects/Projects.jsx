import React, { useEffect } from "react";
import { useState } from "react";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-1md-rakibul-islam.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section className="my-10 mx-10 md:mx-40">
      <h2 className="text-4xl text-center my-10 mx-auto text-purple-600">Portfolio</h2>
      {projects.length > 0 ? "" : "No Data Found"}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects?.map((project) => (
          <Project key={project._id} project={project}></Project>
        ))}
      </div>
    </section>
  );
};

export default Projects;
