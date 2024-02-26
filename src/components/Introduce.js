import Portfile from "../assets/img/ip14.jpeg";
import PortfileBg from "../assets/img/Ellipse 15.png";

function Introduce() {
  return (
    <div className="mt-44 grid grid-cols-2 gap-5 min-h-[300px]">
      <div className="max-w-[90%]">
        <h2 className="font-bold text-7xl">Hello, I'm Duy</h2>
        <h1 className="gradient-text font-bold text-5xl mt-6 mr-5 running-text">
          Frontend Developer
        </h1>
        <p className="mt-1 text-gray-400">
          Id mollit consequat nulla do reprehenderit mollit eu aliquip
          exercitation reprehenderit ex nulla. Consequat sint voluptate velit
          deserunt officia dolore nostrud ut veniam ipsum.
        </p>
      </div>
      <div className=" relative">
        <img className="introduce__image absolute z-10" src={Portfile} alt="" />
        <img
          className="port__bg absolute top-24 left-8 z-0"
          src={PortfileBg}
          alt=""
        />
      </div>
    </div>
  );
}

export default Introduce;
