import React from "react";

const Skill = ({ skill }) => {
  const { _id, name, image, experience } = skill;

  return (
    <div className="flex flex-col gap-2 p-5 rounded-2xl justify-center items-center backdrop-blur bg-purple-500/[6%] border border-purple-600/50  group">
      <img
        className="w-14 h-auto group-hover:scale-[112%] transition-all duration-500"
        src={image}
        alt="Skill"
      />
      <div className="text-white text-center">
        <h2 className="text-2xl">{name}</h2>
      </div>
    </div>
  );
};

export default Skill;
