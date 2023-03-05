import { useState, useEffect } from "react";
// import SkillsSlider from "./SkillsSlider";
import Skill from "./Skill";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // fetch("https://portfolio-1md-rakibul-islam.vercel.app/skills")
    fetch("skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

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