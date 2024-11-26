import ButtonM from "./ButtonM";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#1B1B1B]  text-white">
      <p className="md:text-7xl max-md:text-4xl text-center font-semibold pt-20">
        Let’s grow and solve <br />
        together
      </p>
      <div className="border border-white max-md:w-[401px] md:w-[180px] mt-16 mx-auto">
        <ButtonM className="max-md:w-[400px] max-md:px-[140px]" word="Get in touch" />
      </div>
      <div className="grid max-md:px-5 max-md:gap-y-4 md:gap-x-24 md:grid-cols-4 md:px-32 pt-32">
        <div >
          <p className="text-lg text-gray-400 font-semibold max-md:pb-2">ADDRESS</p>
          <ul className="list-none space-y-2 text-xl mt-2">
            <li>69 27th Main Road, Bengaluru, </li>
            <li>Karnataka 560102, India</li>
          </ul>
        </div>
        <div >
          <p className="text-lg text-gray-400 font-semibold max-md:pb-2 max-md:pt-8">CONTACT</p>
          <ul className="list-none space-y-2 text-xl mt-2">
            <li>Inservice@India.com</li>
            <li>+91 7357x xxxxx</li>
          </ul>
        </div>
        <div >
          <p className="text-lg text-gray-400 font-semibold max-md:pb-2 max-md:pt-8">STAY UP TO DATE</p>
          <div className="border-b-2 max-md:w-[210px] mt-2">
  <input
    type="text"
    placeholder="E-mail"
    className="bg-inherit outline-none"
  />
  <button className="relative md:pl-16 group">
    <FaArrowUp className="ml-2 mt-1 origin-center transform rotate-45 transition-transform duration-500 ease-out group-hover:rotate-90" />
  </button>
</div>
        </div>
        <div >
          <p className="text-lg text-gray-400 font-semibold max-md:pb-2 max-md:pt-8">SOCIAL MEDIA</p>
          <ul className="list-none space-y-2 text-xl mt-2">
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>Awwwards</li>
          </ul>
        </div>
      </div>
        <div className="md:text-center pt-16 pb-20 flex max-md:flex-col md:flex-row md:gap-10 max-md:ml-4 md:mx-20 text-[#868686] ">
            <p className="text-lg md:pr-[900px]">© 2024 Via India</p>
            <p className="text-lg pl-2">Privacy Policy</p>
            <p className="text-lg pl-2">Terms of Service</p>

        </div>
    </div>
  );
};

export default Footer;
