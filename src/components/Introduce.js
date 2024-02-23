import Portfile from "../assets/img/ip14.jpeg";
import PortfileBg from "../assets/img/Ellipse 15.png";

function Introduce() {
  return (
    <div className="mt-44 flex justify-between flex-col sm:flex-row md:flex-row">
      <div className="pr-32 mb-12">
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
      <div className=" flex justify-center m-auto flex-1 p-14 -mt-16 relative">
        <img
          className="introduce__image relative top-5 z-10"
          src={Portfile}
          alt=""
        />
        <img className="absolute top-24 left-12 z-0" src={PortfileBg} alt="" />
      </div>
    </div>
  );
}

export default Introduce;
