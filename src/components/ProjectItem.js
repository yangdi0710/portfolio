import Project1 from "../assets/img/Project1.jpg";

function ProjectItem() {
  return (
    <>
      <div className="project__item--width item border-2 rounded-lg px-9 pt-9 pb-5 sm:w-[76%] md:w-[76%]">
        <img src={Project1} alt="" />
        <div className="flex flex-col">
          <h3 className="font-semibold text-4xl pt-12">
            Aliquip proident commodo nostrud nostrud quis{" "}
          </h3>
          <p className="text-gray-400 mt-3 text-2xl">
            Commodo dolore nulla ut exercitation voluptate magna dolor labore
            ut.veniam eu reprehenderit Lorem duis elit.
          </p>
        </div>
        <div className="flex justify-end gap-6 mt-5">
          <button className="p-4 bg-gradient-to-t from-blue-400 to-cyan-200 rounded-full text-black font-bold font-sans text-2xl hover:from-blue-500 hover:to-cyan-400">
            Live preview
          </button>
          <button className="p-4 border rounded-full font-bold font-sans text-2xl hover:border-gray-400 hover:text-gray-300">
            Checkout github
          </button>
        </div>
      </div>
    </>
  );
}

export default ProjectItem;
