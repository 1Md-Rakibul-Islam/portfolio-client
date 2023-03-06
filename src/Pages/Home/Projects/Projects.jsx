import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import CardLoading from "../../../Components/Loadings/CardLoading/CardLoading";
import Project from "./Project";

const Projects = () => {

  const {
    data: projects,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data } = await axios.get("https://portfolio-rakibul-islam.vercel.app/projects");
      return data;
    },
  });

  if (isLoading) {
    return <CardLoading />
  }

// console.log(projects);

  return (
    <section className="my-10 mx-10 md:mx-40">
      <h2 className="text-4xl text-center my-10 mx-auto text-purple-600">Portfolio</h2>
      <h2 className="text-4xl text-center my-10 mx-auto">
        {projects?.length > 0 ? "" : "No Data Found"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects?.map((project) => (
          <Project key={project._id} project={project}></Project>
        ))}
      </div>
    </section>
  );
};

export default Projects;
