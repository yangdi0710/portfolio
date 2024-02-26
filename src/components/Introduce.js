import Portfile from "../assets/img/ip14.jpeg";
import PortfileBg from "../assets/img/Ellipse 15.png";

function Introduce() {
  return (
    <div className="mt-44 pr-10 flex flex-wrap gap-5 min-h-[300px] justify-center">
      <div className="max-w-[64%] min-w-[400px]">
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
      <div className="mt-[24px] tablet:mt-0">
        <img className="introduce__image relative z-10" src={Portfile} alt="" />
        <span className="absolute">
          <img
            className="port__bg absolute -top-[210px] left-[36px] z-0"
            src={PortfileBg}
            alt=""
          />
        </span>
      </div>
    </div>
  );
}

export default Introduce;
