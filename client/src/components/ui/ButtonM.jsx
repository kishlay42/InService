import { FaArrowUp } from "react-icons/fa6";

const ButtonM = ({ word = "Learn More" }) => {
  return (
    <div>
      {/* effect */}
      <button className="btn py-5 px-8 relative inline-flex items-center justify-start overflow-hidden transition-all bg-[#333333] hover:bg-[#333333] group">
        {/* purple box */}
        <span className="w-0 h-0 bg-blue-600 absolute bottom-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-[100%] -z-1"></span>
        <span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10 flex flex-row gap-2">
          <span className="text-md font-semibold text-white">{word}</span>
          <FaArrowUp className="mt-1 origin-center transform rotate-45 transition-transform duration-500 ease-out group-hover:rotate-90" />
        </span>
      </button>
    </div>
  );
};

export default ButtonM;