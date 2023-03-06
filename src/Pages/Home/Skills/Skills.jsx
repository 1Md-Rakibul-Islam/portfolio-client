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
      const { data } = await axios.get("https://portfolio-rakibul-islam.vercel.app/skills");
      return data;
    },
  });

  if (isLoading) {
    return <div className="flex my-40 items-center justify-center space-x-2">
    <div className="w-4 h-4 rounded-full animate-pulse bg-purple-700"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-purple-700"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-purple-700"></div>
  </div>
  }

  console.log(skills);

  return (
    <section id="skills" className="my-20 mx-5 md:mx-20">
      {/* <SkillsSlider></SkillsSlider> */}
      <div className="grid bg-black rounded-md p-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-4 gap-8">
        {skills?.map((skill) => (
          <Skill key={skill._id} skill={skill}></Skill>
        ))}
      </div>
    </section>
  );
};

export default Skills;