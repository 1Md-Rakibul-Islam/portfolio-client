import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState, useEffect } from "react";
import PreLoading from "../../../Components/Loadings/PreLoading/PreLoading";
// import SkillsSlider from "./SkillsSlider";
import Skill from "./Skill";

const Skills = () => {
  const {
    data: skills,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const { data } = await axios.get("skills.json");
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex my-40 items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse bg-purple-700"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-purple-700"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-purple-700"></div>
      </div>
    );
  }

  return (
    <section id="skills" className="section-py bg-black">
      <div className="container">
        <h2 className="text-5xl text-purple-600 mb-10 text-center">
          My Skills
        </h2>
        <div className="grid rounded-md p-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-4 gap-8 ">
          {skills?.map((skill) => (
            <Skill key={skill._id} skill={skill}></Skill>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
