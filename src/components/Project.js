import React from "react";
import Project1 from "../assets/img/Project1.jpg";
import Project2 from "../assets/img/Project2.png";

function Project() {
  return (
    <div className="mt-32 mx-32">
      <h2 className="my-16 text-center text-6xl font-serif font-extrabold">
        Project
      </h2>
      <div className="flex gap-10">
        <div className="flex flex-col justify-between border-2 rounded-lg p-9">
          <img src={Project1} alt="" />
          <div className="flex flex-1 flex-col">
            <h3 className="font-semibold text-4xl pt-12">
              Aliquip proident commodo nostrud nostrud quis{" "}
            </h3>
            <p className="text-gray-400 mt-3 text-2xl">
              Commodo dolore nulla ut exercitation voluptate magna dolor labore
              ut.veniam eu reprehenderit Lorem duis elit.
            </p>
          </div>
          <div className="flex justify-end gap-6 mt-3">
            <button className="p-4 bg-gradient-to-t from-blue-400 to-cyan-200 rounded-full text-black font-bold font-sans text-2xl hover:from-blue-500 hover:to-cyan-400">
              Live preview
            </button>
            <button className="p-4 border rounded-full font-bold font-sans text-2xl hover:border-gray-400 hover:text-gray-300">
              Checkout github
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between border-2 rounded-lg p-9">
          <img src={Project2} alt="" />
          <div className="flex flex-1 flex-col">
            <h3 className="font-semibold text-4xl pt-12">
              Aliquip proident commodo nostrud nostrud quissajdkjsadnkjsadnkjasn{" "}
            </h3>
            <p className="text-gray-400 mt-3 text-2xl">
              Commodo dolore nulla ut exercitation voluptate
            </p>
          </div>
          <div className="flex justify-end gap-6 mt-3">
            <button className="p-4 bg-gradient-to-t from-blue-400 to-cyan-200 rounded-full text-black font-bold font-sans text-2xl hover:from-blue-500 hover:to-cyan-400">
              Live preview
            </button>
            <button className="p-4 border rounded-full font-bold font-sans text-2xl hover:border-gray-400 hover:text-gray-300">
              Checkout github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
