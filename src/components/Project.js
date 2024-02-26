import React from "react";
import ProjectItem from "./ProjectItem";

function Project() {
  return (
    <div className="mt-44 mx-32 tablet:mt-32">
      <h2
        id="project"
        className="my-16 text-center text-6xl font-serif font-extrabold"
      >
        Project
      </h2>
      <div className="flex w-full flex-wrap justify-center gap-10">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
}

export default Project;
