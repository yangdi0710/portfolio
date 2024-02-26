import Facebook from "../assets/img/Facebook.svg";
import Insta from "../assets/img/Instagram.svg";
import LinkedIn from "../assets/img/Linkedin.svg";

function Footer() {
  return (
    <div className="mt-28 mb-14 mx-32 flex justify-around items-center text-gray-400 text-2xl">
      <div>
        <p>Copyright @ 2024</p>
      </div>
      <div>
        <ul className="flex gap-8 text-2xl">
          <li>
            <a href="/">
              <img className="w-10" src={Facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="/">
              <img className="w-10" src={Insta} alt="" />
            </a>
          </li>
          <li>
            <a href="/">
              <img className="w-10" src={LinkedIn} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
