import React from "react";
import TechnologyItem from "./TechnologyItem";

function Technologies() {
  return (
    <div className="mt-40 mx-32">
      <div
        id="technologies"
        className="my-16 text-center text-6xl font-serif font-extrabold"
      >
        Technologies
      </div>
      <TechnologyItem />
    </div>
  );
}

export default Technologies;
