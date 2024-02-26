import React from "react";
import AddSkillsItem from "./AddSkillsItem";

function AdditionalSkills() {
  return (
    <div className="mt-40 mx-32">
      <h2
        id="additionalSkills"
        className="my-16 text-center text-6xl font-serif font-extrabold"
      >
        Additional technologies and skills
      </h2>
      <div className="flex w-full justify-center flex-wrap px-20 gap-10">
        <AddSkillsItem />
      </div>
    </div>
  );
}

export default AdditionalSkills;
