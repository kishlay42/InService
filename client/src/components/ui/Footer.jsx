import ButtonM from "./ButtonM";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#1B1B1B]  text-white">
      <p className="text-7xl text-center font-semibold pt-20">
        Let’s grow and solve <br />
        together
      </p>
      <div className="border border-white w-[180px] mt-16 mx-auto">
        <ButtonM word="Get in touch" />
      </div>
      <div className="grid gap-x-24 grid-cols-4 px-32 pt-32">
        <div >
          <p className="text-lg text-gray-400 font-semibold">ADDRESS</p>
          <ul className="list-none space-y-2 text-xl mt-2">
            <li>Wibautstraat 131-D</li>
            <li>1091 GL Amsterdam</li>
          </ul>
        </div>
        <div >
          <p className="text-lg text-gray-400 font-semibold">CONTACT</p>
          <ul className="list-none space-y-2 text-xl mt-2">
            <li>hello@viamsterdam.com</li>
            <li>+31 20 777 00 17</li>
          </ul>
        </div>
        <div >
          <p className="text-lg text-gray-400 font-semibold">STAY UP TO DATE</p>
          <div className="border-b-2 mt-2">
  <input
    type="text"
    placeholder="E-mail"
    className="bg-inherit outline-none"
  />
  <button className="relative pl-16 group">
    <FaArrowUp className="ml-2 mt-1 origin-center transform rotate-45 transition-transform duration-500 ease-out group-hover:rotate-90" />
  </button>
</div>
        </div>
        <div >
          <p className="text-lg text-gray-400 font-semibold">SOCIAL MEDIA</p>
          <ul className="list-none space-y-2 text-xl mt-2">
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>Awwwards</li>
          </ul>
        </div>
      </div>
        <div className="text-center pt-16 pb-20 flex flex-row gap-10 mx-20 text-[#868686]">
            <p className="text-lg pr-[900px]">© 2024 Via India</p>
            <p className="text-lg pl-2">Privacy Policy</p>
            <p className="text-lg pl-2">Terms of Service</p>

        </div>
    </div>
  );
};

export default Footer;
