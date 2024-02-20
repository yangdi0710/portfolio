import Portfile from "../assets/img/ip14.jpeg";
import PortfileBg from "../assets/img/Ellipse 15.png";

function Introduce() {
  return (
    <>
      <div className="mt-20 flex justify-between">
        <div>
          <h2 className="font-bold text-6xl">Hello, I'm Duy</h2>
          <h1 className="gradient-text font-bold text-6xl mt-6">
            Frontend Developer
          </h1>
          <p className="mt-1 text-gray-400">
            Id mollit consequat nulla do reprehenderit mollit eu aliquip
            exercitation reprehenderit ex nulla. Consequat sint voluptate velit
            deserunt officia dolore nostrud ut veniam ipsum.
          </p>
        </div>
        <div className="justify-items-center justify-center m-auto ml-20 relative">
          <img
            className="introduce__image relative z-10"
            src={Portfile}
            alt=""
          />
          <img
            className="absolute -top-12 -right-6 overflow-hidden z-0"
            src={PortfileBg}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Introduce;
